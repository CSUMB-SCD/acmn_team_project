import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  {path: 'Home', component: HomePageComponent},
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'home', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'signin', redirectTo: '/SignIn', pathMatch: 'full'},
  {path: 'products', redirectTo: '/Products', pathMatch: 'full'},
  {path: 'detail', redirectTo: '/Details', pathMatch: 'full'},
  {path: 'checkout', redirectTo: '/Checkout', pathMatch: 'full'},
  {path: 'confirmation', redirectTo: '/Confirmation', pathMatch: 'full'},
  {path: 'SignIn', component: SignInPageComponent},
  {path: 'Products', component: ProductsPageComponent},
  {path: 'Details', component: DetailsPageComponent},
  {path: 'Checkout', component: CheckoutPageComponent},
  {path: 'Confirmation', component: ConfirmationPageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignInPageComponent,
    ProductsPageComponent,
    DetailsPageComponent,
    CheckoutPageComponent,
    ConfirmationPageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // debugging purposes only
    ),
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
