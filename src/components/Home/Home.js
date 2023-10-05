import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";


function Home() {

    return (
        <div className="">

            <div className='cardContainer'>
                <div className='cardItem'><Link to="/table">Table</Link></div>
                <div className='cardItem'><Link to="/counter">Counter</Link></div>
                <div className='cardItem'><Link to="/list">List</Link></div>
                <div className='cardItem'><Link to="/dummy">Dummy</Link></div>

                <div className='cardItem'>Todo</div>
                <div className='cardItem'>Debounce & Throttle</div>
                <div className='cardItem'><Link to="/counter">Counter</Link></div>
                <div className='cardItem'>Stopwatch</div>
                <div className='cardItem'><Link to="/timer">Timer</Link></div>

            </div>


        </div>
    );
}




export default Home;
