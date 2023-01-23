import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

const MaterialComponentModule = [
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
];
@NgModule({
  imports: [MaterialComponentModule],
  exports: [MaterialComponentModule],
})
export class MaterialModule {}
