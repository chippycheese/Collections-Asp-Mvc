import { Component, OnInit } from '@angular/core';
import { CollectionsService } from '../../services/collections.service'
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-collection-edit',
  templateUrl: './collection-edit.component.html',
  styleUrls: ['./collection-edit.component.scss']
})
export class CollectionEditComponent implements OnInit {

  id$: Object;
  collection$: Object;
  
  constructor(private route: ActivatedRoute, private data: CollectionsService) { 
     this.route.params.subscribe( params => this.id$ = params.id );
  }

  ngOnInit() {
    this.data.readCollection(this.id$).subscribe(
      data => this.collection$ = data 
    );
  }

  update(){
    
  }

  delete(id : number){
    console.log("Delete Collection: " + id)
    this.data.deleteCollection(id).subscribe(
      suc => {
            console.log(suc);
            window.location.href = "http://localhost:4200/collections";
        },
        err => {
            console.log(err );
        }
      );
  }

}
