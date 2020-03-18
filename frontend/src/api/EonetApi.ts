const getEvents = (options:any) =>{
    return fetch(`http://localhost:7497/api/eonet?searchString=${options.searchString}&sortOrder=${options.sortOrder}&status=${options.status}&limit=${options.limit}&pageNumber=${options.pageNumber}`);
}

export default getEvents;