import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { EventDriverService } from 'src/app/state/event.driver.service';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent implements OnInit {
  
  @Input() product?:Product;
  //@Output ()eventEmitter:EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();
  constructor(private eventDriverService:EventDriverService){}
  ngOnInit(): void {
  }
  onSelect(product:Product){
    //this.eventEmitter.emit({type:ProductActionsTypes.SELECT_PRODUCTS,payload:product});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.SELECT_PRODUCTS,payload:product});
  }
  onDelete(product :Product){
   // this.eventEmitter.emit({type:ProductActionsTypes.DELETE_PRODUCTS,payload:product});
   this.eventDriverService.publishEvent({type:ProductActionsTypes.DELETE_PRODUCTS,payload:product});

  }
  onEdit(product:Product){ 
    //this.eventEmitter.emit({type:ProductActionsTypes.EDIT_PRODUCTS,payload:product});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.EDIT_PRODUCTS,payload:product});


}
}