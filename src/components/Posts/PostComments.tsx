import { useGetPostCommentsQuery } from "../../services/jsonPlaceholderApi";
import RequestStatus from "../RequestStatus/RequestStatus";
export default function PostComments({ postId }: { postId: number }) {

  const { data: comments = [], isLoading, error } = useGetPostCommentsQuery(postId)


  return (
    <section>
      <RequestStatus loading={isLoading} error={error ? "Error" : null} />
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
