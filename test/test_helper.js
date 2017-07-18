// Setup testing environment to run like a browser in CLI
import jsdom from 'jsdom';
import jquery from 'jquery';

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window);

// build render component helper the should render a given react class

// build helper for a simulate event


// setup chai-jquery
