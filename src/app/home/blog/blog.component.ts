import { Component } from '@angular/core';
import { Blog } from 'src/app/util/system-types';
import { convertDate } from 'src/app/util/system-helpers';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  blogItems: Blog[] = [
    {
      id: 1,
      title: 'Covid-19',
      text: 'bla bla bla bla bla',
      image: 'assets/blog/blog-1.jpg',
      creator: 'Arif Bojadzic',
      date: convertDate(),
    },
    {
      id: 2,
      title: 'Covid-19',
      text: 'bla bla bla bla bla',
      image: 'assets/blog/blog-1.jpg',
      creator: 'Arif Bojadzic',
      date: convertDate(),
    },
    {
      id: 3,
      title: 'sdad',
      text: 'bla bla bla bla bla',
      image: 'assets/blog/blog-1.jpg',
      creator: 'Arif Bojadzic',
      date: convertDate(),
    },
    {
      id: 4,
      title: 'sdad',
      text: 'bla bla bla bla bla',
      image: '4',
      creator: 'Arif Bojadzic',
      date: convertDate(),
    },
    {
      id: 5,
      title: 'sdad',
      text: 'bla bla bla bla bla',
      image: '5',
      creator: 'Arif Bojadzic',
      date: convertDate(),
    }
  ];

  get selectedItem() {
    return this.blogItems[0];
  }
  
  get items() {
    return this.blogItems;
  }
}
