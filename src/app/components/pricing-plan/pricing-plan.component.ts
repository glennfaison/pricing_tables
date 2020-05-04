import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-plan',
  templateUrl: './pricing-plan.component.html',
  styleUrls: ['./pricing-plan.component.css']
})
export class PricingPlanComponent implements OnInit {

  @Input() pricingPlan: any;

  isSelected = false;

  constructor() { }

  ngOnInit() {
  }

  toggleIsSelected() {
    this.isSelected = !this.isSelected;
  }

}
