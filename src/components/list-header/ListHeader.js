import React from 'react';
import './ListHeader.scss';


const ListHeader = ({ item }) => {
    return (
        <div className="list-header-container">
            <span>date</span>
            <span>minute</span>
            <span>label</span>
            <span>high</span>
            <span>low</span>
            <span>open</span>
            <span>close</span>
            <span>average</span>
            <span>volume</span>
            <span>numberOfTrades</span>
        </div>
    );
}

export default ListHeader;