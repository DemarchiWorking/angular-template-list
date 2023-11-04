import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaSeguidoresComponent } from './conta-seguidores.component';

describe('ContaSeguidoresComponent', () => {
  let component: ContaSeguidoresComponent;
  let fixture: ComponentFixture<ContaSeguidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaSeguidoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContaSeguidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
