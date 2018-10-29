import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
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
  
  constructor(private route: ActivatedRoute, private data: DataService) { 
     this.route.params.subscribe( params => this.collectionId$ = params.collectionId );
  }

  ngOnInit() {
    this.data.getCollection(this.collectionId$).subscribe(
      data => this.collection$ = data
    );
    this.data.getItemsInCollection(this.collectionId$).subscribe(
      data => this.items$ = data
    );

  }

}