import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

export function BreadCrumb() {
  const { asPath } = useRouter();

  const segments = asPath
    .split("/")
    .splice(1)
    .filter((item) => item !== "");

  return (
    <p>
      <Link href="/">
        <a> directory </a>
      </Link>
      {segments.length > 0 &&
        segments.map((path, index) => {
          const link = segments.slice(0, index + 1).join("/");
          return (
            <Fragment key={index}>
              {" "}
              /{" "}
              <Link href={`/${link}`}>
                <a> {path.replace(/%20/g, " ")}</a>
              </Link>
            </Fragment>
          );
        })}
    </p>
  );
}
