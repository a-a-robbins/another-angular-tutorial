import {Component} from '@angular/core';
import {WishItem} from "../shared/models/wishItem";
import {filter} from "rxjs";

const filters = [
  (item : WishItem) => item,
  (item : WishItem) => !item.isComplete,
  (item : WishItem) => item.isComplete
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Wishlist';
  items: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself')
  ];
  listFilter : any = "0";

  get visibleItems(): WishItem[] {
    return this.items.filter(filters[this.listFilter]);
  }
}
