import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./app/components/product/product.module').then(m => m.ProductModule)
    },
    {
        path: 'products',
        loadChildren: () => import('./app/components/products/products.module').then(m => m.ProductsModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }