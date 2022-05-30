import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { EcommerceAppComponent } from './components/ecommerce-app/ecommerce-app.component';
import { FiltersComponent } from './components/ecommerce-app/filters/filters.component';
import { ProductListComponent } from './components/ecommerce-app/product-list/product-list.component';
import { ProductItemComponent } from './components/ecommerce-app/product-list/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreService } from './components/ecommerce-app/product-list/product-list.component.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    EcommerceAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
