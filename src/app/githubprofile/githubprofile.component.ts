import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-githubprofile',
  templateUrl: './githubprofile.component.html',
  styleUrls: ['./githubprofile.component.css']
})
export class GithubprofileComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // We use snapshot when we go away from this component and this component will be destroyed
    //this.route.snapshot.paramMap.get('username')

    // We subscribe to route Params as angular will not create and destroy(re-initialize) the component 
    this.route.paramMap.subscribe(params => {
      params.get('username')
      console.log(params.get('username'))
    })
  }

  submit(){
    this.router.navigate(['/followers'], {
      queryParams: {page:1, order: 'newest'}
    });
  }

}
