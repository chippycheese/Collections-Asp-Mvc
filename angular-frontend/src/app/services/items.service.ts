import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Item {
  ItemId: number;
  CollectionId: number;
  Name: string;
  Price: number;
  Collected: number;
  Active: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class ItemsService {

  // itemURL :string = "http://localhost:3000/api/items"; // node.js
  itemURL :string = "https://localhost:5001/api/items"; // mac MVC.js
  constructor(private http: HttpClient) { }


  getItems() {
    return this.http.get(this.itemURL)
  }

  getCollectionItems(collectionId) {
    return this.http.get(this.itemURL + '/collection/' + collectionId)
  }

  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemURL, item);
  }

  readItem(id) {
    const url = `${this.itemURL}/${id}`;
    return this.http.get(url)
  }

  updateItem(item: Item): Observable<void> {
    const url = `${this.itemURL}/${item.ItemId}`;
    return this.http.put<void>(url, item);
  }

  deleteItem(id) {
    const url = `${this.itemURL}/${id}`;
    return this.http.delete(url);
  }


}
