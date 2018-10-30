import { Component, OnInit } from '@angular/core';

import { ItemsService } from '../services/items.service'
import { CollectionsService } from '../services/collections.service'


import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  collectionId$: Object;
  collection$: Object;
  items$: Object;
  
  constructor(private route: ActivatedRoute, private dataCollections: CollectionsService, private dataItems: ItemsService ) { 
     this.route.params.subscribe( params => this.collectionId$ = params.collectionId );
  }

  ngOnInit() {
    this.dataCollections.readCollection(this.collectionId$).subscribe(
      data => this.collection$ = data
    );
    this.dataItems.getCollectionItems(this.collectionId$).subscribe(
      data => this.items$ = data
    );

  }

}