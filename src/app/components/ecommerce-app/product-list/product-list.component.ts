import { Component, OnInit } from '@angular/core';
import { Store } from './model/store';
import { StoreService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  produtos: any;
  storeService: StoreService;

  constructor( storeService: StoreService) { 
    this.storeService = storeService;
  }

  ngOnInit(): void {
    this.produtos = this.storeService.getStore().subscribe((data =>{
      this.produtos = data;
      console.log(this.produtos);
    }))
  }

}
