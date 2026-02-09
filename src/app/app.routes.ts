import { Routes } from '@angular/router';
import {ContractListComponent} from './pages/contract-list/contract-list.component';
import {ContractUpdateComponent} from './pages/contract-update/contract-update.component';
import {ContractViewComponent} from './pages/contract-view/contract-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'contracts', pathMatch: 'full' },

  { path: 'contracts', component: ContractListComponent },
  { path: 'contract/new', component: ContractUpdateComponent },
  { path: 'contract/:id', component: ContractViewComponent },
];

