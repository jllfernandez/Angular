import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JokeComponent } from './joke/joke.component';
import { LukeComponent } from './luke/luke.component';
import { LukeListComponent } from './luke-list/luke-list.component';
import { LukeFormComponent } from './luke-form/luke-form.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    LukeComponent,
    LukeListComponent,
    LukeFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
