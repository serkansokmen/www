import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import { TitleComponent } from './title/title.component';
import { DescriptionComponent } from './description/description.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { SocialLinkNodeComponent } from './social-links/social-link-node.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    SocialLinksComponent,
    SocialLinkNodeComponent,
    DescriptionComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
