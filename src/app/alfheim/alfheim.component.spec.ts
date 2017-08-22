import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfheimComponent } from './alfheim.component';

describe('AlfheimComponent', () => {
  let component: AlfheimComponent;
  let fixture: ComponentFixture<AlfheimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlfheimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlfheimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
