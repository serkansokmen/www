import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { SokmenComponent } from './components/sokmen/sokmen.component';
import { InfoComponent } from './components/info/info.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  declarations: [
    AppComponent,
    AvatarComponent,
    SokmenComponent,
    InfoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
