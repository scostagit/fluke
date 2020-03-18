import React from 'react';
import './Pagination.css';
import Button from 'react-bootstrap/Button';

const previous = '< Previous';
const next ='Next >';

const Pagination = (props:any)=>{
    return (
        <div className='pagination'>
           <div>
            <Button variant="primary"
                        data-slide="prev"
                        onClick={ props.onBackClick }
                        disabled={props.pageNumber > 1?false:true} >
                        {previous}
                </Button>
            </div>
            <div>Page: {props.pageNumber}</div>
            <div>
                <Button variant='primary'
                        onClick={ props.onNextClick }>
                        {next}
                </Button>
            </div>
        </div>);
};


export default Pagination;