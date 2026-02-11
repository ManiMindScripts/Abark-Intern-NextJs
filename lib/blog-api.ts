import { Post, Comment } from "@/types/blog"

export async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  })

  if (!res.ok) throw new Error("Failed to fetch posts")
  return res.json()
}

export async function getPost(id: string): Promise<Post> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { cache: "no-store" }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch post") 
  }

  return res.json()
}

export async function getComments(
  id: string
): Promise<Comment[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    { cache: "no-store" }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch comments")
  }

  return res.json()
}