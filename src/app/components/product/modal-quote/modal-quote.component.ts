import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-quote',
  templateUrl: './modal-quote.component.html',
  styleUrl: './modal-quote.component.scss'
})
export class ModalQuoteComponent {
  
  constructor(
    public dialogRef: MatDialogRef<ModalQuoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}
  
  /**
   * Accept quote
  */
  public acceptQuote(): void {
    this.dialogRef.close(true);
  }
}
