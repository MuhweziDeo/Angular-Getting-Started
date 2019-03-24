import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducts } from './products'
@Component({
  // selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  
})
export class ProductDetailComponent implements OnInit {
  product: IProducts,
  pageTitle:string="product"
  constructor(private route : ActivatedRoute,private router:Router) { }

  ngOnInit() {
    // console.log(this.route.params._value.id)
    let id = this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.product ={
      "productId": parseInt(id),
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    }
  }
  onBack():void{
      this.router.navigate(['/products']);
  }
  
}
