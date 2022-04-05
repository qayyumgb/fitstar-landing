import { Component, OnInit } from '@angular/core';
import { BlogCategoryEnum } from 'src/app/shared/enum/blog.enum';
import { Blog } from 'src/app/shared/interfaces/blog.interface';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-all-blog',
  templateUrl: './all-blog.component.html',
  styleUrls: ['./all-blog.component.scss']
})
export class AllBlogComponent implements OnInit {
  allBlogList: Blog[] = [];
  constructor(private blogService: BlogService) { }



  async ngOnInit() {
    let response = await this.blogService.getBlogByCategory(BlogCategoryEnum.All)
    if (response) {
      this.allBlogList = response.blogs;
    }
  }

}
