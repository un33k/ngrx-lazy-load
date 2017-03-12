import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { UsersService } from './services/users.service';
import { UsersEffectsService } from './effects/users-effects.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    StoreModule,
    EffectsModule.run(UsersEffectsService)
  ],
  declarations: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        UsersService
      ]
    };
  }

  constructor() {
    console.log('SharedModule instantiated.');
  }
}
