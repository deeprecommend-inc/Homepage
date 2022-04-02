import React, { useState, useEffect } from 'react';
import BlogComponent from "../../components/custom/sections/blogcomponent";
import qiitaApi from '../../api/qiita';
import { useGetByTagName } from '../../hooks/useGetByTagName';

export const Ai = () => {
    const [data, setData] = useState([]);
    const { getByTagName } = useGetByTagName();

    useEffect(() => {
        const init = async () => {
          const data = await qiitaApi.get();
          const aboutAi = getByTagName(data, 'Ai');
          setData(aboutAi);
        }

        init();
    }, [])

    return <BlogComponent title="Artificial Intelligence" blogs={data} />
}

export default Ai;