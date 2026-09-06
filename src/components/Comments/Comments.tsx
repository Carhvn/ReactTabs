import type { Comment } from "../../Types/api";
import useFetch from "../../hooks/useFetch";
import RequestStatus from "../RequestStatus/RequestStatus";
export default function Comments() {
  
  const commentsRequest = useFetch<Comment[]>(
     "https://jsonplaceholder.typicode.com/comments",
    []
  )

  const comments = commentsRequest.data;
  const loading = commentsRequest.loading;
  const error = commentsRequest.error;

  return (
    <section>
      <h2>Комментарии</h2>
      <RequestStatus loading={loading} error={error}/>
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
