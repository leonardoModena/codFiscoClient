import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodFiscoComponent } from './cod-fisco.component';

describe('CodFiscoComponent', () => {
  let component: CodFiscoComponent;
  let fixture: ComponentFixture<CodFiscoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodFiscoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodFiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
