import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';
// import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemsComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  //   AgmCoreModule.forRoot({
  //     apiKey: 'AIzaSyD4iijSEioy6wCAU6OtR3Y4gRUBZKgvYPk'
  //   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
