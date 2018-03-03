import { TestBed, async } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';
import { GoodsCategoriesEffects } from './goods-categories.effects';

describe('GoodsCategoriesEffects', () => {
  let actions;
  let effects: GoodsCategoriesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [GoodsCategoriesEffects, DataPersistence, provideMockActions(() => actions)]
    });

    effects = TestBed.get(GoodsCategoriesEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: { type: 'LOAD_DATA' } });
      expect(effects.loadData).toBeObservable(hot('-a-|', { a: { type: 'DATA_LOADED', payload: {} } }));
    });
  });
});
