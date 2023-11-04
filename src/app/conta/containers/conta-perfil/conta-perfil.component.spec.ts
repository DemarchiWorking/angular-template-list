import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaPerfilComponent } from './conta-perfil.component';

describe('ContaPerfilComponent', () => {
  let component: ContaPerfilComponent;
  let fixture: ComponentFixture<ContaPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
