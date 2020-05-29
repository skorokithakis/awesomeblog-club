import Link from "next/link";
import { BlogType } from "../utils/types";

interface BlogProps extends BlogType {}

export function Blog({ website, title, description, author, tags }: BlogProps) {
  return (
    <div className="blog-card">
      <a href={website} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
      <h6> Authored by {author}</h6>
      <p> {description}</p>
      <div className="tags-container">
        {tags.sort().map((item, index) => (
          <Link href="/tags/[id]" as={`/tags/${item}`} key={index}>
            <a>{item}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}

interface BlogListProps {
  items: BlogType[];
}

export function BlogList(props: BlogListProps) {
  return (
    <div>
      {props.items.map((blog, index) => {
        return <Blog key={index} {...blog} />;
      })}
    </div>
  );
}
