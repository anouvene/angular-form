import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {

  /**
   * Injection de services nécessaires pour le snackBar
   * @param dialogRef Référence au composant SnackBarComponent
   * @param data Données passées par le composant ayany utilisé la boîte de dialog (DialogComponent)
   */
  constructor(
    private snackBarRef: MatSnackBarRef<SnackBarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) private data: any) { }

  ngOnInit() {
  }

  public closeSnackBar(): void {
    this.snackBarRef.dismiss();
  }


}
