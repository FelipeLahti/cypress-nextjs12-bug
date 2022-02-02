import * as React from 'react'
import { mount } from '@cypress/react'
import { Button } from './Button';
import * as hook from './useRandomHook'

it('Button', () => {
  mount(<Button/>);
  cy.contains('Test button')
})

it('Button with stub', () => {
  cy.stub(hook, 'useRandomHook').returns("stub")
  mount(<Button/>);
  cy.contains('stub')
})
