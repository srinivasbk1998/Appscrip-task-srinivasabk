import {Component, Input, Output, EventEmitter,OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { ProductService } from 'src/app/SERVICE/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit, OnChanges {
  @Input() sortBy: string = 'recommended';
  @Input() idealFor: string = '';          
  @Output() productCount = new EventEmitter<number>();
  private allProducts: Product[] = [];       
  products: Product[] = [];                 

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data => {
      this.allProducts = data;
      this.applyFilterAndSort();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes['sortBy'] && !changes['sortBy'].firstChange) ||
      (changes['idealFor'] && !changes['idealFor'].firstChange)
    ) {
      this.applyFilterAndSort();
    }
  }
  private applyFilterAndSort(): void {
    this.products = this.idealFor
      ? this.allProducts.filter(p => this.mapIdealFor(p) === this.idealFor)
      : [...this.allProducts];
    this.sortCurrentList();

    this.productCount.emit(this.products.length);
  }

  private sortCurrentList(): void {
    switch (this.sortBy) {
      case 'newest':
        this.products.sort((a, b) => b.id - a.id);
        break;
      case 'priceHighToLow':
        this.products.sort((a, b) => b.price - a.price);
        break;
      case 'priceLowToHigh':
        this.products.sort((a, b) => a.price - b.price);
        break;
      case 'popular':
        this.products.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'recommended':
      default:
        /* leave list as is */
        break;
    }
  }

private mapIdealFor(p: Product): string {
  const cat = (p.category ?? '').toLowerCase();
  if (/(baby|babies|kid|kids|child|children|boy|girl|toddler|infant)/.test(cat)) {
    return 'Baby & Kids';
  }

  if (cat.includes('women')) {
    return 'Women';
  }

  if (cat.includes('men')) {
    return 'Men';
  }

  return '';
}
}
