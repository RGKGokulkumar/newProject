import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  state=[
    {name:'Fruits'},
    {name:'vegetable'},
    {name:'shampoo'},
    {name:'shop'},
    {name:'Rice'},
    {name:'Medicine'},
    {name:'MasalaPowder'},
    {name:'Kids Product'},
    {name:'Energy Drinks'},
    {name:'Room Freshner'},
    {name:'Cleaner'},
  ];
}
