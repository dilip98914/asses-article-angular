import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ArticleComponent } from './article.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MyDialogModule} from '../my-dialog/my-dialog.module';
import { MyDialog } from '../my-dialog/my-dialog.component';

@NgModule({
  declarations: [
    ArticleComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MyDialogModule
  ],
  providers: [],
  exports: [ArticleComponent],
  entryComponents:[MyDialog]
})
export class ArticleModule { }
