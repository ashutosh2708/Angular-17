import { Component } from '@angular/core';

@Component({
  selector: 'app-error-handling',
  standalone: true,
  imports: [],
  templateUrl: './error-handling.component.html',
  styleUrl: './error-handling.component.scss',
})
export class ErrorHandlingComponent {
  constructor() {
    this.errorhandling();
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
