import React, { useState, useEffect } from 'react';
import BlogComponent from "../../components/custom/sections/blogcomponent";
import qiitaApi from '../../api/qiita';
import { useGetByTagName } from '../../hooks/useGetByTagName';

export const Web = () => {
    const [data, setData] = useState([]);
    const { getByTagName } = useGetByTagName();

    useEffect(() => {
        const init = async () => {
          const data = await qiitaApi.get();
          const aboutWeb = getByTagName(data, 'Web');
          aboutWeb.forEach((el, i) => {
            el.img = `https://picsum.photos/id/${Math.floor(Math.random() * 1001)}/500/300`;
          });
          setData(aboutWeb);
        }

        init();
    }, [])

    return <BlogComponent title="Web" blogs={data} />
}

export default Web;