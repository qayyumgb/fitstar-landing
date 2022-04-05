import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBlogComponent } from './all-blog/all-blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { MusicBlogComponent } from './music-blog/music-blog.component';
import { NutritionBlogComponent } from './nutrition-blog/nutrition-blog.component';
import { PodcastBlogComponent } from './podcast-blog/podcast-blog.component';
import { ReciepBlogComponent } from './reciep-blog/reciep-blog.component';
import { ReviewsBlogComponent } from './reviews-blog/reviews-blog.component';
import { WorkoutBlogComponent } from './workout-blog/workout-blog.component';

const routes: Routes = [
  {
    path: '',
    component: AllBlogComponent
  },
  {
    path: 'all',
    component: AllBlogComponent
  },
  {
    path: 'nutrition',
    component: NutritionBlogComponent
  },
  {
    path: 'recipes',
    component: ReciepBlogComponent
  },
  {
    path: 'workouts',
    component: WorkoutBlogComponent
  },
  {
    path: 'reviews',
    component: ReviewsBlogComponent
  },
  {
    path: 'podcasts',
    component: PodcastBlogComponent
  },
  {
    path: 'music',
    component: MusicBlogComponent
  },
  { path: 'detail/:id', component: BlogDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
