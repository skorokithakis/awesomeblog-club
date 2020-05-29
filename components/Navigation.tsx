import Link from "next/link";

export function Navigation() {
  return (
    <p>
      <Link href="/">
        <a>
          <h2>
            {process.env.DOMAIN.charAt(0).toUpperCase() +
              process.env.DOMAIN.slice(1)}
          </h2>
        </a>
      </Link>
      <p> {process.env.DESCRIPTION} </p>
      <p>
        <Link href="/contribute">
          <a> How to contribute </a>
        </Link>
        /
        <Link href="/submit">
          <a> Submit your blog </a>
        </Link>
        /
        <Link href="/deployment">
          <a> Deploy your own </a>
        </Link>
        /
        <Link href="/contact">
          <a> Contact </a>
        </Link>
        /{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={process.env.CODE_REPO}
        >
          Source Code
        </a>
      </p>
    </p>
  );
}
