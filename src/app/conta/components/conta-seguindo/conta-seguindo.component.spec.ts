import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaSeguindoComponent } from './conta-seguindo.component';

describe('ContaSeguindoComponent', () => {
  let component: ContaSeguindoComponent;
  let fixture: ComponentFixture<ContaSeguindoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaSeguindoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContaSeguindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
