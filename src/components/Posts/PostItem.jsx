import { useState } from "react";
import Button from "../ButtonFolder/Button";
import PostComments from "./PostComments";
export default function PostItem({ post }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((isCommentOpen) => !isCommentOpen);
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
      {isOpen && <PostComments postId={post.id} />}
    </li>
  );
}
