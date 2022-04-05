import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { AllBlogComponent } from './all-blog/all-blog.component';
import { NutritionBlogComponent } from './nutrition-blog/nutrition-blog.component';
import { ReciepBlogComponent } from './reciep-blog/reciep-blog.component';
import { WorkoutBlogComponent } from './workout-blog/workout-blog.component';
import { ReviewsBlogComponent } from './reviews-blog/reviews-blog.component';
import { PodcastBlogComponent } from './podcast-blog/podcast-blog.component';
import { MusicBlogComponent } from './music-blog/music-blog.component';
import { BlogTabsComponent } from './blog-tabs/blog-tabs.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogContentComponent } from './blog-content/blog-content.component';

import { SharedService } from 'src/app/components/services/shared.service';

@NgModule({
  declarations: [
    AllBlogComponent,
    NutritionBlogComponent,
    ReciepBlogComponent,
    WorkoutBlogComponent,
    ReviewsBlogComponent,
    PodcastBlogComponent,
    MusicBlogComponent,
    BlogTabsComponent,
    BlogDetailComponent,
    BlogContentComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule {


}
