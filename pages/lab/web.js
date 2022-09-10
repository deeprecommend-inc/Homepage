import React, { useState, useEffect } from 'react';
import BlogComponent from '../../components/custom/sections/blogcomponent';
import qiitaApi from '../../api/qiita';
import { useGetByTagName } from '../../hooks/useGetByTagName';
import Header from '../../components/blog/Header';
import { sections } from '../../constants/const';
import { useRouter } from 'next/router';

export const Web = ({ res }) => {
    const [data, setData] = useState([]);
    const { getByTagName } = useGetByTagName();
    const router = useRouter();

    useEffect(() => {
        const init = async () => {
            const aboutWeb = getByTagName(res, 'Web');
            aboutWeb.forEach((el, i) => {
                el.img = `https://picsum.photos/500/300?random=${Math.random() *
                    aboutWeb.length}`;
            });
            setData(aboutWeb);
        };

        init();
    }, []);

    return (
        <div>
            <Header
                title="DeepLab"
                sections={sections}
                localePath={router.pathname}
            />
            <BlogComponent title="Web" blogs={data} />
        </div>
    );
};

export async function getServerSideProps() {
    const res = await qiitaApi.get({ per_page: 100 });
    return { props: { res } };
}

export default Web;
