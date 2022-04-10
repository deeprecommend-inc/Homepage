import React, { useState, useEffect } from 'react';
import BlogComponent from "../../components/custom/sections/blogcomponent";
import qiitaApi from '../../api/qiita';
import { useGetByTagName } from '../../hooks/useGetByTagName';

export const Web = ({ res }) => {
    const [data, setData] = useState([]);
    const { getByTagName } = useGetByTagName();

    useEffect(() => {
        const init = async () => {
          const aboutWeb = getByTagName(res, 'Web');
          aboutWeb.forEach((el, i) => {
            el.img = `https://picsum.photos/500/300?random=${i}`;
          });
          setData(aboutWeb);
        }

        init();
    }, [])

    return <BlogComponent title="Web" blogs={data} />
}

export async function getServerSideProps() {
  const res = await qiitaApi.get();
  return { props: { res } }
}

export default Web;
