import { NextRequest, NextResponse } from "next/server";
import { defaultPosts, generateSlug, calculateReadTime, generateId, type BlogPost } from "@/lib/blog";

// In-memory storage (in production, use a database)
let posts: BlogPost[] = [...defaultPosts];

// GET - Retrieve all posts or filter by query params
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const featured = searchParams.get("featured");
    const published = searchParams.get("published");
    const slug = searchParams.get("slug");
    const limit = searchParams.get("limit");
    
    let filteredPosts = [...posts];
    
    // Filter by slug (single post)
    if (slug) {
      const post = filteredPosts.find(p => p.slug === slug);
      if (!post) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
      }
      return NextResponse.json({ success: true, data: post });
    }
    
    // Filter by category
    if (category) {
      filteredPosts = filteredPosts.filter(p => 
        p.category.toLowerCase() === category.toLowerCase()
      );
    }
    
    // Filter by featured
    if (featured === "true") {
      filteredPosts = filteredPosts.filter(p => p.featured);
    }
    
    // Filter by published status
    if (published !== null) {
      const isPublished = published === "true";
      filteredPosts = filteredPosts.filter(p => p.published === isPublished);
    } else {
      // Default to only published posts for public API
      filteredPosts = filteredPosts.filter(p => p.published);
    }
    
    // Sort by date (newest first)
    filteredPosts.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
    
    // Limit results
    if (limit) {
      filteredPosts = filteredPosts.slice(0, parseInt(limit, 10));
    }
    
    return NextResponse.json({
      success: true,
      data: filteredPosts,
      total: filteredPosts.length,
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

// POST - Create a new post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ["title", "excerpt", "content", "category", "author", "authorRole"];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }
    
    const now = new Date().toISOString();
    const slug = generateSlug(body.title);
    
    // Check for duplicate slug
    if (posts.some(p => p.slug === slug)) {
      return NextResponse.json(
        { error: "A post with this title already exists" },
        { status: 400 }
      );
    }
    
    const newPost: BlogPost = {
      id: generateId(),
      title: body.title,
      slug,
      excerpt: body.excerpt,
      content: body.content,
      category: body.category,
      author: body.author,
      authorRole: body.authorRole,
      publishedAt: body.publishedAt || now,
      updatedAt: now,
      readTime: calculateReadTime(body.content),
      image: body.image || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
      featured: body.featured || false,
      published: body.published !== undefined ? body.published : true,
      tags: body.tags || [],
    };
    
    posts.unshift(newPost);
    
    return NextResponse.json({
      success: true,
      data: newPost,
      message: "Post created successfully",
    }, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
