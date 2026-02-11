import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ContractRequest} from '../../models/contract-request.model';
import {Contract} from '../../models/contract.model'

@Injectable({ providedIn: 'root' })
export class ContractService {

  private http = inject(HttpClient);

  private readonly API_URL = 'http://localhost:8080/api/contracts';

  private generatedContract: Contract | null = null;

  generateContract(payload: ContractRequest): Observable<Contract> {
    return this.http.post<Contract>(
      `${this.API_URL}/generate`,
      payload
    );
  }

  setGeneratedContract(contract: Contract) {
    this.generatedContract = contract;
  }

  getGeneratedContract(): Contract | null {
    return this.generatedContract;
  }

  clear() {
    this.generatedContract = null;
  }
}
