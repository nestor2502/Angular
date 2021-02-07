import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './components/persona/persona.component';




@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    //added here too
    ReactiveFormsModule //added here too
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
