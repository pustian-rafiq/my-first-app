import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  {
    path: '',
    component: FirstComponent,
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
