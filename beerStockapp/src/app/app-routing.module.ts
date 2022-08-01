import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes:
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StockCervezaPageComponent } from './pages/stock-cerveza-page/stock-cerveza-page.component';
import { ProveedoresPageComponent } from './pages/proveedores-page/proveedores-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RecetasPageComponent } from './pages/recetas-page/recetas-page.component';
import { ContactoPageComponent } from './pages/contacto-page/contacto-page.component';
import { CoccionPageComponent } from './pages/coccion-page/coccion-page.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'stock', component: StockCervezaPageComponent },
  { path: 'proveedores', component: ProveedoresPageComponent },
  { path: 'recetas', component: RecetasPageComponent },
  { path: 'contacto', component: ContactoPageComponent },
  { path: 'coccion', component: CoccionPageComponent },
  { path: 'login', component: LoginComponent },

  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
