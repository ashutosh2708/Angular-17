import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: any = ['user1', 'user2', 'user3'];
  constructor() {}
  getData() {
    return 'Data from Service';
  }
  getUsers() {
    return this.users;
  }
}
