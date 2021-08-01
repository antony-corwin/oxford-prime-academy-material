import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaqPage } from './faq.page';

@NgModule({
  declarations: [FaqPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FaqPage,
        data: {
          title: 'FAQ',
          description: '',
          robots: 'index, follow',
        },
      },
    ]),
  ],
})
export class FaqModule {}
