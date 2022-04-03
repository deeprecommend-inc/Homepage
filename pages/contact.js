import React from 'react';
import ContactComponent from '../components/custom/sections/contactcomponent';
import Head from "next/head";
import { useLocale } from "../locales/useLocale";
import HeaderComponent from '../components/custom/sections/headercomponent';
import { NextSeo } from "next-seo";
import { site } from '../constants/const';
import deeprecommendImg from "../assets/images/deeprecommend/DeepRecommend.png";

const Contact = () => {
    const { t, locale } = useLocale();

    return (
        <div>
          <NextSeo
            title={t.contact.head.title}
            description={t.contact.head.description}
            canonical={site.home + '/contact'}
            openGraph={{
              url: site.home,
              title: t.index.head.title,
              description: t.index.head.description,
              type: "website",
              locale: locale,
              images: [
                {
                  url: deeprecommendImg,
                  width: 800,
                  height: 600,
                  alt: 'DeepRecommend',
                  type: 'image/png',
                },
                {
                  url: deeprecommendImg,
                  width: 900,
                  height: 800,
                  alt: 'DeepRecommend',
                  type: 'image/peg',
                },
                { url: deeprecommendImg },
              ],
              site_name: "DeepRecommend",
            }}
          />
          <HeaderComponent/>
          <ContactComponent />
        </div>
    )
}

export default Contact;