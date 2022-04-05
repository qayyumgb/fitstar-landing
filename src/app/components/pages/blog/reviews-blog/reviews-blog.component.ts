import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/components/services/blog.service';
import { BlogCategoryEnum } from 'src/app/shared/enum/blog.enum';
import { Blog } from 'src/app/shared/interfaces/blog.interface';

@Component({
  selector: 'app-reviews-blog',
  templateUrl: './reviews-blog.component.html',
  styleUrls: ['./reviews-blog.component.scss']
})
export class ReviewsBlogComponent implements OnInit {
  reviewList: Blog[] = []

  constructor(private blogService: BlogService) { }

  async ngOnInit() {
    let response = await this.blogService.getBlogByCategory(BlogCategoryEnum.Reviews)
    if (response) {
      this.reviewList = response.blogs;
    }
  }
}
