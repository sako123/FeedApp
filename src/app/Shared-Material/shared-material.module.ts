
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatInputModule, MatCheckboxModule, MatIconModule, MatNativeDateModule, MatCardModule, MatFormFieldModule, MatSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule
  ]
})

export class SharedMaterialModule {
}
