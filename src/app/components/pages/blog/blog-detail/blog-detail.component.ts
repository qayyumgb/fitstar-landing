import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogCategoryEnum } from 'src/app/shared/enum/blog.enum';
import { BlogService } from '../../../services/blog.service';
import { Blog } from 'src/app/shared/interfaces/blog.interface';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  @Input() item: Blog;
  constructor() { }
  async ngOnInit() {

    if (history.state) {
      this.item = history.state.data;
    }

  }
}