import CategoreisModel from './categoriesModel';
import GeometriesModel from './geometriesModel';
import SourcesModel from './sourcesModel';

export default class EventModel{
    id:number =0;
    title:string='';
    descreption:string='';
    link:string='';
    categories:CategoreisModel[]=[];
    sources:SourcesModel[]=[];
    geometries:GeometriesModel[]=[];
    status:string='';
    closed:any={};
}
