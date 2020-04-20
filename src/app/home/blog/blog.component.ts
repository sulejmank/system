import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/util/system-types';
import { blogItems } from './blog.items';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogItems: Blog[];
  selectedBlog: Blog;

  ngOnInit() {
    this.blogItems = blogItems();
    this.selectedBlog = this.blogItems[0];
  }

  changeBlog(blog: Blog): void {
    this.selectedBlog = this.blogItems.filter(x => x.id === blog.id)[0];
  }

  get selcetedItem() {
    if (!this.selectedBlog) {
      return;
    }
    return this.selectedBlog;
  }

  get items() {
    return this.blogItems.filter(x => x.id !== this.selectedBlog.id);
  }
}
