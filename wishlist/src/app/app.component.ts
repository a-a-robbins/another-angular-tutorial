import { Component } from '@angular/core';
import { WishItem } from "../shared/models/wishItem";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Wishlist';
  items : WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself')
  ];
  listFilter = "0";
  newWishText = "";
  visibleItems: WishItem[] = this.items;

  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = "";
  }

  filterChanged(value: any) {
    if(value === "0") {
      this.visibleItems == this.items;
    }
    else if(value === "1") {
      this.visibleItems = this.items.filter(item => !item.isComplete);
    }
    else {
      this.visibleItems = this.items.filter(item => item.isComplete);
    }
  }
}
