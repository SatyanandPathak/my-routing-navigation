import { AppError } from './../errors/app-error';
import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsForm = new FormGroup({

  });

  posts:any[];
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getAll()
      .subscribe(response => this.posts = response)
  }

  createPost(inputPost: HTMLInputElement){
    let postData = {title: inputPost.value};
    inputPost.value = '';

    //this.posts.splice(0, 0, postData)
    this.postsService.post(postData)
      .subscribe(response => {
        this.posts.splice(0, 0, postData)
      }, (error: AppError) => {
        //this.posts.splice(0, 1);
        this.postsForm.setErrors({
          message: error.message
        });
      });
  }
  

}
