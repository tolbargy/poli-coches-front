import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SuiSidebarModule } from 'ngx-semantic/modules/sidebar/'

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SuiSidebarModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class CoreModule { }
