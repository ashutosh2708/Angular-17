import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: any = ['user1', 'user2', 'user3'];
  constructor() {}

  // Http Request

  // weather ---- 9:00 am -20, 10:00 am -30, 11:00 am -32

  //Subscribe
  observeData() {
    let request = of('Data from my side'); //return Observable---stream of data
    request.subscribe({
      // Observer
      next: (data) => {
        console.log('Subscribed data-----', data);
      },
      error: (error) => {
        console.log('Subscription error----', error);
      },
      complete: () => {
        // optional
        console.log('Request completed');
      },
    });
  }

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
