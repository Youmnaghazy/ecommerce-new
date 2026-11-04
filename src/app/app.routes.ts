import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'freshCart : Home',
  },
  {
    path: 'brands',
    loadComponent: () => import('./features/brands/brands.component').then((m) => m.BrandsComponent),
    title: 'freshCart : Brands',
  },
  {
    path: 'categories',
    loadComponent: () =>
      import('./features/categories/categories.component').then((m) => m.CategoriesComponent),
    title: 'freshCart : categories',
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/cart/cart.component').then((m) => m.CartComponent),
    title: 'freshCart : cart',
  },
  {
    path: 'change-pass',
    loadComponent: () =>
      import('./features/change-pass/change-pass.component').then((m) => m.ChangePassComponent),
    title: 'freshCart : Change Password',
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./features/checkout/checkout.component').then((m) => m.CheckoutComponent),
    title: 'freshCart : checkout',
  },
  {
    path: 'forget-pass',
    loadComponent: () =>
      import('./features/forget-pass/forget-pass.component').then((m) => m.ForgetPassComponent),
    title: 'freshCart : forget-pass',
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login.component').then((m) => m.LoginComponent),
    title: 'freshCart : login',
  },
  {
    path: 'orders',
    loadComponent: () => import('./features/orders/orders.component').then((m) => m.OrdersComponent),
    title: 'freshCart : orders',
  },
  {
    path: 'payment',
    loadComponent: () =>
      import('./features/payment/payment.component').then((m) => m.PaymentComponent),
    title: 'freshCart : payment',
  },
  {
    path: 'product-details/:id',
    loadComponent: () =>
      import('./features/product-details/product-details.component').then((m) => m.ProductDetailsComponent),
    title: 'freshCart : productDetails',
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/register/register.component').then((m) => m.RegisterComponent),
    title: 'freshCart : register',
  },
  {
    path: 'shop',
    loadComponent: () => import('./features/shop/shop.component').then((m) => m.ShopComponent),
    title: 'freshCart : shop',
  },
  {
    path: 'wishlist',
    loadComponent: () =>
      import('./features/wishlist/wishlist.component').then((m) => m.WishlistComponent),
    title: 'freshCart : wishlist',
  },
];
