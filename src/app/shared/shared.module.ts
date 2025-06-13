import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header/header.component';
import { ProductListingComponent } from './product-listing/product-listing/product-listing.component';
import { ProductPageComponent } from './product-page/product-page/product-page.component';
import { ProductSidebarComponent } from './product-sidebar/product-sidebar/product-sidebar.component';
import { FooterComponent } from './footer/footer/footer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    ProductListingComponent,
    ProductPageComponent,
    ProductSidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
      FormsModule,
  ],
  exports: [
    HeaderComponent,
    ProductPageComponent,
    FooterComponent,
  
  ]
})
export class SharedModule { }
