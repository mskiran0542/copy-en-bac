import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ComponentsComponent } from './components/components.component';
import { CompletionComponent } from './components/completion/completion.component';
import { ProgressComponent } from './components/progress/progress.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsComponent } from './components/details/details.component';
import { ContactComponent } from './components/details/contact/contact.component';
// import { ShippingComponent } from './components/details/shipping/shipping.component';
import { LandingComponent } from './components/landing/landing.component';
import { ReviewComponent } from './components/review/review.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {BaccnService} from './service/baccn.service';
import { AllowNumberDirective } from "./validator";
import { AllowPhoneNumberDirective } from './phonevalidators';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComponentsComponent,
    CompletionComponent,
    ProgressComponent,
    FooterComponent,
    DetailsComponent,
    ContactComponent,
    LandingComponent,
    ReviewComponent, 
    AllowNumberDirective,
    AllowPhoneNumberDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
  providers: [BaccnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
