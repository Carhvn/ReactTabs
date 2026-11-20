import PostItem from "./PostItem";
import type { Post } from "../../Types/api";
import useFetch from "../../hooks/useFetch";
import RequestStatus from "../RequestStatus/RequestStatus";
export default function Posts() {
    const postsRequest = useFetch<Post[]>(
        "https://jsonplaceholder.typicode.com/posts",
      []
    );

    const posts = postsRequest.data;
    const loading = postsRequest.loading;
    const error = postsRequest.error;

  return (
    <section>
      <h2>Посты</h2>
      <RequestStatus loading={loading} error={error}/>
      <ul>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
