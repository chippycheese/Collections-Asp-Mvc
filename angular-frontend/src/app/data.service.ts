import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCollections() {
    return this.http.get('https://localhost:5001/api/collections')
  }

  getCollection(id) {
    return this.http.get('https://localhost:5001/api/collections/' + String(id))
  }

  getItemsInCollection(id) {
    return this.http.get('https://localhost:5001/api/items/collection/' + String(id))
  }

  getItem(id) {
    return this.http.get('https://localhost:5001/api/items/' + String(id))
  }

}
