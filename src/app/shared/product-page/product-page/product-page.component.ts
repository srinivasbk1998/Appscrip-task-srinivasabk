import { Component } from '@angular/core';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent {
  selectedSort = 'recommended';

  selectedIdealFor = '';     
  showFilter = true;          
  productTotal = 0;
  onSortChange(): void {
    console.log('Selected sort option:', this.selectedSort);
  }

  onIdealForChanged(value: string): void {
    this.selectedIdealFor = value;
  }

  getItemCount(count: number): void {
    this.productTotal = count;
  }

  toggleFilter(): void {
    this.showFilter = !this.showFilter;
  }
}
