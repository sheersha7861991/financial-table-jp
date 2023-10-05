import React, { useCallback, useState } from 'react';
import { List, Input, Button } from 'antd';
import '../../App.css';
import Items from './Items';
import MemoList from './Items';


function ListEg() {
    //const tick = { "textDecoration": 'strcked' }
    const [fruitArr, setFruitArray] = useState(['mango', 'banana', 'a', 'b', 'c', 'd', 'e', 'f', 'g'])
    const [val, setVal] = useState('')
    const [active, setActive] = useState([0])

    const additems = () => {
        setFruitArray([...fruitArr, val])
        setVal('')
    }
    const onEnter = (e) => {
        debugger
        if (e.key === 'Enter')
            additems()
    }
    const addClass = (i) => {
        if (!active.includes(i))
            setActive([...active, i])
        else
            setActive(active.filter(item => i !== item))
    }
    const handletoggle = useCallback((i) => {
        addClass()
    }, [addClass])
    return (
        <div className="listC">
            <div>
                <List bordered={true}>
                    {fruitArr.map((item, index) =>

                        <MemoList addClass={handletoggle} index={index} active={active} item={item}></MemoList>
                    )}

                </List>
            </div>
            <div>
                <div>Add items to list </div>
                <Input value={val} onChange={(e) => setVal(e.target.value)} onKeyDown={onEnter} />
                <Button onClick={additems} >Add Items</Button>
            </div>



        </div>
    );
}




export default ListEg;
