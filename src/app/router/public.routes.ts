import { Routes } from '@angular/router';
import { NoAuthGuard } from '@app/@core/guards';
import { Path } from '@app/@core/structs';

export const PUBLIC_ROUTES: Routes = [
  {
    path: Path.Online,
    loadChildren: () =>
      import('@app/pages/public/online/online.module').then((m) => m.OnlineModule),
  },
  {
    path: Path.Home,
    loadChildren: () =>
      import('@app/pages/public/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: Path.Info,
    loadChildren: () =>
      import('@app/pages/public/info/info.module').then((m) => m.InfoModule),
  },
  ////////////////////////////////////
  {
    path: Path.Contact,
    loadChildren: () =>
      import('@app/pages/public/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: '',
    canActivate: [NoAuthGuard],
    children: [
      {
        path: Path.SignIn,
        loadChildren: () =>
          import('@app/pages/public/auth/sign-in/sign-in.module').then(
            (m) => m.SignInModule,
          ),
      },
      {
        path: Path.SignUp,
        loadChildren: () =>
          import('@app/pages/public/auth/sign-up/sign-up.module').then(
            (m) => m.SignUpModule,
          ),
      },
      {
        path: Path.ForgotPassword,
        loadChildren: () =>
          import(
            '@app/pages/public/auth/forgot-password/forgot-password.module'
          ).then((m) => m.ForgotPasswordModule),
      },
      {
        path: Path.ForgotPassword,
        loadChildren: () =>
          import(
            '@app/pages/public/auth/forgot-password-email-sent/forgot-password-email-sent.module'
          ).then((m) => m.ForgotPasswordEmailSentModule),
      },
      {
        path: Path.PasswordReset,
        loadChildren: () =>
          import(
            '@app/pages/public/auth/password-reset/password-reset.module'
          ).then((m) => m.PasswordResetModule),
      },
      {
        path: Path.PasswordResetSucceeded,
        loadChildren: () =>
          import(
            '@app/pages/public/auth/password-reset-succeeded/password-reset-succeeded.module'
          ).then((m) => m.PasswordResetSucceededModule),
      },
      {
        path: Path.PasswordResetFailed,
        loadChildren: () =>
          import(
            '@app/pages/public/auth/password-reset-failed/password-reset-failed.module'
          ).then((m) => m.PasswordResetFailedModule),
      },
    ],
  },
];
