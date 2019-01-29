import React from 'react';
import Login from './Login';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Login', () => {

  it('renders the login page without crashing', () => {
    const wrapper = shallow(<Login />);
  })
});
