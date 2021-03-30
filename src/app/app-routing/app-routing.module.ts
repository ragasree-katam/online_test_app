import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router' ;

import { MainhomeComponent } from '../mainhome/mainhome.component';
import { QuizComponent } from '../quiz/quiz.component';
//import { CommonModule } from '@angular/common';

const appRoutes : Routes = [
  { path: 'mainhome' , component: MainhomeComponent },
  { path: 'quiz', component : QuizComponent }
];

@NgModule({
  //declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
