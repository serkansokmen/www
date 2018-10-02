import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SokmenComponent } from './sokmen.component';

describe('SokmenComponent', () => {
  let component: SokmenComponent;
  let fixture: ComponentFixture<SokmenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SokmenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SokmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
