import Fuse from "fuse.js";
import Link from "next/link";
import { IAmFeelingLucky } from "../components/IAmFeelingLucky";
import { Meta } from "../components/Meta";
import { SearchList } from "../components/SearchList";
import { Layout } from "../layouts/default";
import { store } from "../utils/store";

function IndexPage({ blogs }) {
  const options = {
    keys: ["title", "author", "tags", "description", "website"],
  };
  const fuse = new Fuse(blogs, options);

  return (
    <Layout>
      <Meta
        title="Awesomeblog.club - explore"
        description="Discover awesome small and personal blogs."
      />
      <blockquote>
        I am hijacking this blockquote. I built this in response to various{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://news.ycombinator.com/item?id=22800136"
        >
          {" "}
          ask HNs{" "}
        </a>{" "}
        and reddit posts asking for personal and small blogs to follow. I like
        them so much but they are getting harder to find with everyone spamming
        AMP and SEO bs in search results. So I made this. Read more about
        <Link href="/motivation">
          <a> here</a>
        </Link>
        .
      </blockquote>

      <h6> Maybe you should try something random today? </h6>
      <IAmFeelingLucky />

      <SearchList fuse={fuse} blogs={blogs} />
    </Layout>
  );
}

export async function getStaticProps() {
  const blogs = store.getBlogs();
  return {
    props: {
      blogs,
    },
  };
}

export default IndexPage;
