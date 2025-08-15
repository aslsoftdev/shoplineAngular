import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogGridComponent } from './pages/blog-grid/blog-grid.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { FaqComponent } from './pages/faq/faq.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { LoginComponent } from './pages/login/login.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ShopLeftComponent } from './pages/shop-left/shop-left.component';
import { StoreComponent } from './pages/store/store.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog-grid', component: BlogGridComponent },
    { path: 'brands', component: BrandsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'invoice', component: InvoiceComponent },
    { path: 'login', component: LoginComponent },
    { path: 'my-account', component: MyAccountComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'shop-left', component: ShopLeftComponent },
    { path: 'store', component: StoreComponent },
    { path: '**', redirectTo: '/home' }
];
