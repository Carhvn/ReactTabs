import Comments from "./Comments";
import Posts from "../Posts/Posts";
import TabSection from "./TabSection";
import Users from "./Users";
import { useState } from "react";

export default function ContentSection() {
  const [tab, setTab] = useState("users");
  return (
    <section>
      <h1>Контент</h1>
      <TabSection active={tab} onChange={(current) => setTab(current)} />
      {tab === "users" && <Users />}
      {tab === "comments" && <Comments />}
      {tab === "posts" && <Posts />}
    </section>
  );
}
