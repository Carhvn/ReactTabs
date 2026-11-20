import type { Comment } from "../../Types/api";
import { API_URL } from "../../constants/api";
import useFetch from "../../hooks/useFetch";
import RequestStatus from "../RequestStatus/RequestStatus";
export default function PostComments({ postId }: { postId: number }) {
  const postCommentsRequest = useFetch<Comment[]>(
    `${API_URL}/comments?postId=${postId}`,
    [],
  );

  const comments = postCommentsRequest.data;
  const loading = postCommentsRequest.loading;
  const error = postCommentsRequest.error;

  return (
    <div>
      <RequestStatus loading={loading} error={error} />
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
    </div>
  );
}
