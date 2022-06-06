import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TransferService } from './services/transfer.service';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    TransferService
  ]
})
export class SharedModule { }
