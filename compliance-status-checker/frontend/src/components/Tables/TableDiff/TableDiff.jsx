import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { diffBetween, forecastDifference } from '../../../services/forecast-diff-multi';
import { useSelector } from 'react-redux';

const TableDiff = () => {
    let [dataBe, setDataBe] = useState([])
    const dataAverageByMonth = useSelector((st) => st.dataSlice.dataAverageByMonth)

    useEffect(() => {
        let diff = forecastDifference(dataAverageByMonth)
        let dataDiffBetween = diffBetween(diff)
        setDataBe(dataDiffBetween)
    }, [])

    const columns = [
        {
            title: 'Dates of 3 month',
            dataIndex: 'date',
            key: 'date',
            width: '50%'
        },
        {
            title: 'Different Average Between 3 month',
            dataIndex: 'diffBetween',
            key: 'diffBetween',
            sorter: (a, b) => a.diffBetween - b.diffBetween,
            sortDirections: ['ascend'],
        }
    ];

    return <>
        <center>
            <Table  style={{ width: '70%' }} dataSource={dataBe} columns={columns} />
        </center>
    </>
};
export default TableDiff;