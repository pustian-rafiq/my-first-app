import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { FirstComponent } from './first/first.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { MaterialModule } from './material/material.module';
import { SecondComponent } from './second/second.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { TestComponent } from './test/test.component';
import { HerosComponent } from './heros/heros.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ChildOneComponent,
    ChildTwoComponent,
    SignupComponent,
    LoginDialogComponent,
    CartComponent,
    TruncatePipe,
    TestComponent,
    HerosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    BooksModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
