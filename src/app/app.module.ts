import { PostsService } from './services/posts.service';
import { GitHubFollowersService } from './services/github-followers.services';
import { DataService } from './services/data.services';
import { NotfoundComponent } from './notfound/notfound.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GithubfollowersComponent } from './githubfollowers/githubfollowers.component';
import { GithubprofileComponent } from './githubprofile/githubprofile.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GithubfollowersComponent,
    GithubprofileComponent,
    PostsComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path: 'followers/:id/:username', component: GithubprofileComponent},
      {path:'followers', component:GithubfollowersComponent},
      {path:'posts', component:PostsComponent},
      {path:'**', component:NotfoundComponent}
    ])
  ],
  providers: [GitHubFollowersService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
