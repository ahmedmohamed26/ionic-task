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
  days = Array.from(Array(30).keys());
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  years: number[] = [];
  grades: string[] = ['grade 1', 'grade 2', 'grade 3', 'grade 4', 'grade 5'];
  constructor(public formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.initForm();
    this.getYears();
  }

  initForm() {
    this.subscribeForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      childName: ['', Validators.required],
      day: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      grade: ['', Validators.required],
      gender: ['', Validators.required],
      boy: [false],
      girl: [false],
    });
  }

  submitForm() {
    this.isSubmitted = true;
    if (
      this.subscribeForm.valid &&
      (this.subscribeForm.get('boy')?.value ||
        this.subscribeForm.get('girl')?.value)
    ) {
      this.getGender();
      let dataForm = this.subscribeForm.value;
      delete dataForm.boy;
      delete dataForm.girl;
      console.log(dataForm);
    } else {
      this.isSubmitted = false;
      return console.log('Please provide all the required values!');
    }
  }

  getYears() {
    const currentYear = new Date().getFullYear();
    const range = (start: number, stop: number, step: number) =>
      Array.from(
        { length: (stop - start) / step + 1 },
        (_, i) => start + i * step
      );
    this.years = range(currentYear, currentYear - 50, -1);
  }

  selectGender(event: any, type: string) {
    type === 'boy'
      ? this.subscribeForm.get('girl')?.setValue(false)
      : this.subscribeForm.get('boy')?.setValue(false);
  }

  getGender() {
    if (this.subscribeForm.get('boy')?.value === true) {
      this.subscribeForm.get('gender')?.setValue('boy');
    } else if (this.subscribeForm.get('girl')?.value === true) {
      this.subscribeForm.get('gender')?.setValue('girl');
    }
  }
}
