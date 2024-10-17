import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { ProductModule } from './app/components/product/product.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './app/components/products/products.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './app/interceptors/token.interceptor';
import { PaymentLinkDetailModule } from './app/components/payment-link-detail/payment-link-detail.module';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { SignInModule } from './app/components/sign-in/sign-in.module';
import { provideToastr, ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SignInModule,
        ProductModule,
        ProductsModule,
        PaymentLinkDetailModule,
        HttpClientModule,
        ToastrModule.forRoot()
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [
        provideAnimations(),
        provideToastr(),
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
