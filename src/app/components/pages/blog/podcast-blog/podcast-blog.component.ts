import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/components/services/blog.service';
import { BlogCategoryEnum } from 'src/app/shared/enum/blog.enum';
import { Blog } from 'src/app/shared/interfaces/blog.interface';

@Component({
  selector: 'app-podcast-blog',
  templateUrl: './podcast-blog.component.html',
  styleUrls: ['./podcast-blog.component.scss']
})
export class PodcastBlogComponent implements OnInit {
  podcastList: Blog[] = [];


  constructor(private blogService: BlogService) { }

  async ngOnInit() {
    let response = await this.blogService.getBlogByCategory(BlogCategoryEnum.Podcasts)
    if (response) {
      this.podcastList = response.blogs;
    }
  }

}
