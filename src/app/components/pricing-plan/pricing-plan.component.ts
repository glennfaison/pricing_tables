import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-plan',
  templateUrl: './pricing-plan.component.html',
})
export class PricingPlanComponent implements OnInit {

  @Input() pricingPlan: any;

  isSelected = false;

  toggleIsSelected() {
    this.isSelected = !this.isSelected;
  }

}
