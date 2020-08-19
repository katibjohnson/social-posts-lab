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
  @Output() closed = new EventEmitter<any>();

  constructor() {}

  submitPost(form: NgForm) {
    this.submitted.emit(form.value);
  }

  closeForm() {
    console.log('hi');
    this.closed.emit();
  }

  ngOnInit(): void {}
}
