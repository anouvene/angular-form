import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule,
         MatInputModule,
         MatCheckboxModule,
         MatRadioModule,
         MatSlideToggleModule,
         MatIconModule,
         MatSelectModule,
         MatSliderModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatAutocompleteModule,
         MatButtonModule,
         MatMenuModule,
         MatSidenavModule,
         MatToolbarModule,
         MatListModule,
         MatGridListModule,
         MatCardModule,
         MatStepperModule,
         MatTabsModule,
         MatExpansionModule,
         MatChipsModule,
         MatTooltipModule
} from '@angular/material';

const MATERIAL = [
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatIconModule,
  MatSelectModule,
  MatSliderModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  MatChipsModule,
  MatTooltipModule
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
