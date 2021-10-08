import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SelectivePreloadStrategy } from './SelectivePreloadStrategy';
import { AuthGuard } from './user/auth.guard';


const appRoutes: Routes = [
 {
    path : 'keramiek',
    canActivate: [AuthGuard],
    loadChildren: () =>
        import('./shopping-cart/shopping-cart.module').then(mod => mod.KeramiekModule),
        data: {preload: true}
  },
  { path: '', redirectTo: 'keramiek/shopping-cart', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: SelectivePreloadStrategy}),
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
