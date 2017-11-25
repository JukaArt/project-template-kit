import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import createHistory from 'history/createBrowserHistory';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import renderer from 'react-test-renderer';
import Root from 'Containers/Root';
import AppRouter from 'Containers/AppRouter';

describe('Connected Root', () => {
  const mockStore = configureMockStore();
  let root, store, history, initialItems;

  beforeEach( () => {
    initialItems = ['one'];
		const initialState = {
      items: initialItems,
      num: 0,
		}
    store = mockStore(initialState);
    history = createHistory();
  })

  describe('state provided by the store', () => {
		beforeEach( () => {
      root = shallow(<Provider store={store} history={history}><Root/></Provider>);
    });

    it('should exist', () => {
      expect(root.exists()).toEqual(true);
    });

    it('Should be a structure', () => {
      expect(toJson(root)).toMatchSnapshot();
    })
  })

})
