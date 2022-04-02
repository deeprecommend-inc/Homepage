import React from 'react';
import ContactComponent from '../components/custom/sections/contactcomponent';
import Head from "next/head";
import { useLocale } from "../locales/useLocale";
import HeaderComponent from '../components/custom/sections/headercomponent';

const Contact = () => {
    const { t } = useLocale();

    return (
        <div>
          <Head>
            <title>
              {t.deeplog.head.title}
            </title>
            <meta
              name="description"
              content={t.deeplog.head.description}
            />
            <link rel="icon" href="favicon.ico" />
          </Head>
          <HeaderComponent/>
          <ContactComponent />
        </div>
    )
}

export default Contact;