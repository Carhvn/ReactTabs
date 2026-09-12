import Comments from "../components/Comments/Comments";
import Posts from "../components/Posts/Posts";
import TabSection from "../components/Tabs/TabSection";
import Users from "../components/Users/Users";
import { useState } from "react";
import type { Tab } from "../components/Tabs/TabSection";
import Favorites from "../components/Favorites/Favorites";
export default function ContentPage() {
  const [tab, setTab] = useState<Tab>("users");
  return (
    <section>
      <h1>Контент</h1>
      <TabSection active={tab} onChange={(current) => setTab(current)} />
      {tab === "users" && <Users />}
      {tab === "comments" && <Comments />}
      {tab === "posts" && <Posts />}
      {tab === "favorites" && <Favorites />}
    </section>
  );
}
