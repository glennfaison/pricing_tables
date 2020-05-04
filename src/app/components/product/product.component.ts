import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: any;

  pricingPlans: any[] = [
    {
      monthly: {
        id: 'Basic',
        currency: '$',
        value: 90,
        duration: 'mo',
        Memory: '1024MB',
        Users: 5,
        Websites: 10,
        Domains: 10,
        Bandwidth: 'Unlimited',
        Support: '24/7',
      },
      yearly: {
        id: 'Basic',
        currency: '$',
        value: 90,
        duration: 'yr',
        Memory: '1024MB',
        Users: 5,
        Websites: 10,
        Domains: 10,
        Bandwidth: 'Unlimited',
        Support: '24/7',
      },
    },
    {
      monthly: {
        id: 'Popular',
        currency: '$',
        value: 90,
        duration: 'mo',
        Memory: '1024MB',
        Users: 5,
        Websites: 10,
        Domains: 10,
        Bandwidth: 'Unlimited',
        Support: '24/7',
      },
      yearly: {
        id: 'Popular',
        currency: '$',
        value: 90,
        duration: 'yr',
        Memory: '1024MB',
        Users: 5,
        Websites: 10,
        Domains: 10,
        Bandwidth: 'Unlimited',
        Support: '24/7',
      },
    },
    {
      monthly: {
        id: 'Premier',
        currency: '$',
        value: 90,
        duration: 'mo',
        Memory: '1024MB',
        Users: 5,
        Websites: 10,
        Domains: 10,
        Bandwidth: 'Unlimited',
        Support: '24/7',
      },
      yearly: {
        id: 'Premier',
        currency: '$',
        value: 90,
        duration: 'yr',
        Memory: '1024MB',
        Users: 5,
        Websites: 10,
        Domains: 10,
        Bandwidth: 'Unlimited',
        Support: '24/7',
      },
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
