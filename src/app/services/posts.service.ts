import { OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.services';

@Injectable()
export class PostsService extends DataService implements OnInit{

    constructor(http:Http){
       super('http://jsonplaceholder.typicode.com/posts', http); 
    }

    ngOnInit(){
        
    }

}