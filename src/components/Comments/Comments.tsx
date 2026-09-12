import { useGetCommentsQuery } from "../../services/jsonPlaceholderApi";
import RequestStatus from "../RequestStatus/RequestStatus";
export default function Comments() {

  const { data: comments = [], isLoading, error } = useGetCommentsQuery()


  return (
    <section>
      <h2>Комментарии</h2>
      <RequestStatus loading={isLoading} error={error ? "Error" : null} />
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
