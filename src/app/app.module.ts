import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,MatToolbarRow } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {HttpClient,HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppConfig, APP_CONFIG } from './app.config';
import { CatalogoComponent } from './catalogo/catalogo.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CatalogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatGridListModule,
    NgbModule
    // MatToolbarRow
  ],
  exports:[
    

  ],
  providers: [{provide:APP_CONFIG,useValue:AppConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
