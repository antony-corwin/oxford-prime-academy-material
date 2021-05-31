import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdmissionsPage } from './admissions.page';

@NgModule({
  declarations: [AdmissionsPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdmissionsPage,
        data: {
          title: 'Admissions',
          description: '',
          robots: 'index, follow',
        },
      },
    ]),
  ],
})
export class AdmissionsModule {}
