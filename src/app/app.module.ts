import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatTooltipModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  declarations: [
    AppComponent,
    AvatarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
