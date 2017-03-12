import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { TwoRoutingModule } from './two-routing.module';
import { HomeComponent } from './home/home.component';
import { TodosService } from './services/todos.service';
import { TodosEffectsService } from './effects/todos-effects.service';

@NgModule({
  imports: [
    CommonModule,
    TwoRoutingModule,
    HttpModule,
    StoreModule,
    EffectsModule.run(TodosEffectsService)
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    TodosService
  ]
})
export class TwoModule {
  constructor() {
    console.log('TwoModule instantiated.');
  }
}
