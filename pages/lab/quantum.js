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
          setData(aboutQuantum);
        }

        init();
    }, [])

    return <BlogComponent title="Quantum Computing" blogs={data} />
}

export default Quantum;