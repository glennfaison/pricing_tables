import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pricing';
  products: any[];

  constructor(private productSvc: ProductService) {}

  async ngOnInit() {
    this.products = await this.productSvc.fetchAll();
  }
}
