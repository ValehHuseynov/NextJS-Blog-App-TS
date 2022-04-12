import type { NextPage } from "next";
import Head from "next/head";
import { Fragment } from "react";
import ContactPage from "../components/contact/contact-form";

const Contact: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>VH Contact</title>
        <meta name="description" content="VH Contact" />
      </Head>
      <ContactPage />
    </Fragment>
  );
};

export default Contact;
