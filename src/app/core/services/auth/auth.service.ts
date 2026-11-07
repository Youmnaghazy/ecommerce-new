import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Service()
export class AuthService {
  private readonly httpClient = inject(HttpClient)
  signUp(formData:object):Observable<any>{
    return this.httpClient.post(`${environment.baseUrl}/api/v1/auth/signup`, formData)
  }
  signIn(formData:object):Observable<any>{
    return this.httpClient.post(`${environment.baseUrl}/api/v1/auth/signin`, formData)
  }
  forgotPass(formData:object):Observable<any>{
    return this.httpClient.post(`${environment.baseUrl}/api/v1/auth/forgotPasswords`, formData)
  }
  verifyResetCode(formData:object):Observable<any>{
    return this.httpClient.post(`${environment.baseUrl}/api/v1/auth/verifyResetCode`, formData)
  }
  changeMyPassword(formData:object):Observable<any>{
    return this.httpClient.put(`${environment.baseUrl}/api/v1/users/changeMyPassword`, formData)
  }
}
