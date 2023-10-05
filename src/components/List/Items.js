import React, { memo } from "react";
import { List } from 'antd'

const Items = (props) => {

    return (
        <List.Item className={props.active.includes(props.index) ? 'active' : ''} onClick={() => props.addClass(props.index)} key={props.index}>{props.item}</List.Item>
    )
}
const MemoList = memo(Items)
export default MemoList