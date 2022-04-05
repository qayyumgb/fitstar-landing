import { Component, OnInit } from '@angular/core';
import { BlogCategoryEnum } from 'src/app/shared/enum/blog.enum';
import { Blog } from 'src/app/shared/interfaces/blog.interface';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-workout-blog',
  templateUrl: './workout-blog.component.html',
  styleUrls: ['./workout-blog.component.scss']
})
export class WorkoutBlogComponent implements OnInit {

  workOutList: Blog[] = [];

  constructor(private blogService: BlogService) { }

  async ngOnInit() {
    let response = await this.blogService.getBlogByCategory(BlogCategoryEnum.Workouts)
    if (response) {
      this.workOutList = response.blogs;
    }
  }
}
