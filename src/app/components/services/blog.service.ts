import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBlog } from 'src/app/shared/interfaces/blog.interface';
import { API_ENDPOINTS } from 'src/app/shared/endpoints/global';
import { BlogCategoryEnum } from 'src/app/shared/enum/blog.enum';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }



  async getBlogByCategory(categoryName: BlogCategoryEnum): Promise<IBlog> {
    return await this.http.get(API_ENDPOINTS.blogList + categoryName).toPromise() as IBlog;


  }



  //getting all data
  getAllBlog(limit: number, offset: number): Observable<IBlog> {
    return this.http.get<IBlog>(API_ENDPOINTS.blogList + `${limit}/${offset}`);
  }
}
