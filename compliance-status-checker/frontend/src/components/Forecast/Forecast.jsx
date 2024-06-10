import React, { useEffect, useState } from 'react';
import { DatePicker, Button } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useSelector } from 'react-redux'
import { approximateForecast } from '../../services/forecast-diff-multi';
import TableDiff from '../Tables/TableDiff/TableDiff';
dayjs.extend(customParseFormat);
const SearchDate = () => {
    const data = useSelector((st) => st.dataSlice.dataAverageByMonth)
    let [dataForecast, setDataForecast] = useState()
    let [itemForecast, setItemForecast] = useState(null)
    let [next, setNext] = useState()
    const dateFormat = 'MM-YYYY';
    let today = new Date();
    let month = today.getMonth() < 10 ? `0${today.getMonth()}` : today.getMonth()
    let year = today.getFullYear()
    let todayStr = `${month}-${year}`

    useEffect(() => {
        let forecast = approximateForecast(data)
        setDataForecast(forecast)
    }, [])

    const forecastNextMonth = () => {
        let i = dataForecast.length - 1
        let nextForecast = (parseFloat(dataForecast[i]?.avgForecast) + parseFloat(dataForecast[i - 1]?.avgForecast) + parseFloat(dataForecast[i - 2]?.avgForecast)) / 3
        setNext(nextForecast.toFixed(4))
    }

    const onChange = (date, dateString) => {
        let forecast = dataForecast.find((item) => item.date.replace('/', '-') == dateString)
        setItemForecast(forecast)
    };
    return <>
        <center>
            <p>Select date to display the forecast average:</p>
            <DatePicker
                style={{ width: 100 }}
                onChange={onChange}
                picker="month"
                defaultValue={dayjs(todayStr, dateFormat)}
                minDate={dayjs('01-2023', dateFormat)}
                maxDate={dayjs(todayStr, dateFormat)}
                format={dateFormat}
            />
            {itemForecast ? <p>The forecast average: {itemForecast.avgForecast}</p> : ''}
            <Button style={{ width: 300 }} onClick={forecastNextMonth}>See forecast to next month</Button>
            {next ? <p>The forecast to next month is: {next}</p> : ''}
            <h2>The average difference between each 3 months:</h2>
            <TableDiff />
        </center>
    </>
};
export default SearchDate;