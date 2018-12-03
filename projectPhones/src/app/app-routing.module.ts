import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { PhonesComponent } from './phones/phones.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './products-page/products-page.component';

const routes: Routes = [
  { path: 'phones', component: PhonesComponent },
  { path: 'Details/:id', component: DetailsPageComponent },
  { path: 'Products', component: ProductsPageComponent},
  { path: 'SignIn', component: SignInPageComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
