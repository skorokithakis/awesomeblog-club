import { BlogList } from "../../components/Blog";
import { Meta } from "../../components/Meta";
import { Layout } from "../../layouts/default";
import { store } from "../../utils/store";

function TagIdPage({ blogs, tag }) {
  return (
    <Layout>
      <Meta
        title={`Awesomeblog.club - explore ${tag} `}
        description={`Discover awesome small and personal blogs focused on ${tag}`}
      />
      <p>
        All the blogs matching tag: <strong> {tag} </strong>{" "}
      </p>
      <BlogList items={blogs} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = store.getTags().map((tag) => `/tags/${tag}`);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const tag = params.id;
  const blogs = store.getBlogsByTag(tag);
  return {
    props: {
      blogs,
      tag,
    },
  };
}
export default TagIdPage;
