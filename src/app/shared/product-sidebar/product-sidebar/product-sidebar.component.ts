import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-sidebar',
  templateUrl: './product-sidebar.component.html',
  styleUrls: ['./product-sidebar.component.css']
})
export class ProductSidebarComponent {
  @Output() idealForChanged = new EventEmitter<string>();

  filters = [
    'IDEAL FOR', 'OCCASION', 'WORK', 'FABRIC',
    'SEGMENT', 'SUITABLE FOR', 'RAW MATERIALS', 'PATTERN'
  ];

  idealForOptions = ['Men', 'Women', 'Baby & Kids'];
  selectedIdealFor = '';
  showIdealForOptions = false;

  toggleIdealFor() {
    this.showIdealForOptions = !this.showIdealForOptions;
  }

  onSelectIdealFor(value: string) {
    this.selectedIdealFor = value;
    this.idealForChanged.emit(value);
  }
}
