import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-handling',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-handling.component.html',
  styleUrl: './error-handling.component.scss',
})
export class ErrorHandlingComponent {
  data: any;
  users: any;
  constructor(public userService: UserService) {
    // this.errorhandling()
    this.data = this.userService.getData();
    console.log('Result', this.data);
    this.users = this.userService.getUsers();
    console.log('Userss---', this.users);
  }
  sampleError() {
    let x: number = null!;
    console.log('Sampple', x);
    throw new Error('');
  }
  errorhandling() {
    try {
      let result = this.sampleError();
      console.log('Result', result);
    } catch (error: any) {
      console.error('Type error', error.message);
    } finally {
      console.log('Finally');
    }
  }
}
