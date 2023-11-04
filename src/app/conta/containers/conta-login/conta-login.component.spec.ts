import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaLoginComponent } from './conta-login.component';

describe('ContaLoginComponent', () => {
  let component: ContaLoginComponent;
  let fixture: ComponentFixture<ContaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
