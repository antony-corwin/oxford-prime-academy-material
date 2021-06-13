import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/layout.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollTopModule } from "@components/scroll-top/scroll-top.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule,
    RouterModule.forRoot([], {
      anchorScrolling: "enabled",
    }),
    BrowserAnimationsModule,
    ScrollTopModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
