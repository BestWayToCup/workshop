import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { OfflineComponent } from './offline/offline.component';

const routes: Routes = [
  {
    path: '**',
    component: OfflineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
