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

  id$: Object;
  collection$: Object;
  items$: Object;
  
  constructor(private route: ActivatedRoute, private data: DataService) { 
     this.route.params.subscribe( params => this.id$ = params.id );
  }

  ngOnInit() {
    this.data.getCollection(this.id$).subscribe(
      data => this.collection$ = data
    );
    this.data.getItemsInCollection(this.id$).subscribe(
      data => this.items$ = data
    );

  }

}