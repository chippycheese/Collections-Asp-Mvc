import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient) { }

  getCollections() {
    return this.http.get('https://localhost:5001/api/collections')
  }





  createCollection(collection: Collection): Observable<Collection> {
    return this.http.post<Collection>('https://localhost:5001/api/collections', collection);
  }

  readCollection(id) {
    return this.http.get('https://localhost:5001/api/collections/' + id)
  }

  updateCollection(collection: Collection): Observable<void> {
    return this.http.put<void>('https://localhost:5001/api/collections/' + collection.CollectionId, collection);
  }

  deleteCollection(id) {
    return this.http.delete('https://localhost:5001/api/collections/' + id);
  }


}
