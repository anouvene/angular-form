import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule,
         MatInputModule,
         MatCheckboxModule,
         MatRadioModule,
         MatSlideToggleModule,
         MatCardModule,
         MatButtonModule } from '@angular/material';

const MATERIAL = [
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatCardModule,
  MatButtonModule
];

@NgModule({
  imports: [
    CommonModule,
    ...MATERIAL // Operateur spread transformant un array en item list
  ],
  exports: MATERIAL, // Rendre Material disponible pour tous les autres modules de l'application
  declarations: []
})
export class MaterialModule { }
