import React, { useEffect } from 'react'
import Router from './router';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { ConfigProvider } from 'antd';
import { getAll } from './store/features/dataSlice'
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAll());
  }, [])
  return <>
    <ConfigProvider
      theme={{
        token: { rowSelectedBg: '#bae0ff' },
        components: { Table: { bodySortBg: '' } }
      }}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ConfigProvider>
  </>
}

export default App;