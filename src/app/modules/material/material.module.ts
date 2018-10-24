import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

const MATERIAL = [
  MatButtonModule,
  MatCheckboxModule
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
