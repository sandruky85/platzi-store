import actions from '../../actions';
import ProductMock from '../../__mocks__/ProductMock';

describe('Testing actions', () => {
  test('Add to card action ', () => {
    const payload = ProductMock;
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  });

  test('Remove from card action  ', () => {
    const payload = ProductMock;
    const expected = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    expect(actions.removeFromCart(payload)).toEqual(expected);

  });

});
