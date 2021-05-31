import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OnlinePage } from './online.page';

@NgModule({
  declarations: [OnlinePage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: OnlinePage,
        data: {
          title: 'Online',
          description: '',
          robots: 'index, follow',
        },
      },
    ]),
  ],
})
export class OnlineModule {}
