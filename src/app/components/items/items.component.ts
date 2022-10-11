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
        title: 'origen',
        price: 30000,
        kilometer: 15,
        completed: false,
      },
      {
        id: 2,
        title: 'destino',
        price: 0,
        kilometer: 35,
        completed: true,
      }
    ]
  }
}
