import Link from "next/link";
import { store } from "../utils/store";

export function Tags() {
  return (
    <div>
      <h5> All tags </h5>
      <p className="tags-container">
        {store.getTags().map((tag, index) => {
          return (
            <Link key={index} href={`/tags/${tag}`}>
              <a
                style={{
                  marginRight: 5,
                }}
              >
                {" "}
                {tag}{" "}
              </a>
            </Link>
          );
        })}
      </p>
    </div>
  );
}
