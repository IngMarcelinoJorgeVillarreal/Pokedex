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
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {MatTreeModule} from '@angular/material/tree';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

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
    NgbModule,
    MatTabsModule,
    FormsModule,
    MatTreeModule,
    NgxJsonViewerModule,
    // PerfectScrollbarModule,
    NgxDatatableModule,
    // MatToolbarRow
  ],
  exports:[
    

  ],
  providers: [{provide:APP_CONFIG,useValue:AppConfig},
  //   {
  //   provide: PERFECT_SCROLLBAR_CONFIG,
  //   useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
