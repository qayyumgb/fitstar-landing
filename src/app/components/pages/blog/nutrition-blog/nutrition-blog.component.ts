import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogCategoryEnum } from 'src/app/shared/enum/blog.enum';
import { Blog } from 'src/app/shared/interfaces/blog.interface';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-nutrition-blog',
  templateUrl: './nutrition-blog.component.html',
  styleUrls: ['./nutrition-blog.component.scss']
})
export class NutritionBlogComponent implements OnInit {

  nutritionList: Blog[] = [];
  constructor(private blogService: BlogService) { }

  async ngOnInit() {
    let response = await this.blogService.getBlogByCategory(BlogCategoryEnum.Nutrition)
    if (response) {
      this.nutritionList = response.blogs;
    }
  }
}
