import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { EventDriverService } from 'src/app/state/event.driver.service';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent {
  //@Output() productEventEmieter :EventEmitter<ActionEvent>=new EventEmitter();
  
  constructor(private eventDrivenService:EventDriverService){}
  onGetAllProducts(){
   // this.productEventEmieter.emit({type:ProductActionsTypes.GET_ALL_PRODUCTS});
   this.eventDrivenService.publishEvent({type:ProductActionsTypes.GET_ALL_PRODUCTS});
  }
  onGetSelectedProducts(){
   // this.productEventEmieter.emit({type:ProductActionsTypes.GET_SELECTED_PRODUCTS});
   this.eventDrivenService.publishEvent({type:ProductActionsTypes.GET_SELECTED_PRODUCTS});

  }
  onGetAvailableProducts(){
   // this.productEventEmieter.emit({type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS});
   this.eventDrivenService.publishEvent({type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS});

  }
  onGetNewProducts(){
    //this.productEventEmieter.emit({type:ProductActionsTypes.NEW_PRODUCTS});
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.NEW_PRODUCTS});

  }
 
  onSearch(dataForm:any){

    //this.productEventEmieter.emit({type:ProductActionsTypes.SEARCH_PRODUCTS,payload:dataForm});
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.SEARCH_PRODUCTS,payload:dataForm});

  }
}


