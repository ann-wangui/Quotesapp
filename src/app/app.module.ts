import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { FormComponent } from './form/form.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotelistComponent } from './quotelist/quotelist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DatecountPipe } from './datecount.pipe';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    FormComponent,
    QuotesComponent,
    QuotelistComponent,
    NavbarComponent,
    DatecountPipe,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
