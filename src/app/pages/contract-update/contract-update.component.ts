import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {AddressService} from '../../services/address/address.service';
import {finalize} from 'rxjs';
import {AlertUtil} from '../../utils/alert.util';
import {ContractService} from '../../services/contract/contract.service';
import {Router} from '@angular/router';
import {ContractRequest} from '../../models/contract-request.model';

@Component({
  selector: 'contract-update',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contract-update.component.html',
  styleUrl: './contract-update.component.scss'
})
export class ContractUpdateComponent {

  private fb = inject(FormBuilder);
  private addressService = inject(AddressService);
  private contractService = inject(ContractService);
  private router = inject(Router);


  @ViewChild('number') number!: ElementRef<HTMLInputElement>;

  isLoadingCep = false;
  isLoading = false;

  form = this.fb.group({
    nomeLocatario: ['', Validators.required],
    cep: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
    street: ['', Validators.required],
    number: ['', Validators.required],
    complement: [''],
    city: ['', Validators.required],
    state: ['', Validators.required],
    valorImovel: ['', Validators.required]
  });

  searchCep() {
    const cep = this.form.controls.cep.value;

    if (!cep || this.form.controls.cep.invalid) {
      this.form.controls.cep.markAsTouched();
      return;
    }

    this.isLoadingCep = true;

    this.addressService.getByCep(cep)
      .pipe(finalize(() => this.isLoadingCep = false))
      .subscribe({
        next: address => {
          this.form.patchValue({
            street: address.street,
            city: address.city,
            state: address.state
          });

          setTimeout(() => {
            this.number.nativeElement.focus();
          });
        },
        error: () => {
          AlertUtil.error(
            'CEP não encontrado',
            'Verifique se o CEP foi digitado corretamente.');
        }
      });
  }

  generateContract() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formValue = this.form.getRawValue();

    const payload: ContractRequest = {
      templateId: 1,
      fields: {
        nomeLocatario: formValue.nomeLocatario ?? '',
        enderecoImovel: `${formValue.street}, ${formValue.number} - ${formValue.city}/${formValue.state}`,
        valorImovel: formValue.valorImovel ?? ''
      }
    };

    this.isLoading = true;

    this.contractService.generateContract(payload)
      .subscribe({
        next: contract => {
          this.router.navigate(
            ['/contract/view'],
            { state: { contract } }
          );
        },
        error: () => {
          this.isLoading = false;
          AlertUtil.error(
            'Erro ao gerar contrato',
            'Tente novamente em alguns instantes.'
          );
        }
      });
  }

}
