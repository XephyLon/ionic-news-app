import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewYorkMagazinePage } from './new-york-magazine.page';

const routes: Routes = [
  {
    path: '',
    component: NewYorkMagazinePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewYorkMagazinePage]
})
export class NewYorkMagazinePageModule {}
