import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-plan',
  templateUrl: './pricing-plan.component.html',
  styleUrls: ['./pricing-plan.component.css']
})
export class PricingPlanComponent implements OnInit {

  @Input() pricingPlan: any;

  constructor() { }

  ngOnInit() {
  }

}
