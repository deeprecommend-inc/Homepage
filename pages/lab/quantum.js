import React, { useState, useEffect } from 'react';
import BlogComponent from '../../components/custom/sections/blogcomponent';
import qiitaApi from '../../api/qiita';
import { useGetByTagName } from '../../hooks/useGetByTagName';
import Header from '../../components/blog/Header';
import { sections } from '../../constants/const';
import { useRouter } from 'next/router';

export const Quantum = ({ res }) => {
    const [data, setData] = useState([]);
    const { getByTagName } = useGetByTagName();
    const router = useRouter();

    useEffect(() => {
        const init = async () => {
            const aboutQuantum = getByTagName(res, 'QuantumComputing');
            aboutQuantum.forEach((el, i) => {
                el.img = `https://picsum.photos/500/300?random=${i}`;
            });
            setData(aboutQuantum);
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
            <BlogComponent title="Quantum Computing" blogs={data} />
        </div>
    );
};

export async function getServerSideProps() {
    const res = await qiitaApi.get({ per_page: 100 });
    return { props: { res } };
}

export default Quantum;
