import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CdkTableModule } from '@angular/cdk/table'
import {
  MatInputModule,
  MatListModule,
  MatTableModule,
  MatSelectModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatRadioModule,
  MatMenuModule,
  MatButtonToggleModule,
  MatExpansionModule,
  MatPaginatorModule
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
  MatListModule,
  MatDialogModule,
  MatRadioModule,
  MatMenuModule,
  MatButtonToggleModule,
  MatExpansionModule,
  MatPaginatorModule,
  CdkTableModule
]

@NgModule({
  imports: modules,
  exports: modules
})
export class RsdigitalMaterialModule { }
