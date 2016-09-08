import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import { TitleComponent } from './title/title.component';
import { DescriptionComponent } from './description/description.component';
import { SocialLinksComponent } from './social-links/social-links.component';


@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    SocialLinksComponent,
    DescriptionComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
