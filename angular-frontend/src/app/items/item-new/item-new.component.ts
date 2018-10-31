import { Component, OnInit } from '@angular/core';
import { ItemsService, Item } from '../../services/items.service'
import { CollectionsService } from '../../services/collections.service'
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.scss']
})


export class ItemNewComponent implements OnInit {

  collectionId$: Object;
  selected = false;

  itemForm = new FormGroup({
    Name: new FormControl(''),
    Price: new FormControl(''),
    Collected: new FormControl(false)
  });

  constructor(private route: ActivatedRoute, private data: ItemsService) { 
    this.route.params.subscribe( params => this.collectionId$ = params.collectionId );
  }

  ngOnInit() {}

  create(){
    console.log("Create Item");
    const item: Item = Object.assign({CollectionId: this.collectionId$ },this.itemForm.value);
    console.log(item);
    this.data.createItem(item).subscribe(
      suc => {
            console.log(suc);
            window.location.href = "http://localhost:4200/collection/" + item.CollectionId + "/items";
        },
        err => {
            console.log(err );
        }
      );
  };

}
