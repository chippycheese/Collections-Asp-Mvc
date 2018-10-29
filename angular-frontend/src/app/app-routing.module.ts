import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { CollectionNewComponent } from './collections/collection-new/collection-new.component';
import { CollectionEditComponent } from './collections/collection-edit/collection-edit.component';
import { ItemsComponent } from './items/items.component';
import { ItemNewComponent } from './items/item-new/item-new.component';
import { ItemEditComponent } from './items/item-edit/item-edit.component';




const routes: Routes = [
  {
    path: '',
    component: CollectionsComponent
  },
  {
    path: 'collections',
    component: CollectionsComponent
  },
  {
    path: 'collections/new',
    component: CollectionNewComponent
  },
  {
    path: 'collections/edit/:id',
    component: CollectionEditComponent
  },
  {
    path: 'collection/:collectionId',
    component: ItemsComponent
  },
  {
    path: 'collection/:collectionId/items',
    component: ItemsComponent
  },
  {
    path: 'collection/:collectionId/items/new',
    component: ItemNewComponent
  },
  {
    path: 'collection/:collectionId/items/edit/:id',
    component: ItemEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


