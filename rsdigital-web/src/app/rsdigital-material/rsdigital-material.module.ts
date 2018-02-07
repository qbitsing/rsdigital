import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatInputModule,
  MatListModule,
  MatTableModule,
  MatSelectModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule
} from '@angular/material'
const modules = [
  BrowserAnimationsModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatListModule
]

@NgModule({
  imports: modules,
  exports: modules
})
export class RsdigitalMaterialModule { }
