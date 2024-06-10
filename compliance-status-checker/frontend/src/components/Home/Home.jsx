import React from 'react';
import { BarChartOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
const Home = () => {

    return <>
        <Result
            icon={<BarChartOutlined />}
            title="Welcome to our the average dollar rate by month"
            subTitle="You can view different views for the presentation as well as view the forecast"
        />
    </>
};
export default Home;