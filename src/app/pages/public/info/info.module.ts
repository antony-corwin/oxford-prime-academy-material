import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InfoPage } from './info.page';
import { Path } from '@core/structs';

@NgModule({
  declarations: [InfoPage],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: InfoPage,
        data: {
          title: 'Info',
          description: '',
          robots: 'index, follow',
        },
        children: [
          {
            path: '',
            redirectTo: Path.AboutUs,
            pathMatch: 'full',
          },
          {
            path: Path.AboutUs,
            loadChildren: () =>
              import('@app/pages/public/info/about-us/about-us.module').then(
                (m) => m.AboutUsModule,
              ),
          },
          {
            path: Path.Curriculum,
            loadChildren: () =>
              import('@app/pages/public/info/curriculum/curriculum.module').then(
                (m) => m.CurriculumModule,
              ),
          },
          {
            path: Path.Admissions,
            loadChildren: () =>
              import(
                '@app/pages/public/info/admissions/admissions.module'
                ).then((m) => m.AdmissionsModule),
          },
          {
            path: Path.Faq,
            loadChildren: () =>
              import(
                '@app/pages/public/info/faq/faq.module'
                ).then((m) => m.FaqModule),
          },
        ],
      },
    ]),
  ],
})
export class InfoModule {
}
