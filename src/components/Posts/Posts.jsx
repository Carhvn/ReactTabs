import { useState, useEffect } from "react";
import PostItem from "./PostItem";
export default function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  async function fetchPosts() {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );

      if (!response.ok) {
        throw new Error("Ошибка загрузки данных");
      }
      const data = await response.json();

      setPosts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section>
      <h2>Посты</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
