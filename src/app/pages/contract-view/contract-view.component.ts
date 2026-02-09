import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';
import {Contract} from '../../models/contract.model';
import {ContractService} from '../../services/contract/contract.service';

@Component({
  selector: 'contract-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contract-view.component.html'
})
export class ContractViewComponent implements OnInit {

  private contractService = inject(ContractService);
  private router = inject(Router);

  contract!: Contract;

  ngOnInit() {
    const contract = this.contractService.getGeneratedContract();

    if (!contract) {
      this.router.navigate(['/contracts/new']);
      return;
    }

    this.contract = contract;
  }

  newContract() {
    this.router.navigate(['/contract/new']);
  }
}
