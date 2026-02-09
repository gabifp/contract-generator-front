import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Address} from '../../models/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private http = inject(HttpClient);

  getByCep(cep: string): Observable<Address> {
    return this.http.get<Address>(
      `http://localhost:8080/api/address/${cep}`
    );
  }
}





