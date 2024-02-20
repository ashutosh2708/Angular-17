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

  fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
      const success = true;
      setTimeout(() => {
        if (success) {
          resolve('Data from resolve---');
        } else {
          reject('Error while fetching---rejected');
        }
      }, 1000);
    });
  }
}
