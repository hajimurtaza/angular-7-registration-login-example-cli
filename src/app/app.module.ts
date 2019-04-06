import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_components';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './ui/home/home.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';;
import { UiModule } from './ui/ui.module'

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing,
        NgbModule
,
        UiModule    ],
    declarations: [
        AppComponent,
        AlertComponent,
        LoginComponent,
        RegisterComponent ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        // fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }