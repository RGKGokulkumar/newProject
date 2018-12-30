import { ChangeDetectionStrategy,Component, OnInit } from '@angular/core';
import {FixedSizeVirtualScrollStrategy, VIRTUAL_SCROLL_STRATEGY} from '@angular/cdk/scrolling';



@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  providers:[{provide:VIRTUAL_SCROLL_STRATEGY,useClass:ListItemComponent}]
})

export class ListItemComponent{
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
export class CustomVirtualScrollStrategy extends FixedSizeVirtualScrollStrategy {

  constructor() { super(50,0,20); }

}
