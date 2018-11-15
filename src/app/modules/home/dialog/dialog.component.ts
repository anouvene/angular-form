import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  /**
   * Injection de services nécessaires pour le dialog
   * @param dialogRef Référence au composant DialogComponent
   * @param data Données passées par le composant ayany utilisé la boîte de dialog (DialogComponent)
   */
  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }
}
