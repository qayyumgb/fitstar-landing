import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/components/services/blog.service';
import { BlogCategoryEnum } from 'src/app/shared/enum/blog.enum';
import { Blog } from 'src/app/shared/interfaces/blog.interface';

@Component({
  selector: 'app-music-blog',
  templateUrl: './music-blog.component.html',
  styleUrls: ['./music-blog.component.scss']
})
export class MusicBlogComponent implements OnInit {
  musicList: Blog[] = [];
  constructor(private blogService: BlogService) { }

  async ngOnInit() {
    let response = await this.blogService.getBlogByCategory(BlogCategoryEnum.Music)
    if (response) {
      this.musicList = response.blogs;
    }
  }

}
