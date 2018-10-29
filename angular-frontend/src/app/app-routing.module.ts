import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { ItemsComponent } from './items/items.component';



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
    path: 'collection/:id/items',
    component: ItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


