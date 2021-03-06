import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { HeadComponent } from './head/head.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinnerComponent } from './spinner/spinner.component';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeadComponent,
    SpinnerComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatListModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  exports: [
    MatMenuModule,
    HeadComponent,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    SpinnerComponent,
    MatTableModule,TableComponent
  ],
})
export class SharedModule {}
