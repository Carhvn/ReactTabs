import { useEffect, useState } from "react";

export default function PostComments({ postId }) {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCommentsPosts() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
        );

        if (!response.ok) {
          throw new Error("Ошибка загрузки данных");
        }
        const data = await response.json();
        setComments(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCommentsPosts();
  }, [postId]);
  return (
    <section>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <p style={{ marginBottom: "1rem" }}>Комментарии поста: {postId}</p>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            Name: {comment.name}
            <br />
            Email: {comment.email}
            <br />
            Body: {comment.body}
          </li>
        ))}
      </ul>
    </section>
  );
}
