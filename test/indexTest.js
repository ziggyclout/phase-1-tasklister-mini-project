const chai = require('chai');
global.expect = chai.expect;

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const babel = require('@babel/core');

// Load HTML content
const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8');

// Transform JavaScript with Babel
const { code: transformedScript } = babel.transformFileSync(
  path.resolve(__dirname, '..', 'src/index.js'),
  { presets: ['@babel/preset-env'] }
);

// Initialize JSDOM
const dom = new JSDOM(html, {
  runScripts: "dangerously",
  resources: "usable"
});

// Inject the JS into the virtual DOM
const scriptEl = dom.window.document.createElement('script');
scriptEl.textContent = transformedScript;
dom.window.document.body.appendChild(scriptEl);

// Expose globals
global.window = dom.window;
global.document = dom.window.document;

// Test suite
describe('Handling form submission', () => {
  let form, input, taskList;

  before(() => {
    form = document.querySelector('#create-task-form');
    input = document.querySelector('#new-task-description');
    taskList = document.querySelector('#tasks');
  });

  it('should add an event to the form and add input to webpage', () => {
    input.value = 'Wash the dishes';

    // Create submit event with proper options
    const event = new dom.window.Event('submit', { bubbles: true, cancelable: true });
    form.dispatchEvent(event);

    // Check that the task appears in the list
    expect(taskList.textContent).to.include('Wash the dishes');
  });
});
