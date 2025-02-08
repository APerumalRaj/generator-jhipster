import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { FormatMediumDatePipe } from 'app/shared/date';
import { IProduct } from '../product.model';

@Component({
  selector: 'jhi-product-detail',
  templateUrl: './product-detail.component.html',
  imports: [SharedModule, RouterModule, FormatMediumDatePipe],
})
export class ProductDetailComponent {
  product = input<IProduct | null>(null);

  previousState(): void {
    window.history.back();
  }
}
