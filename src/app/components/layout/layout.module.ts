import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FooterModule } from "../footer/footer.module";
import { LayoutComponent } from "./layout.component";
import { NavbarModule } from "@components/navbar/navbar.module";

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, FooterModule, NavbarModule],
  exports: [LayoutComponent],
})
export class LayoutModule {
}
