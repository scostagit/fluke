import React from 'react';
import './Search.css';
import Button from 'react-bootstrap/Button';

interface ISearch{
    onSubmit(e: React.MouseEvent<HTMLElement>): void;
    onClear(e: React.MouseEvent<HTMLElement>): void;
    onChange(e: React.ChangeEvent<HTMLInputElement>):void;
    onSelectChange(e: React.ChangeEvent<HTMLSelectElement>):void;
}

const Search =(props:ISearch)=>{
  return (
    <div>
        <form className='form'
        >
            <div>
                <label>Search:</label>
                <input type='text' name='searchString' onChange={props.onChange}  />
            </div>
            <div>
                <label>Status:</label>
                <select name='status' onChange={props.onSelectChange}>
                    <option value=''></option>
                    <option value='open'>Open</option>
                    <option value='closed'>Closed</option>
                </select>
            </div>
            <div>
                <label>Items per Page:</label>
                <input  className='number'  type='number' name='limit' onChange={props.onChange}/>
            </div>
            <div>
                <Button variant='primary' type='submit' onClick={props.onSubmit}>Search</Button><spam></spam>
                <Button variant='primary' type='reset'onClick={props.onClear} >Clear</Button>
            </div>
        </form>
    </div>
    );
}

export default Search;