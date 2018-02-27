import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Invoker } from "./command-pattern/invoker";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [Invoker],
  bootstrap: [AppComponent]
})
export class AppModule {}
