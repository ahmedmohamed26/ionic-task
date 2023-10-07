import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  subscribeForm: FormGroup = new FormGroup({});
  isSubmitted: boolean = false;
  year = new Date().getFullYear();
  pagesLink: any = [
    {
      name: 'Privacy Policy',
      path: '',
    },
    {
      name: 'Terms of Service',
      path: '',
    },
    {
      name: 'Cookies Settings',
      path: '',
    },
  ];
  links: any = [
    {
      name: 'link one',
      path: '',
    },
    {
      name: 'link two',
      path: '',
    },
    {
      name: 'link three',
      path: '',
    },
    {
      name: 'link four',
      path: '',
    },
    {
      name: 'link five',
      path: '',
    },
  ];
  constructor(public formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.subscribeForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get errorControl() {
    return this.subscribeForm.controls;
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

  goToPage(path: string) {
    this.router.navigate([`/${path}`]);
  }
}
