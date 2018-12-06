import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CupangComponent } from './cupang/cupang.component';



import { CupangListComponent } from './cupang/cupang-list/cupang-list.component';
import { CupangDetailComponent } from './cupang/cupang-detail/cupang-detail.component';

import { CupangItemComponent } from './cupang/cupang-list/cupang-item/cupang-item.component';


import { FooterComponent } from './footer/footer.component';
import { DropdownDirective } from './shared/dropdown.directive';

import { CupangEditComponent } from './cupang/cupang-edit/cupang-edit.component';

import { CupangService } from './cupang/cupang.service';
import { DataStorageService } from './shared/data-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CupangComponent,
     CupangListComponent,
    CupangDetailComponent,
    CupangItemComponent,
    DropdownDirective,
  
    CupangEditComponent,
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ CupangService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
