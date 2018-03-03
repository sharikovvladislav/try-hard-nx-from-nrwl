import { goodsCategoriesReducer } from './goods-categories.reducer';
import { goodsCategoriesInitialState } from './goods-categories.init';
import { GoodsCategories } from './goods-categories.interfaces';
import { DataLoaded } from './goods-categories.actions';

describe('goodsCategoriesReducer', () => {
  it('should work', () => {
    const state: GoodsCategories = {};
    const action: DataLoaded = { type: 'DATA_LOADED', payload: {} };
    const actual = goodsCategoriesReducer(state, action);
    expect(actual).toEqual({});
  });
});
