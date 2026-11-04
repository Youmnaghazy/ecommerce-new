import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ProductsService } from '../../shared/services/products/products.service';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../../core/models/iproduct.interface';

@Component({
  imports: [],
  selector: 'app-product-details',
  styleUrl: './product-details.component.css',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
  private readonly productsService = inject(ProductsService);
  private readonly activatedRoute = inject(ActivatedRoute);
  productId=signal('')
  prodData:WritableSignal<Iproduct>=signal({}as Iproduct)
ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params)=>{
      this.productId.set(params.get('id')!)
      this.getproductDetails()
    })
}
getproductDetails(){
  this.productsService.getSpecificProduct(this.productId()).subscribe({
    next:(res)=>{
      console.log(res);
      this.prodData.set(res.data)

    },
    error:(err)=>{
      console.log(err);

    }
  })

}
}
