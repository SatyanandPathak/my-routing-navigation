import { InternalServerError } from './../errors/internal-server-error';
import { NotFound } from './../errors/not-found';
import { BadRequest } from './../errors/bad-request';
import { AppError } from './../errors/app-error';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DataService {

    constructor(private url:string, private http:Http){}

    getAll(){
        /*this.http.get(this.url)
        .catch((error: Response) => {
            return Observable.throw(new AppError("Some Error thrown"))
        })*/
        return this.http.get(this.url)
            .map(response => response.json())
            .catch(this.handleError);
    }

    get(id){
        return this.http.get(this.url + '/' + id)
            .map(response => response.json())
            .catch(this.handleError);
    }

    post(resource){
        return this.http.post(this.url, JSON.stringify(resource))
            .map(response => response.json())
            .catch(this.handleError);
    }

    put(id, resource){
        return this.http.put(this.url + '/' + id, JSON.stringify(resource))
            .map(response => response.json())
            .catch(this.handleError);
    }

    patch(id, resource){
        return this.http.patch(this.url + '/' + id, JSON.stringify(resource))
        .map(response => response.json())
        .catch(this.handleError);
    }

    delete(id){
        return this.http.delete(this.url + '/' + id)
            .map(null)
            .catch(this.handleError);
    }


    private handleError(error:Response){
        if(error.status === 400){
            return Observable.throw(new BadRequest("Some Error thrown"));
        } 
        if(error.status === 404){
            return Observable.throw(new NotFound("Resource not found"));
        } 
        if(error.status === 500){
            return Observable.throw(new InternalServerError("Internal Server Error"));
        }
        return Observable.throw(new AppError("Please try after sometime..."));
        
    }

}