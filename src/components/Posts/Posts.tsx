import PostItem from "./PostItem";
import { useGetPostsQuery } from "../../services/jsonPlaceholderApi";
import RequestStatus from "../RequestStatus/RequestStatus";
export default function Posts() {


  const { data: posts = [], isLoading, error } = useGetPostsQuery();


  return (
    <section>
      <h2>Посты</h2>
      <RequestStatus loading={isLoading} error={error ? "Error" : null} />
      <ul>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
