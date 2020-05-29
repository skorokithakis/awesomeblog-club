import Head from "next/head";
import { Fragment } from "react";

export interface MetaProps {
  title: string;
  description: string;
  card?: string;
  image?: string;
  url?: string;
}

export function Meta(props: MetaProps) {
  const { title, description, card, image } = props;
  const url = props.url ? props.url : `https://${process.env.DOMAIN}`;
  return (
    <Head>
      <title> {title}</title>
      <meta key="title" name="title" content={title} />
      <meta key="description" name="description" content={description} />
      {image && (
        <Fragment>
          <meta key="og:image" property="og:image" content={image} />
          <meta key="twitter:image" property="twitter:image" content={image} />
        </Fragment>
      )}
      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:url" property="og:url" content={url} />
      <meta key="og:title" property="og:title" content={title} />
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />

      {card && (
        <meta key="twitter:card" property="twitter:card" content={card} />
      )}
      <meta key="twitter:url" property="twitter:url" content={url} />
      <meta key="twitter:title" property="twitter:title" content={title} />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={description}
      />
    </Head>
  );
}
