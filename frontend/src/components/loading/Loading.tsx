import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './Loading.css';

const Loading = (props:any)=>{
    return (props.isLoading ? (
        <div className='loading'>
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    ):null)
};

export default Loading;