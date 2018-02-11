import { Component } from '@angular/core';
import { ItemService } from './item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: string[];

  constructor(private itemService: ItemService) {
    this.items = [];
    this.populateItems();
  }

  populateItems() {
    this.itemService.getItems().subscribe(res => {
      this.items = res;
      console.log(this.items);
    });
  }
}
