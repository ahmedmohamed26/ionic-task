import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  discoverArr: any = [
    {
      icon: 'assets/icon/subscribe.svg',
      title: 'Step 1: Subscribe',
      des: "Select a subscription plan that suits your child's learning needs and preferences.",
    },
    {
      icon: 'assets/icon/personalise.svg',
      title: 'Step 2: Personalise Your Box',
      des: "Tell us about your child's age, interests, and learning goals, and we'll customize their surprise box accordingly.",
    },
    {
      icon: 'assets/icon/receive.svg',
      title: 'Step 3: Receive Your Surprise Box',
      des: 'Sit back and relax as your child eagerly awaits the arrival of their monthly surprise box filled with engaging learning materials.',
    },
  ];
  constructor() {}
}
