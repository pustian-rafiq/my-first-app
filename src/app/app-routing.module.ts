import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { HerosComponent } from './heros/heros.component';
import { SecondComponent } from './second/second.component';
import { SignupComponent } from './signup/signup.component';
import { TestComponent } from './test/test.component';
const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
  },
  {
    path: 'custom-pipe',
    component: TestComponent,
  },
  {
    path: 'heros',
    component: HerosComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'second',
    component: SecondComponent,
    children: [
      {
        path: 'child-one',
        component: ChildOneComponent,
      },
      {
        path: 'child-two',
        component: ChildTwoComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
