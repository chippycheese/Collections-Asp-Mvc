import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Item {
  ItemId: number;
  CollectionId: number;
  Name: string;
  Price: number;
  Collected: boolean;
  Active: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class ItemsService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get('https://localhost:5001/api/items')
  }

  getCollectionItems(collectionId) {
    return this.http.get('https://localhost:5001/api/items/collection/' + collectionId)
  }

  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>('https://localhost:5001/api/items', item);
  }

  readItem(id) {
    return this.http.get('https://localhost:5001/api/items/' + id)
  }

  updateItem(item: Item): Observable<void> {
    return this.http.put<void>('https://localhost:5001/api/items/' + item.ItemId, item);
  }

  deleteItem(id) {
    return this.http.delete('https://localhost:5001/api/items/' + id);
  }


}
