import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'Post Office',
      thought: 'I hope that we can save USPS...',
    },
    {
      title: 'Movies and TV Shows',
      thought:
        "What's gonna happen when we run out of new stuff to air because of covid production shutdowns?",
    },
    {
      title: 'Dogs',
      thought: 'Dogs are hella cute',
    },
  ];

  constructor() {}

  onDelete(index: number) {
    this.posts.splice(index, 1);
  }

  onSubmit(post: Post) {
    this.posts.unshift(post);
  }
  ngOnInit(): void {}
}
