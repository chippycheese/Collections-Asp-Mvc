import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
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
  
  constructor(private route: ActivatedRoute, private data: DataService) { 
     this.route.params.subscribe( params => this.id$ = params.id );
     this.route.params.subscribe( params => this.collectionId$ = params.collectionId );
  }

  ngOnInit() {
    this.data.getItem(this.id$).subscribe(
      data => this.item$ = data
    );
  }

  update(){
    
  }

  delete(){
    
  }
}
