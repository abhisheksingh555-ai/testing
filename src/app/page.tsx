"use client";

import { useEffect, useState } from "react";
import { allData, Post } from "@/api/api";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch all posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await allData();

        setPosts(data);
        setFilteredPosts(data);
      } catch (err: unknown) {
        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Debouncing logic
  useEffect(() => {
    const timer = setTimeout(() => {
      const result = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );

      setFilteredPosts(result);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search, posts]);

  return (
    <div className="flex w-full min-h-screen">
      <div className="bg-gray-100 p-4 w-full">
        <h1 className="text-xl font-bold mb-4">
          All Data
        </h1>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 border rounded w-full mb-4"
        />

        {loading && <p>Loading...</p>}

        {error && (
          <p className="text-red-500">{error}</p>
        )}

        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="p-3 mb-2 bg-white rounded shadow"
          >
            <h2 className="font-bold">
              {post.title}
            </h2>

            <p>{post.body}</p>
          </div>
        ))}

        {!loading && filteredPosts.length === 0 && (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
}
