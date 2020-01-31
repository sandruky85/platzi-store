import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);

  test('Rendering Footer component ', () => {
    expect(footer.length).toEqual(1);
  });
  test('Rendering title', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});
