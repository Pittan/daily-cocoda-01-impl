import { Component, HostBinding, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModeSelectionDialogComponent } from './mode-selection-dialog/mode-selection-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {

  imageListStyle: 1 | 2 = 1

  @HostBinding('class') colorClass = 'color-1'

  constructor(private dialog: MatDialog) {

  }

  ngOnInit() {

  }

  config() {
    const dialogRef = this.dialog.open(ModeSelectionDialogComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      if (res.style) {
        this.imageListStyle = res.style;
      }
      if (res.color) {
        this.colorClass = `color-${res.color}`;
      }
    });
  }

}
