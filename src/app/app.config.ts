
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { LandingComponent } from './frontoffice/src/app/landing/landing.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgFor } from "@angular/common";
import { RecipeComponent } from './frontoffice/src/app/recipe/recipe.component';
import { ScreenshotComponent } from './frontoffice/src/app/screenshot/screenshot.component';
import { StringsManager } from "./frontoffice/src/app/strings_manager";
import { PhoneCarouselComponent } from './frontoffice/src/app/phone-carousel/phone-carousel.component';
import { DeleteAccountComponent } from './frontoffice/src/app/delete-account/delete-account.component';
import { ForgetPasswordComponent } from './frontoffice/src/app/forget-password/forget-password.component';
import { TokenPasswordComponent } from './frontoffice/src/app/token-password/token-password.component';
import { ResetPasswordComponent } from './frontoffice/src/app/reset-password/reset-password.component';
import { LoginToDeleteAccountComponent } from './frontoffice/src/app/login-to-delete-account/login-to-delete-account.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderComponent } from './frontoffice/src/app/loader/loader.component';
import { PrivacyPolicyComponent } from './frontoffice/src/app/privacy-policy/privacy-policy.component';
import { TermsOfUsageComponent } from './frontoffice/src/app/terms-of-usage/terms-of-usage.component';
import { VideoComponent } from './frontoffice/src/app/video/video.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Feature1Component } from './frontoffice/src/app/feature1/feature1.component';
import { Feature2Component } from './frontoffice/src/app/feature2/feature2.component';
import { Feature3Component } from './frontoffice/src/app/feature3/feature3.component';
import { ClientComponent } from './frontoffice/src/app/client/client.component';
import { SignUpComponent } from './frontoffice/src/app/sign-up/sign-up.component';
import { SignInComponent } from './frontoffice/src/app/sign-in/sign-in.component';
import { AccComponent } from './frontoffice/src/app/acc/acc.component';
import { AddComponent } from './frontoffice/src/app/add/add.component';
import { SuggComponent } from './frontoffice/src/app/sugg/sugg.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    RecipeComponent,
    ScreenshotComponent,
    PhoneCarouselComponent,
    DeleteAccountComponent,
    ForgetPasswordComponent,
    TokenPasswordComponent,
    LoginToDeleteAccountComponent,
    ResetPasswordComponent,
    LoaderComponent,
    PrivacyPolicyComponent,
    TermsOfUsageComponent,
    VideoComponent,
    Feature1Component,
    Feature2Component,
    Feature3Component,
    ClientComponent,
    SignUpComponent,
    SignInComponent,
    AccComponent,
    AddComponent,
    SuggComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,

    NgFor,
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [StringsManager],
  bootstrap: [AppComponent]
})
export class AppModule { }



