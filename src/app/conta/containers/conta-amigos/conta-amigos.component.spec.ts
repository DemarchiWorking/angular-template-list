import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaAmigosComponent } from './conta-amigos.component';

describe('ContaAmigosComponent', () => {
  let component: ContaAmigosComponent;
  let fixture: ComponentFixture<ContaAmigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaAmigosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContaAmigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
