import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
export const headerInterceptor: HttpInterceptorFn = (req, next) => {
//request
let cookieService=inject(CookieService)
if(req.url.includes('cart')||req.url.includes('orders')|| req.url.includes('reviews')||req.url.includes('wishlist')||req.url.includes('users')||req.url.includes('addresses')){
 if(cookieService.check('token')){
  req=req.clone({
    setHeaders:{
      token:cookieService.get('token')
    }
  })
 }

}

  return next(req)
};
