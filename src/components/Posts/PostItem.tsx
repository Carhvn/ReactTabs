import { useState } from "react";
import Button from "../Button/Button";
import PostComments from "./PostComments";
import type { Post } from "../../Types/api";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { postAdded, postDeleted } from "../../features/favorites/favoritesSlice";

export default function PostItem({ post }: { post: Post }) {
  const dispatch = useDispatch<AppDispatch>();

  const isFavorite = useSelector((state: RootState) =>
    state.favorites.posts.some((favoritePost) => favoritePost.id === post.id))
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((isCommentOpen) => !isCommentOpen);
  }
  function handleFavoriteClick() {
    if (isFavorite) {
      dispatch(postDeleted(post.id))
      return
    } dispatch(postAdded(post))
  }
  return (
    <li>
      Title: {post.title}
      <br />
      Body: {post.body}
      <Button
        onClick={handleClick}
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
      >
        {isOpen ? "Скрыть комментарии" : "Открыть комментарии"}
      </Button>
      <Button isActive={isFavorite} onClick={handleFavoriteClick}>{isFavorite ? "В избранном" : "Добавить в избранное"}</Button>

      {isOpen && <PostComments postId={post.id} />}
    </li>
  );
}
