import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'educonnect', pathMatch: 'full' },

  {
    path: 'educonnect',
    loadChildren: () =>
      import('./educonnect/educonnect.module').then(m => m.EduconnectModule)
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(m => m.AuthModule)
  },

  { path: '**', redirectTo: 'educonnect' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // IMPORTANT
  exports: [RouterModule]
})
export class AppRoutingModule {}