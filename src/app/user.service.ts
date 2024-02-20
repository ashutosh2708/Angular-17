import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // Http Requests
  public getUrl = 'assets/data.json';
  // GetByID ='assets/data.json?id=2'

  constructor(public http: HttpClient) {}

  // CRUD

  getItems(): Observable<any> {
    return this.http.get(this.getUrl);
  }

  getItemById(id: number) {
    return this.http.get(`${this.getUrl}?id=${id}`);
  }

  addItem(item: any): Observable<any> {
    return this.http.post(this.getUrl, item);
  }

  updateItem(id: any, updatedItem: any): Observable<any> {
    return this.http.put(`${this.getUrl}?id=${id}`, updatedItem);
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${this.getUrl}?id=${id}`);
  }
}
