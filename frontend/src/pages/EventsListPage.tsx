import React,{useState, useEffect } from 'react';
import  getEvents  from '../api/EonetApi';
import Loading from '../components/loading/Loading';
import Search from '../components/search/Search';
import Grid from '../components/grid/Grid';
import './EventsListPage.css';
import Card from 'react-bootstrap/Card';

interface IOptions {
    [key: string]: any
}

let options:IOptions = {
    searchString:'',
    sortOrder:'',
    status:'',
    limit:10,
    pageNumber:1
};

const EventsListPage = ()=>{
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);

    const handleSubmit = (e: React.MouseEvent<HTMLElement>): void =>{
        e.preventDefault();
        fetchData();
    };

    const handleClear = (e: React.MouseEvent<HTMLElement>): void =>{
        options = {
            searchString:'',
            sortOrder:'',
            status:'',
            limit:10,
            pageNumber:1
        }

        fetchData();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        options[e.target.name] = e.target.value;
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        options[e.target.name] = e.target.value;
    };

    const handTableHeadIDClick = ()=>{
        options.sortOrder = options.sortOrder === ''?
                                'id':options.sortOrder === 'id'?
                                'id_desc':'';

        fetchData();
    };

    const handTableHeadTitleClick = ()=>{
        options.sortOrder = options.sortOrder === ''?
                                'title':options.sortOrder === 'title'?
                                'title_desc':'';

        fetchData();
    };

    const handleNextClick=()=>{
        options.pageNumber = options.pageNumber + 1;
        setPageNumber(options.pageNumber);
        fetchData();
    };

    const handleBackClick=()=>{
        options.pageNumber = options.pageNumber - 1;
        setPageNumber(options.pageNumber);
        fetchData();
    };

    const fetchData = () =>{
        setLoading(true);
        getEvents(options)
        .then((resp:any) => resp.json())
        .then((data:any) => {
            setState(data);
            setLoading(false);
        });
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <>
            <Card.Title>Events</Card.Title>
             <Search onSubmit={handleSubmit}
                     onChange={handleChange}
                     onClear={handleClear}
                     onSelectChange={handleSelectChange} />
                     <hr/>
            <div>
            {
                <>
                        <Loading isLoading={loading}/>
                        <Grid pageNumber={pageNumber}
                            onBackClick={handleBackClick}
                            onNextClick={handleNextClick}
                            onTableHeadIDClick={handTableHeadIDClick}
                            onTableHeadTitleClick={handTableHeadTitleClick}
                            items={state}/>

                </>
            }
            </div>
        </>)
};

export default EventsListPage;