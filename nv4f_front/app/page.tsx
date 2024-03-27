"use client";
import Postfilter from "@/components/PostFilter";
import PostList from "@/components/PostList";
import { useState } from "react";


export default function Home() {
  const [filterQuery, setFilterQuery] = useState("");

  return (
    <main className="pt-20">
      <div className="center-content">
        <Postfilter setFilterQuery={setFilterQuery}/>
        <PostList filterQuery={filterQuery}/>
      </div>
    </main>
    );
}
