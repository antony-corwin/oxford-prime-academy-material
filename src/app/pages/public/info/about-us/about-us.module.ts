import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutUsPage } from './about-us.page';

@NgModule({
  declarations: [AboutUsPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutUsPage,
        data: {
          title: 'About Us',
          description: '',
          robots: 'index, follow',
        },
      },
    ]),
  ],
})
export class AboutUsModule {}
