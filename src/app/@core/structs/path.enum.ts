export enum Path {
  // General containers
  Online = 'online',
  Home = '',
  Info = 'info',
  SchoolLife = 'school-life',
  Contact = 'contact',
  NotFound = '404',

  // Info children
  AboutUs = 'about-us',
  Curriculum = 'curriculum',
  Admissions = 'admissions',
  Faq = 'faq',

  // Auth
  SignIn = 'sign-in',
  SignUp = 'sign-up',
  ForgotPassword = 'forgot-password',
  ForgotPasswordEmailSent = 'forgot-password-email-sent',
  PasswordReset = 'password-reset',
  PasswordResetFailed = 'password-reset-failed',
  PasswordResetSucceeded = 'password-reset-succeeded',

  // App base url
  Dashboard = 'dashboard',

  // Settings
  Settings = 'settings',
  SettingsAccount = 'account',
  SettingsAppearance = 'appearance',
  SettingsBilling = 'billing',
  SettingsBlockedUsers = 'blocked-users',
  SettingsNotifications = 'notifications',
  SettingsSecurity = 'security',
  SettingsSecurityLog = 'security-log',

  // User
  Users = 'users',
  UsersOverview = 'overview',
  UsersProfile = ':username',
}
