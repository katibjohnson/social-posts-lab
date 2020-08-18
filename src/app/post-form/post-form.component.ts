import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../interfaces/post';
import { formatCurrency } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Post>();

  constructor() {}

  submitPost(form: NgForm) {
    console.log('hi');
    let newPost: Post = {
      title: form.value.title,
      thought: form.value.thought,
    };
    this.submitted.emit(newPost);
  }

  ngOnInit(): void {}
}
