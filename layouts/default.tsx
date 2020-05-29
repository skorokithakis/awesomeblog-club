import { Fragment, ReactNode } from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import { Footer } from "../components/Footer";
import { Meta, MetaProps } from "../components/Meta";
import { Navigation } from "../components/Navigation";

export interface LayoutFrontMatter extends MetaProps {}

export interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Fragment>
      <Navigation />
      <BreadCrumb />
      {children}
      <Footer />
    </Fragment>
  );
}

export default function MDXLayout(frontMatter: LayoutFrontMatter) {
  return ({ children }: LayoutProps) => {
    return (
      <Layout>
        <Meta {...frontMatter} />
        {children}
      </Layout>
    );
  };
}
