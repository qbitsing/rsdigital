import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule } from '@angular/material';
const modules = [
  BrowserAnimationsModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class RsdigitalMaterialModule { }
