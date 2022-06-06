import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { DetailComponent } from './components/detail/detail.component';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './components/main/main.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { PokemonService } from './services/pokemon.service';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
  declarations: [
    TableComponent,
    DetailComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule.forRoot(),
    NzGridModule,
    NzTableModule,
    NzDividerModule,
    NzCardModule,
    NzIconModule
  ],
  exports: [
    MainComponent
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonModule { }
