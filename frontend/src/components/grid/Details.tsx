import React from 'react';
import EventModel from '../../models/eventModel';
import GeometriesModel from '../../models/geometriesModel';
import SourceModel from '../../models/sourcesModel';
import CategoriesModel from '../../models/categoriesModel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Details.css';


interface IDetails{
    state:EventModel,
    onClick():void

}

const Details = (props:IDetails)=>{
    let label ='<< Go Back';
    return (
    <>
            <div className='details'>
                <div> <Card.Title style={{ width: '22rem' }}>{props.state.id}</Card.Title></div>
                <div>{props.state.title}</div>
                <div>{props.state.descreption}</div>
                <div>{props.state.link}</div>
                <div>{props.state.status}</div>
                <div>{props.state.closed}</div>
                <div>
                <Card.Title style={{ width: '18rem' }}>Geometries</Card.Title>
                        {
                            props.state.geometries.map((g:GeometriesModel)=>{
                                return(
                                    <div>
                                         <ul>
                                            <li>{g.type} -{g.date}</li>
                                        </ul>
                                        <Card.Title style={{ width: '8rem' }}>Coodinates</Card.Title>
                                        <ul>
                                            {g.coordinates.map((c)=> <li>{c}</li>)}
                                        </ul>
                                    </div>

                                )
                            })
                        }
                </div>
                <div>
                    <Card.Title style={{ width: '18rem' }}>Sources</Card.Title>
                    <ul>
                        {props.state.sources.map((s:SourceModel)=><li>{s.id} -{s.url}</li>)}
                    </ul>
                </div>
                 <div>
                    <Card.Title style={{ width: '18rem' }}>Categories</Card.Title>
                    <ul>
                        {props.state.categories.map((c:CategoriesModel)=><li>{c.id} -{c.title}</li>)}
                    </ul>
                </div>

                <div>
                    <Button variant="primary"
                                data-slide="prev"
                                onClick={ props.onClick }>
                                {label}
                        </Button>
                </div>
            </div>
        </>
    )
}

export default Details;