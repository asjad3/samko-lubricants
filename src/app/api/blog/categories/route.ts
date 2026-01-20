import { NextResponse } from "next/server";
import { defaultCategories } from "@/lib/blog";

// GET - Retrieve all categories
export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: defaultCategories,
      total: defaultCategories.length,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
