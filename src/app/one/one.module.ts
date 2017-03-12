import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { OneRoutingModule } from './one-routing.module';
import { HomeComponent } from './home/home.component';
import { PostsService } from './services/posts.service';
import { PostsEffectsService } from './effects/posts-effects.service';

@NgModule({
  imports: [
    CommonModule,
    OneRoutingModule,
    HttpModule,
    StoreModule,
    EffectsModule.run(PostsEffectsService)
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    PostsService
  ]
})
export class OneModule {
  constructor() {
    console.log('OneModule instantiated.');
  }
}
