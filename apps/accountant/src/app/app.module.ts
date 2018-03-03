import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { goodsCategoriesReducer } from './+state/goods-categories.reducer';
import { goodsCategoriesInitialState } from './+state/goods-categories.init';
import { GoodsCategoriesEffects } from './+state/goods-categories.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    StoreModule.forFeature('goodsCategories', goodsCategoriesReducer, { initialState: goodsCategoriesInitialState }),
    EffectsModule.forFeature([GoodsCategoriesEffects]),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [GoodsCategoriesEffects]
})
export class AppModule {}
