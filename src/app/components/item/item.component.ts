import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = new Item();
  
  constructor() { }

  ngOnInit(): void {
  }

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

}
