import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileBaseComponent } from './profile-base/profile-base.component';
import { ImageListComponent } from './image-list/image-list.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { ModeSelectionDialogComponent } from './mode-selection-dialog/mode-selection-dialog.component';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ProfileBaseComponent,
    ImageListComponent,
    ModeSelectionDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxMasonryModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModeSelectionDialogComponent]
})
export class AppModule { }
