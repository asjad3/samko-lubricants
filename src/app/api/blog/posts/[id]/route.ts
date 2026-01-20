import { NextRequest, NextResponse } from "next/server";
import { defaultPosts, generateSlug, calculateReadTime, type BlogPost } from "@/lib/blog";

// In-memory storage (shared with the main posts route)
// In production, use a proper database
let posts: BlogPost[] = [...defaultPosts];

// GET - Get a single post by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const post = posts.find(p => p.id === id);
    
    if (!post) {
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: post,
    });
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}

// PUT - Update a post
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    const postIndex = posts.findIndex(p => p.id === id);
    
    if (postIndex === -1) {
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404 }
      );
    }
    
    const existingPost = posts[postIndex];
    const now = new Date().toISOString();
    
    // Generate new slug if title changed
    let newSlug = existingPost.slug;
    if (body.title && body.title !== existingPost.title) {
      newSlug = generateSlug(body.title);
      // Check for duplicate slug (excluding current post)
      if (posts.some(p => p.slug === newSlug && p.id !== id)) {
        return NextResponse.json(
          { error: "A post with this title already exists" },
          { status: 400 }
        );
      }
    }
    
    const updatedPost: BlogPost = {
      ...existingPost,
      title: body.title || existingPost.title,
      slug: newSlug,
      excerpt: body.excerpt || existingPost.excerpt,
      content: body.content || existingPost.content,
      category: body.category || existingPost.category,
      author: body.author || existingPost.author,
      authorRole: body.authorRole || existingPost.authorRole,
      updatedAt: now,
      readTime: body.content ? calculateReadTime(body.content) : existingPost.readTime,
      image: body.image || existingPost.image,
      featured: body.featured !== undefined ? body.featured : existingPost.featured,
      published: body.published !== undefined ? body.published : existingPost.published,
      tags: body.tags || existingPost.tags,
    };
    
    posts[postIndex] = updatedPost;
    
    return NextResponse.json({
      success: true,
      data: updatedPost,
      message: "Post updated successfully",
    });
  } catch (error) {
    console.error("Error updating post:", error);
    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 }
    );
  }
}

// DELETE - Delete a post
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const postIndex = posts.findIndex(p => p.id === id);
    
    if (postIndex === -1) {
      return NextResponse.json(
        { error: "Post not found" },
        { status: 404 }
      );
    }
    
    const deletedPost = posts[postIndex];
    posts.splice(postIndex, 1);
    
    return NextResponse.json({
      success: true,
      data: deletedPost,
      message: "Post deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 }
    );
  }
}
