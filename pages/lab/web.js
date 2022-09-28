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
            setData(res);
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
    const res = await qiitaApi.get({ page: 1, per_page: 12 });
    return { props: { res } };
}

export default Web;
