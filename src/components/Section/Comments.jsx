import { useEffect, useState } from "react";

export default function Comments() {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  async function fetchComments() {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments",
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
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <section>
      <h2>Комментарии</h2>
      {loading && <p>загрузка</p>}
      {error && <p>{error}</p>}
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
