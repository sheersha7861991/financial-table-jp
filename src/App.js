import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { HomeOutlined } from '@ant-design/icons';
import Table from './components/Table/Table';
import Counter from './components/Counter/Counter';
import Home from './components/Home/Home';
import { Button, Space } from 'antd';
import ListEg from './components/List/ListEg';
import Dummy from './components/DummyCode/Dummy';
import Timer from './components/TimerC/Timer';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">Table of Financial Instrument

        <div className="homeBttn" >

          <Button icon={<HomeOutlined />} onClick={() => navigate('/home')} >

          </Button>
        </div>
      </header >
      <div className='mainDiv'>
        <Routes>
          <Route path="/table" element={<Table />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/home" element={<Home />} />
          <Route path="/list" element={<ListEg />} />
          <Route path="/dummy" element={<Dummy />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/" element={<Home />} />

        </Routes>
      </div>

    </div >
  );
}

export default App;
