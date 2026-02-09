import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {AddressService} from '../../services/address/address.service';
import {finalize} from 'rxjs';
import {AlertUtil} from '../../utils/alert.util';

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

  isLoadingCep = false;

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
        },
        error: () => {
          AlertUtil.error(
            'CEP não encontrado',
            'Verifique se o CEP foi digitado corretamente.');
        }
      });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log(this.form.value);
  }
}
