import Button from "../ButtonFolder/Button";

export default function TabSection({ active, onChange }) {
  return (
    <section>
      <Button isActive={active === "posts"} onClick={() => onChange("posts")}>
        Посты
      </Button>
      <Button isActive={active === "users"} onClick={() => onChange("users")}>
        Юзеры
      </Button>
      <Button
        isActive={active === "comments"}
        onClick={() => onChange("comments")}
      >
        Комментарии
      </Button>
    </section>
  );
}
