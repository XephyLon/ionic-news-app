import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MedicalNewsTodayPage } from './medical-news-today.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalNewsTodayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MedicalNewsTodayPage]
})
export class MedicalNewsTodayPageModule {}
