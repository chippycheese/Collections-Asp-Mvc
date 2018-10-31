import { Component, OnInit } from '@angular/core';
import { CollectionsService, Collection } from '../../services/collections.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-collection-new',
  templateUrl: './collection-new.component.html',
  styleUrls: ['./collection-new.component.scss']
})

export class CollectionNewComponent implements OnInit {



  constructor(private data: CollectionsService) { }

  ngOnInit() {
  }

  collection : Collection = {
    CollectionId: 100,
    Name: "Okay",
    Collected: 0,
    Total: 0,
    Active: true
  };

  create(){
    console.log("test");
    this.data.createCollection(this.collection).subscribe();
  };

}
