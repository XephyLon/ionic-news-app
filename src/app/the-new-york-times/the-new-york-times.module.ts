import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TheNewYorkTimesPage } from './the-new-york-times.page';

const routes: Routes = [
  {
    path: '',
    component: TheNewYorkTimesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TheNewYorkTimesPage]
})
export class TheNewYorkTimesPageModule {}
