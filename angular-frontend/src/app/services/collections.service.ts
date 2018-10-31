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
    const url = `${this.collectionURL}`;
    return this.http.get(url)
  }
  
  createCollection (collection: Collection): Observable<Collection> {
    const url = `${this.collectionURL}`;
    return this.http.post<Collection>(url, collection);
  }

  readCollection(id) {
    const url = `${this.collectionURL}/${id}`;
    return this.http.get(url)
  }

  updateCollection(collection: Collection): Observable<Collection> {
    const url = `${this.collectionURL}/${collection.CollectionId}`;
    return this.http.put<Collection>(url, collection);
  }

  deleteCollection (id: number): Observable<{}> {
    const url = `${this.collectionURL}/${id}`;
    return this.http.delete(url);
  }


}
