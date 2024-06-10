import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';
import { useSelector } from 'react-redux'

const Graph = () => {
    let [data, setData] = useState([])
    const dataAverageByMonth = useSelector((st) => st.dataSlice.dataAverageByMonth)
    useEffect(() => {
        setData(dataAverageByMonth)
    }, [])
    const props = {
        data,
        xField: 'date',
        yField: 'average'
    };
    return <>
        <Line {...props} />
    </>
};
export default Graph;