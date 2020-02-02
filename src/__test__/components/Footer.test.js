import React from 'react';
import { mount, shallow } from 'enzyme';
import Footer from '../../components/Footer';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('<Footer />', () => {
  test('Rendering Footer component ', () => {
    const footer = shallow(
      <ProviderMock>
        <Footer />
      </ProviderMock>,
    );
    expect(footer.length).toEqual(1);
  });
  test('Rendering title', () => {
    const footer = mount(
      <ProviderMock>
        <Footer />
      </ProviderMock>,
    );
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});
