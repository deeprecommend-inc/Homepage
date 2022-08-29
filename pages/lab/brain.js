import React, { useState, useEffect } from 'react';
import BlogComponent from '../../components/custom/sections/blogcomponent';
import qiitaApi from '../../api/qiita';
import { useGetByTagName } from '../../hooks/useGetByTagName';
import Header from '../../components/blog/Header';
import { sections } from '../../constants/const';
import { useRouter } from 'next/router';

export const Brain = ({ res }) => {
    const [data, setData] = useState([]);
    const { getByTagName } = useGetByTagName();
    const router = useRouter();

    useEffect(() => {
        const init = async () => {
            const aboutBrain = getByTagName(res, 'Brain');
            aboutBrain.forEach((el, i) => {
                el.img = `https://picsum.photos/500/300?random=${i}`;
            });
            setData(aboutBrain);
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
            <BlogComponent title="Brain" blogs={data} />
        </div>
    );
};

export async function getServerSideProps() {
    const res = await qiitaApi.get({ per_page: 100 });

    return { props: { res } };
}

export default Brain;