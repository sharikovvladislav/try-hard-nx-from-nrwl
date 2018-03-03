import { GoodsCategories } from './goods-categories.interfaces';
import { GoodsCategoriesAction } from './goods-categories.actions';

export function goodsCategoriesReducer(state: GoodsCategories, action: GoodsCategoriesAction): GoodsCategories {
  switch (action.type) {
    case 'DATA_LOADED': {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
}
