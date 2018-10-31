import { Component, OnInit } from '@angular/core';
import { ItemsService, Item } from '../../services/items.service'
import { CollectionsService } from '../../services/collections.service'
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})

export class ItemEditComponent implements OnInit {

  id$: Object;
  collectionId$: Object;
  item$: Item;

  itemForm = new FormGroup({
    Name: new FormControl(''),
    Price: new FormControl(''),
    Collected: new FormControl(false)
  });
  
  constructor(private route: ActivatedRoute, private data: ItemsService) { 
     this.route.params.subscribe( params => this.id$ = params.id );
     this.route.params.subscribe( params => this.collectionId$ = params.collectionId );
  }

  ngOnInit() {
    this.data.readItem(this.id$).subscribe(
      data => this.item$ = Object.assign(data)
    );
  }

  update(){
    console.log("Update Item");
    const item: Item = Object.assign(this.item$,this.itemForm.value);
    console.log(item);
    this.data.updateItem(item).subscribe(
      suc => {
            console.log(suc);
            window.location.href = "http://localhost:4200/collection/" + item.CollectionId + "/items";
        },
        err => {
            console.log(err );
        }
      );
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
