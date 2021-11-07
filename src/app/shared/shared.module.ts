import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { HeadComponent } from './head/head.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [BreadcrumbsComponent,HeadComponent],
  imports: [CommonModule, RouterModule,MatMenuModule,MatListModule],
  exports: [MatMenuModule,HeadComponent],
})
export class SharedModule {}
