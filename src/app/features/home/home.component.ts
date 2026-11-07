import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { ProductCardsComponent } from './components/product-cards/product-cards.component';
import { ProductsService } from '../../shared/services/products/products.service';
import { Iproduct } from '../../core/models/iproduct.interface';
import { CategoryService } from '../../shared/services/category/category.service';
import { Icategory } from '../../core/models/icategory.interface';

@Component({
  imports: [ProductCardsComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-home',
  styleUrl: './home.component.css',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  private readonly productsService =inject(ProductsService)
  private readonly categoryService =inject(CategoryService)
  productList:WritableSignal<Iproduct[]>=signal([])
  categoryList:WritableSignal<Icategory[]>=signal([])
  ngOnInit(): void {
    this.getAllProducts()
    this.getAllCategories()
  }

  getAllProducts() {
    this.productsService.getAllProducts().subscribe({
      next:(res)=>{
        this.productList.set(res.data)
        console.log(this.productList())
      },
      error:(err)=>{
        console.log(err)
      }
    })

  }
  getAllCategories() {
    this.categoryService.getAllCategories().subscribe({
      next:(res)=>{
        this.categoryList.set(res.data)
        console.log(this.categoryList())
      },
      error:(err)=>{
        console.log(err)
      }
    })

  }
}
