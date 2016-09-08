/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { TitleComponent } from './title.component';

describe('Component: Title', () => {
  it('should create an instance', () => {
    let component = new TitleComponent();
    expect(component).toBeTruthy();
  });
});
