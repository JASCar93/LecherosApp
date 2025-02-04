import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule} from '@angular/material/table'; 
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgxUiLoaderModule , NgxUiLoaderHttpModule } from "ngx-ui-loader";
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { HomeComponent } from './pages/home/home.component';
import {MatListModule} from '@angular/material/list';
import { ListUsuarioComponent } from './pages/list-usuario/list-usuario.component'; 
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatSortModule} from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistrarComponent,
    HomeComponent,
    ListUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    HttpClientModule,
    MatSnackBarModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
