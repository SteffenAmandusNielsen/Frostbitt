import { Component, OnInit } from '@angular/core';
import { MerchProduct } from './models/merch-product';
import { ProductType } from './models/product-type.enum';

@Component({
  selector: 'merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.css']
})
export class MerchComponent implements OnInit {

  public products: MerchProduct[] = [];

  constructor() {}

  ngOnInit() {
    this.fillProducts();
  }

  public fillProducts() {
    for (var i = 0; i < 10; i++) {
      let product: MerchProduct = new MerchProduct();
      product.productName = "Phoenix";
      product.productDescription = "Premium T-shirt";
      product.productPrice = 20;
      product.productType = ProductType.Tshirt;
      this.products.push(product);
    }
  }
}
