import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CurriculumPage } from './curriculum.page';

@NgModule({
  declarations: [CurriculumPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CurriculumPage,
        data: {
          title: 'Curriculum',
          description: '',
          robots: 'index, follow',
        },
      },
    ]),
  ],
})
export class CurriculumModule {}
