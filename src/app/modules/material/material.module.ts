import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule,
         MatInputModule,
         MatCheckboxModule,
         MatRadioModule,
         MatSlideToggleModule,
         MatIconModule,
         MatIconRegistry,
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
         MatProgressSpinnerModule,
         MatProgressBarModule,
         MatDialogModule,
         MatTooltipModule,
         MatSnackBarModule

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
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule

];

@NgModule({
  imports: [
    CommonModule,
    ...MATERIAL // Operateur spread transformant un array en item list
  ],
  exports: MATERIAL, // Rendre Material disponible pour tous les autres modules de l'application
  declarations: [],
  providers: [ MatIconRegistry ]
})
export class MaterialModule { }
