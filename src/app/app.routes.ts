import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from "./frontoffice/src/app/landing/landing.component";
import { RecipeComponent } from "./frontoffice/src/app/recipe/recipe.component";
import { LoginToDeleteAccountComponent } from "./frontoffice/src/app/login-to-delete-account/login-to-delete-account.component";
import { DeleteAccountComponent } from "./frontoffice/src/app/delete-account/delete-account.component";
import { ForgetPasswordComponent } from "./frontoffice/src/app/forget-password/forget-password.component";
import { ResetPasswordComponent } from "./frontoffice/src/app/reset-password/reset-password.component";
import { TokenPasswordComponent } from "./frontoffice/src/app/token-password/token-password.component";
import { PrivacyPolicyComponent } from './frontoffice/src/app/privacy-policy/privacy-policy.component';
import { TermsOfUsageComponent } from './frontoffice/src/app/terms-of-usage/terms-of-usage.component';
import { AccComponent } from './frontoffice/src/app/acc/acc.component';
import { AddComponent } from './frontoffice/src/app/add/add.component';
import { SignUpComponent } from './frontoffice/src/app/sign-up/sign-up.component';
import { SignInComponent } from './frontoffice/src/app/sign-in/sign-in.component';
import { SuggComponent } from './frontoffice/src/app/sugg/sugg.component';


const routes: Routes = [

  { path: '', redirectTo: 'waitlist', pathMatch: 'full' },

  { path: 'waitlist', component: LandingComponent, title: "Ukla" },

  { path: 'recette', component: RecipeComponent, title: "recette" },
  { path: 'deleteAccount', component: LoginToDeleteAccountComponent, title: "deleteAccount" },
  { path: 'deleteAccountConfirmation', component: DeleteAccountComponent, title: "deleteAccountConfirmation" },
  { path: 'forgetPassword', component: ForgetPasswordComponent, title: "forgetPassword" },
  { path: 'resetPassword/:token', component: ResetPasswordComponent, title: "resetPassword" },
  { path: 'verifiedTokenPassword', component: TokenPasswordComponent, title: "verifiedTokenPassword" },
  { path: 'privacyPolicy', component: PrivacyPolicyComponent, title: "Privacy policy" },
  { path: 'termsOfUsage', component: TermsOfUsageComponent, title: "Terms of usage" },
  { path: 'acc', component: AccComponent },
  { path: 'add', component: AddComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'sugg', component: SuggComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
