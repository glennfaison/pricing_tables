import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-plan',
  templateUrl: './pricing-plan.component.html',
  styleUrls: ['./pricing-plan.component.css']
})
export class PricingPlanComponent implements OnInit {

  @Input() pricingPlan: any;

  monthly = Object.entries({
    Memory: '1024MB',
    Users: 5,
    Websites: 10,
    Domains: 10,
    Bandwidth: 'Unlimited',
    Support: '24/7',
  });
  yearly = Object.entries({
    Memory: '1024MB',
    Users: 5,
    Websites: 10,
    Domains: 10,
    Bandwidth: 'Unlimited',
    Support: '24/7',
  });

  constructor() { }

  ngOnInit() {
  }

}
