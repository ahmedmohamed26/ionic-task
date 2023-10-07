import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {
  subscribeForm: FormGroup = new FormGroup({});
  isSubmitted: boolean = false;
  constructor(public formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.subscribeForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submitForm() {
    this.isSubmitted = true;
    if (this.subscribeForm.valid) {
      console.log(this.subscribeForm.value);
    } else {
      this.isSubmitted = false;
      return console.log('Please provide all the required values!');
    }
  }
}
