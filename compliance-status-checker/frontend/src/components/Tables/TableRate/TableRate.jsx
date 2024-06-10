import React, { useEffect, useState } from 'react';
import { Table, Input } from 'antd';
import './TableRate.css'
import { useSelector } from 'react-redux'
import { approximateForecast } from '../../../services/forecast-diff-multi';
const TableRate = () => {
    const data = useSelector((st) => st.dataSlice.dataAverageByMonth)
    let dataForecast = approximateForecast(data)
    let [dataSource, setDataSource] = useState(data)
    const [value, setValue] = useState('');
    const FilterByNameInput = (
        <Input
            placeholder="Search Month"
            value={value}
            onChange={e => {
                const currValue = e.target.value;
                setValue(currValue);
                const filteredData = data.filter(entry =>
                    entry.date.includes(currValue)
                );
                setDataSource(filteredData);
            }}
        />
    );
    useEffect(() => {
        setDataSource(data)
    }, [])
    const columns = [
        {
            title: FilterByNameInput,
            dataIndex: 'date',
            key: 'date',
            sorter: (a, b) => (a.year - b.year) || (a.numMonth - b.numMonth),
            sortDirections: ['ascend'],
            width: '50%'
        },
        {
            title: 'Average exchange rate dollar',
            dataIndex: 'average',
            key: 'average',
            sorter: (a, b) => a.average - b.average,
            sortDirections: ['ascend'],
        }
    ];
    return <>
        <center>
            <h1>Table average exchange rate by month</h1>
            <Table
                style={{ width: '70%' }}
                rowClassName={(record) => {
                    let rate = record.average.toString().slice(2, 3)
                    return 'rate-' + rate
                }}
                expandable={{
                    expandedRowRender: (record, i) => (
                        <h4 style={{ margin: 0 }}>
                            The forecast was: {dataForecast[i].avgForecast},
                            The different: {(record.average - dataForecast[i].avgForecast).toFixed(4)}
                        </h4>
                    ),
                    rowExpandable: (record) => record.name !== 'Not Expandable',
                }}
                dataSource={dataSource} columns={columns} />
        </center>
    </>

};
export default TableRate;