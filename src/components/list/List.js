import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import ListItem from '../list-item/ListItem';
import { displayAlert, loadItems } from '../../thunk/thunks';
import Preloader from '../../shared/preloader/Preloader';
import ListHeader from '../list-header/ListHeader';
import './List.scss';


const List = ({ list = [], isLoading, startLoadingItems }) => {

    let [currentPage, setCurrentPage] = useState(1);
    let itemsPerPage = 10;
    let indexOfLastItem = currentPage * itemsPerPage;
    let indexOfFirstItem = indexOfLastItem - itemsPerPage;
    let currentItems = list.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];

    for (let i = 1; i<= Math.ceil(list.length/itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const pageNumber = pageNumbers.map(number => number);

    useEffect(() => {
        startLoadingItems();
    }, [startLoadingItems])

    const paginateNext = () => {
        if (currentPage <= pageNumbers.length-1) {
            setCurrentPage(prev => prev + 1);
        }
    }

    const paginatePrev = () => {
        if (currentPage >= pageNumbers.length-1) {
            setCurrentPage(prev => prev - 1);
        }
    }
    
    const content = (
        <div className="list-wrapper">
            <ListHeader />
            <div className="list-wrapper__items">
                {currentItems.map((item, i) => <ListItem 
                    key={i} 
                    item={item} 
                />)}
            </div>

            <nav className="button-wraper">
                {currentPage >= pageNumbers.length-1 ?
                <button onClick={() => paginatePrev(pageNumber)}>previous</button>
                :
                null
                }
                {currentPage <= pageNumbers.length-1 ?
                <button onClick={() => paginateNext(pageNumber)}>next</button>
                :
                null
                }        
            </nav>
        </div>
    );
    return isLoading ? <div className="preloader-container"><Preloader /></div> : content;
};

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    list: state.list
});

const mapDispatchToProps = dispatch => ({
    onDisplayAlert: item => dispatch(displayAlert(item)),
    startLoadingItems: () => dispatch(loadItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);