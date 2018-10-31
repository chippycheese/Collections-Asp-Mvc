import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Collection {
  CollectionId: number;
  Name: string;
  Collected: number;
  Total: number;
  Active: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class CollectionsService {

  collectionURL :string = "https://localhost:5001/api/collections";
  

  constructor(private http: HttpClient) { }

  getCollections() {
    return this.http.get(this.collectionURL)
  }
  
  createCollection (hero: Collection): Observable<Collection> {
  return this.http.post<Collection>(this.collectionURL, hero);
  }

  readCollection(id) {
    const url = `${this.collectionURL}/${id}`;
    return this.http.get(url)
  }

  updateCollection(collection: Collection): Observable<void> {
    const url = `${this.collectionURL}/${collection.CollectionId}`;
    return this.http.put<void>(url , collection);
  }

  deleteCollection (id: number): Observable<{}> {
    const url = `${this.collectionURL}/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
      })
    };
    return this.http.delete(url, httpOptions);
  }


}
