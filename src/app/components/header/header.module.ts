import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header.component";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ClickOutsideModule } from "@core/directives/click-outside/click-outside.module";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, MatAutocompleteModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, ClickOutsideModule],
  exports: [HeaderComponent],
})
export class HeaderModule {
}
