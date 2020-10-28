import React from 'react';
import './ListItem.scss';


const TodoListItem = ({ item }) => {
    return (
        <div className="todo-item-container">
            <span>{item.date}</span>
            <span>{item.minute}</span>
            <span>{item.label}</span>
            <span>{item.high}</span>
            <span>{item.low}</span>
            <span>{item.open}</span>
            <span>{item.close}</span>
            <span>{item.average}</span>
            <span>{item.volume}</span>
            <span>{item.notional}</span>
            <span>{item.numberOfTrades}</span>
        </div>
    );
}

export default TodoListItem;