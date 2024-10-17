import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './app/components/products/products.component';
import { ProductComponent } from './app/components/product/product.component';
import { PaymentLinkDetailComponent } from './app/components/payment-link-detail/payment-link-detail.component';
import { SignInComponent } from './app/components/sign-in/sign-in.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductsComponent
    },
    {
        path: 'product/:id',
        component: ProductComponent
    },
    {
        path: 'payment-link-detail/:id',
        component: PaymentLinkDetailComponent
    },
    {
        path: 'sign-in',
        component: SignInComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }