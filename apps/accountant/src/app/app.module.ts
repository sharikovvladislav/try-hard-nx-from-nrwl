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

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    StoreModule.forFeature('goodsCategories', goodsCategoriesReducer, { initialState: goodsCategoriesInitialState }),
    EffectsModule.forFeature([GoodsCategoriesEffects])
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [GoodsCategoriesEffects]
})
export class AppModule {}
