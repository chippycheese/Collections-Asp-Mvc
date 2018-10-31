import { Component, OnInit } from '@angular/core';
import { CollectionsService, Collection } from '../../services/collections.service'
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-collection-new',
  templateUrl: './collection-new.component.html',
  styleUrls: ['./collection-new.component.scss']
})


export class CollectionNewComponent implements OnInit {

  collectionForm = new FormGroup({
    Name: new FormControl(''),
  });

  constructor(private data: CollectionsService) { }

  ngOnInit() {
  }

  create(){
    console.log("Create Collection");
    const collection: Collection = Object.assign({},this.collectionForm.value);
    this.data.createCollection(collection).subscribe(
      suc => {
            console.log(suc);
            window.location.href = "http://localhost:4200/collections";
        },
        err => {
            console.log(err );
        }
      );
  };

}
