import { Injectable } from "@angular/core";
import { ActionEvent } from "./product.state";
import { Subject } from "rxjs";

 @Injectable({providedIn:"root"})
 export class EventDriverService{
    sourceEventSubject:Subject<ActionEvent>=new Subject<ActionEvent>();
    sourceEventSubjectObservable=this.sourceEventSubject.asObservable();
    sourceEventSubject2:Subject<ActionEvent>=new Subject<ActionEvent>();
    sourceEventSubjectObservable2=this.sourceEventSubject.asObservable();
   publishEvent(event:ActionEvent){
    this.sourceEventSubject.next(event);
   }
}