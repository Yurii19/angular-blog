import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { HeadComponent } from './head/head.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [HeadComponent, BreadcrumbsComponent,],
  imports: [CommonModule, MatMenuModule],
  exports: [MatMenuModule],
})
export class SharedModule {}
