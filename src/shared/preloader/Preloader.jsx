import React from 'react';
import './Preloader.scss';

const Preloader = () => {
    return (
        <div className="lds-ripple">
            <div />
            <div />
        </div>
    );
}

export default Preloader;