import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

@Component({
  selector: 'app-interface',
  standalone: true,
  imports: [],
  templateUrl: './interface.component.html',
  styleUrl: './interface.component.scss',
})
export class InterfaceComponent {
  ngOnInit() {
    this.enums();
  }

  product: Product[] = [
    {
      id: 1,
      name: 'ABC',
      price: 5,
      quantity: 10,
    },
  ];

  enums() {
    let direction: Direction;
    direction = Direction.Left;
    console.log('direction', direction);
  }
}
