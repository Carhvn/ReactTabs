import Button from "../Button/Button";
export type Tab = "posts" | "users" | "comments" | "favorites"
interface TabSectionProps {
  active: Tab,
  onChange: (tab: Tab) => void
}

export default function TabSection({ active, onChange }: TabSectionProps) {
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
      <Button
        isActive={active === "favorites"}
        onClick={() => onChange("favorites")}
      >
        Избранные
      </Button>
    </section>
  );
}
