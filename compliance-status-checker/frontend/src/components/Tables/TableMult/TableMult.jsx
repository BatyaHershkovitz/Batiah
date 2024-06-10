import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { useSelector } from 'react-redux';
import { forecastDifference, multiMatrix } from '../../../services/forecast-diff-multi';

const TableMulti = () => {
    let [dataMulti, setDataMulti] = useState([])
    const dataAverageByMonth = useSelector((st) => st.dataSlice.dataAverageByMonth)

    useEffect(() => {
        let diff = forecastDifference(dataAverageByMonth)
        let multi = multiMatrix(dataAverageByMonth, diff)
        setDataMulti(multi)
    }, [])

    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            width: '50%'
        },
        {
            title: 'Multiply matrix',
            dataIndex: 'multiAvg',
            key: 'multiAvg',
            sorter: (a, b) => a.multiAvg - b.multiAvg,
            sortDirections: ['ascend'],
        }
    ];

    return <>
        <center>
            <h1>Multiply matrix of the average * different</h1>
            <Table style={{ width: '70%' }} dataSource={dataMulti} columns={columns} />
        </center>
    </>
};
export default TableMulti;