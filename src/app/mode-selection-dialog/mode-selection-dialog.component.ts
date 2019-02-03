import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-mode-selection-dialog',
  templateUrl: './mode-selection-dialog.component.html',
  styleUrls: ['./mode-selection-dialog.component.styl']
})
export class ModeSelectionDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModeSelectionDialogComponent>) { }

  ngOnInit() {}

  selectColor(index: number) {
    this.dialogRef.close({color: index});
  }

  selectStyle(index: number) {
    this.dialogRef.close({style: index});
  }

  closeDialog() {
    this.dialogRef.close({});
  }

}
