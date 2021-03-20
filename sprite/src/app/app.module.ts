import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumwordComponent } from './numword/numword.component';
import { NumwordPipe } from './numword/numword.pipe';
import { SpriteComponent } from './sprite/sprite.component';

@NgModule({
  declarations: [AppComponent, SpriteComponent, NumwordComponent, NumwordPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
