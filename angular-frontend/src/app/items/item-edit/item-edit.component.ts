import { Component, OnInit } from '@angular/core';

import { ItemsService } from '../../services/items.service'

import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})

export class ItemEditComponent implements OnInit {

  id$: Object;
  collectionId$: Object;
  item$: Object;
  
  constructor(private route: ActivatedRoute, private data: ItemsService) { 
     this.route.params.subscribe( params => this.id$ = params.id );
     this.route.params.subscribe( params => this.collectionId$ = params.collectionId );
  }

  ngOnInit() {
    this.data.readItem(this.id$).subscribe(
      data => this.item$ = data
    );
  }

  update(){
    
  }

  delete(id : number){
    console.log("Delete Item: " + id)
    this.data.deleteItem(id).subscribe(
      suc => {
            console.log(suc);
            window.location.href = "http://localhost:4200/collection/" + this.collectionId$ + "/items";
        },
        err => {
            console.log(err );
        }
      );
  }

}
