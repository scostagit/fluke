import React,{useState} from 'react';
import Pagination from '../pagination/Pagination';
import EventModel from '../../models/eventModel';
import Details from './Details';
import Table from 'react-bootstrap/Table';
import './Grid.css';

interface IGrid{
    items:EventModel[];
    pageNumber:number;
    onTableHeadIDClick():void;
    onTableHeadTitleClick():void;
    onNextClick(e: React.MouseEvent<HTMLElement>): void;
    onBackClick(e: React.MouseEvent<HTMLElement>): void;
}

const Grid = (props:IGrid)=>{

    const [stateDetail, setStateDetail] = useState();
    const [openDetail, setOpenDetail] = useState(false);

    const open = (state:EventModel)=>{
        setStateDetail(state);
        setOpenDetail(true);
    }

    return(
        openDetail ? (<Details state={stateDetail} onClick={()=>{setOpenDetail(false);}}/>):(
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                            <th onClick={props.onTableHeadIDClick}>ID</th>
                            <th onClick={props.onTableHeadTitleClick}>Title</th>
                            <th>Status</th>
                            <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.items.map((event:EventModel, index:number)=>(<tr className={ event.status} onDoubleClick ={()=>{ open(event);}} key={index}>
                                                                                <td>{event.id}</td>
                                                                                <td>{event.title} </td>
                                                                                <td>{event.status}</td>
                                                                                <td><a onClick ={()=>{ open(event);}} href='#'>View</a></td>
                                                                            </tr>))
                    }
                </tbody>
            </Table>
            <Pagination pageNumber={props.pageNumber}
                        onNextClick={props.onNextClick}
                        onBackClick={props.onBackClick}/>
        </>)
    )
}

export default Grid;



