import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/components/services/blog.service';
import { BlogCategoryEnum } from 'src/app/shared/enum/blog.enum';
import { Blog } from 'src/app/shared/interfaces/blog.interface';

@Component({
  selector: 'app-reciep-blog',
  templateUrl: './reciep-blog.component.html',
  styleUrls: ['./reciep-blog.component.scss']
})
export class ReciepBlogComponent implements OnInit {
  recipeList: Blog[] = [];


  constructor(private blogService: BlogService) { }

  async ngOnInit() {
    let response = await this.blogService.getBlogByCategory(BlogCategoryEnum.Recipies)
    if (response) {
      this.recipeList = response.blogs;
    }
  }


}
