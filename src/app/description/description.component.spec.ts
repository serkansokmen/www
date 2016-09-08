/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { DescriptionComponent } from './description.component';

describe('Component: Description', () => {
  it('should create an instance', () => {
    let component = new DescriptionComponent();
    expect(component).toBeTruthy();
  });
});
