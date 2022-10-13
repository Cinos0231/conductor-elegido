import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  
  items: Item[]= [];
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        id: 0,
        origen: 'origen',
        destino:  'destino',
        price: 0,
        kilometer: 15,
        completed: false,
      },
      
    ]
  }
}
