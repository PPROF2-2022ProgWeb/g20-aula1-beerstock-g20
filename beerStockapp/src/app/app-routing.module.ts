import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StockCervezaPageComponent } from './pages/stock-cerveza-page/stock-cerveza-page.component';
import { ProveedoresPageComponent } from './pages/proveedores-page/proveedores-page.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'stock', component: StockCervezaPageComponent },
  { path: 'proveedores', component: ProveedoresPageComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
