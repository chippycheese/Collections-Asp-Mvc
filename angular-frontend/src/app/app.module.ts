import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CollectionsComponent } from './collections/collections.component';
import { ItemsComponent } from './items/items.component';
import { CollectionNewComponent } from './collections/collection-new/collection-new.component';
import { CollectionEditComponent } from './collections/collection-edit/collection-edit.component';
import { ItemNewComponent } from './items/item-new/item-new.component';
import { ItemEditComponent } from './items/item-edit/item-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CollectionsComponent,
    ItemsComponent,
    CollectionNewComponent,
    CollectionEditComponent,
    ItemNewComponent,
    ItemEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
