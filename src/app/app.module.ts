import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MarkdownModule } from 'angular2-markdown';

import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';


@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
