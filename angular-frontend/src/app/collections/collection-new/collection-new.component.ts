import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-collection-new',
  templateUrl: './collection-new.component.html',
  styleUrls: ['./collection-new.component.scss']
})

export class CollectionNewComponent implements OnInit {


  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  create(){
    const url = 'localhost:5001/collections/post';
    const data = {
      name: 'Simple'
    }
    this.http.post(url,data);
    console.log(data);
  };

}
