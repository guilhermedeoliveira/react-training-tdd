// Setup testing environment to run like a browser in CLI
import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils'
import React from 'react';
import reactDOM from 'react-dom';
import chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

// build render component helper the should render a given react class
function renderComponent(ComponentClass, props, state) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props}/>
    </Provider>
);

  return $(reactDOM.findDOMNode(componentInstance)); // produces HTML
}

// build helper for a simulate event
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
}

// setup chai-jquery
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };
