import { Component, Input } from '@angular/core';
import {WishItem} from "../../shared/models/wishItem";

@Component({
  selector: 'wish-list-display',
  templateUrl: './wish-list-display.component.html',
  styleUrls: ['./wish-list-display.component.css']
})
export class WishListDisplayComponent {
  @Input() wishes : WishItem[] = [];
  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
