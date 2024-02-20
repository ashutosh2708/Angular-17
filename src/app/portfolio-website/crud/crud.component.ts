import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
})
export class CrudComponent {
  items: any[] = [];

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.getItemDetails();
    this.getItemByID(2);
    this.addItem({ id: 4, name: 'Added Item' });
    this.updatedItem(3, { id: 4, name: 'Updated Item' });
    this.deleteItem(2);
  }

  getItemDetails() {
    this.userService.getItems().subscribe((response) => {
      console.log('Get all items :', response.items);
    });
  }

  getItemByID(id: number) {
    this.userService.getItemById(id).subscribe((response: any) => {
      console.log('Item by id ', id);
      const item = response.items.find((item: any) => item.id === id);
      console.log('Single Item', item);
    });
  }

  addItem(newItem: any) {
    this.userService.addItem(newItem).subscribe((data) => {
      console.log('Added Item', newItem);
    });
  }

  updatedItem(id: number, updatedItem: any) {
    this.userService.updateItem(id, this.updatedItem).subscribe((data) => {
      console.log('Updated Item', id);
      console.log('Updated Successfully');
    });
  }

  deleteItem(id: number) {
    this.userService.deleteItem(id).subscribe(() => {
      console.log('Item deleted successfully');
    });
  }
}
