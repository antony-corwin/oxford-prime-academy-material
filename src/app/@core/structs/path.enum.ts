export enum Path {
  // General containers
  NotFound = "404",

  // Public
  Online = "online",
  Home = "",
  Info = "info",
    // Info children
    AboutUs = "about-us",
    Curriculum = "curriculum",
    Admissions = "admissions",
    Faq = "faq",
    SchoolLife = "school-life",
  Contact = "contact",

  //Private
  Dashboard = "dashboard",
    // Dashboard children
    CMS = 'cms',
    Videos = 'videos',
    Users = 'users',
    School = 'school',
    Billing = 'billing',
    Reports = 'reports',
    Accounting = 'accounting',


  // Auth
  SignIn = "sign-in",
  SignUp = "sign-up",
  ForgotPassword = "forgot-password",
  ForgotPasswordEmailSent = "forgot-password-email-sent",
  PasswordReset = "password-reset",
  PasswordResetFailed = "password-reset-failed",
  PasswordResetSucceeded = "password-reset-succeeded",



  // Settings
  Settings = "settings",
  SettingsAccount = "account",
  SettingsAppearance = "appearance",
  SettingsBilling = "billing",
  SettingsBlockedUsers = "blocked-users",
  SettingsNotifications = "notifications",
  SettingsSecurity = "security",
  SettingsSecurityLog = "security-log",

  // User
  UsersOverview = "overview",
  UsersProfile = ":username",
}
