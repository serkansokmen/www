import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MarkdownModule } from 'angular2-markdown';

import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { SocialLinkNodeComponent } from './components/social-links/social-link-node.component';


@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    SocialLinksComponent,
    SocialLinkNodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
