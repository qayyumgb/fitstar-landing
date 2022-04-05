import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from 'src/app/components/services/blog.service';
import { SharedService } from 'src/app/components/services/shared.service';
import { Blog } from 'src/app/shared/interfaces/blog.interface';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss']
})
export class BlogContentComponent implements OnInit {
  @Input() itemList: Blog[] = [];

  constructor(private sharedService: SharedService) {
    this.sharedService.setHeaderData(true);
  }
  ngOnInit(): void {
  
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sharedService.setHeaderData(false);
  }

}
