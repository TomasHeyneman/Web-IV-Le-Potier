

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { KeramiekComponent } from './keramiek/keramiek.component';
import { KeramiekListComponent } from './keramiek-list/keramiek-list.component';
import { AddKeramiekComponent } from './add-keramiek/add-keramiek.component';
import { KeramiekfilterPipe } from '../keramiekfilter.pipe';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { KeramiekDetailComponent } from './keramiek-detail/keramiek-detail.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { KeramiekFormComponent } from './keramiek-form/keramiek-form.component';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart.component';
import { KeramiekResolver } from './keramiek.resolver';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartComponent } from './cart/cart.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoginComponent } from '../user/login/login.component';
import { RegisterComponent } from '../user/register/register.component';
import { NavComponent } from '../main-nav-footer/nav/nav.component';


const appRoutes: Routes = [
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'list', component: KeramiekListComponent },
  {path : 'aboutme', component: AboutMeComponent},
  // {path : 'login', component: LoginComponent},
  // {path : 'register', component: RegisterComponent},
  {path: 'detail/:id', component: KeramiekDetailComponent,
  resolve: { keramiek: KeramiekResolver }},
  // { path: '', redirectTo: 'keramiek/shopping-cart', pathMatch: 'full'},
  // { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
     KeramiekComponent,
     KeramiekListComponent,
     AddKeramiekComponent,
     KeramiekfilterPipe,
     KeramiekDetailComponent,
     KeramiekFormComponent,
     AboutMeComponent,
     CartComponent,
     CartItemComponent,
     ShoppingCartComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    //MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(appRoutes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
  })
  ],
  exports: [ShoppingCartComponent,KeramiekListComponent, AboutMeComponent, KeramiekDetailComponent]
})
export class KeramiekModule {}

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}
