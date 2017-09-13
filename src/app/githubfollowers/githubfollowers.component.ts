import { ActivatedRoute } from '@angular/router';
import { GitHubFollowersService } from './../services/github-followers.services';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-githubfollowers',
  templateUrl: './githubfollowers.component.html',
  styleUrls: ['./githubfollowers.component.css']
})
export class GithubfollowersComponent implements OnInit {

  followers:any[]
  constructor(private route: ActivatedRoute, private githubfollowersService: GitHubFollowersService) { }

  ngOnInit() {

    /**
     * Here we are combining the route parameters and route query parameters to get the 
     * followers
     * 
     * Below is the pattern to adopt when we have Observable inside an Observable
     */
    Observable.combineLatest(
      [this.route.paramMap, this.route.queryParamMap])
      .switchMap(combined => {
        let id = combined[0].get('id')
        let page = combined[1].get('page');

        //this.githubfollowersService.getAll({id: id, page:page});
        return this.githubfollowersService.getAll()
        //.subscribe(followers => this.followers = followers)
      })
      .subscribe(followers  => {
        this.followers = followers;

      });
    
    //let id = this.route.snapshot.paramMap.get('id');
    //this.route.snapshot.queryParamMap.get('')

    
    

    
  }

}
