import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import { WishListDisplayComponent } from './wish-list-display/wish-list-display.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WishListDisplayComponent,
    AddWishFormComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
