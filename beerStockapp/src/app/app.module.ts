import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Rutas
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StockCervezaPageComponent } from './pages/stock-cerveza-page/stock-cerveza-page.component';
import { ProveedoresPageComponent } from './pages/proveedores-page/proveedores-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RecetasPageComponent } from './pages/recetas-page/recetas-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    DashboardComponent,
    StockCervezaPageComponent,
    ProveedoresPageComponent,
    LoginComponent,
    RecetasPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
