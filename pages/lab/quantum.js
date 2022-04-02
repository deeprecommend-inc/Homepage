import React, { useState, useEffect } from 'react';
import BlogComponent from "../../components/custom/sections/blogcomponent";
import qiitaApi from '../../api/qiita';
import { useGetByTagName } from '../../hooks/useGetByTagName';

export const Quantum = () => {
    const [data, setData] = useState([]);
    const { getByTagName } = useGetByTagName();

    useEffect(() => {
        const init = async () => {
          const data = await qiitaApi.get();
          const aboutQuantum = getByTagName(data, 'QuantumComputing');
          console.log({aboutQuantum})
          aboutQuantum.forEach((el, i) => {
            el.img = `https://picsum.photos/id/${Math.floor(Math.random() * 1001)}/500/300`;
          });
          setData(aboutQuantum);
        }

        init();
    }, [])

    return <BlogComponent title="Quantum Computing" blogs={data} />
}

export default Quantum;