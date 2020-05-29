import Fuse from "fuse.js";
import { useState } from "react";
import { BlogType } from "../utils/types";
import { BlogList } from "./Blog";

interface SearchListProps {
  blogs: BlogType[];
  fuse: Fuse<any, any>;
}

export function SearchList(props: SearchListProps) {
  const blogs = props.blogs;
  const [list, setList] = useState(blogs);
  function onQuery(event) {
    const query = event.target.value as string;
    if (query.length < 2 && list.length < 1) {
      return setList(blogs);
    }
    if (query.length < 2) return;
    const results = props.fuse.search(query);
    const items = results.map((result) => result.item);
    setList(items);
  }
  return (
    <div>
      <h6> New favorite blog few typos away... </h6>
      <input
        placeholder="programming"
        aria-label="search box"
        type="text"
        onChange={onQuery}
      />
      <p> Search works with all the metadata including tags. </p>
      <BlogList items={list} />
    </div>
  );
}
