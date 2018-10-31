import { Component, OnInit } from '@angular/core';
import { CollectionsService } from '../services/collections.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  collections$: Object;
  
  constructor(private data: CollectionsService) { }

  ngOnInit() {
    this.data.getCollections().subscribe(
      data => this.collections$ = data 
    );
  }

}
