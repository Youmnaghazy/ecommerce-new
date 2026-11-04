import { Component, input } from '@angular/core';
import { Iproduct } from '../../../../core/models/iproduct.interface';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-product-cards',
  styleUrl: './product-cards.component.css',
  templateUrl: './product-cards.component.html',
})
export class ProductCardsComponent {
  readonly product = input.required<Iproduct>();
  readonly ratingStars = [1, 2, 3, 4, 5];
}
