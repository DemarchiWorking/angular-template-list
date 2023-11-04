import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacaoPostComponent } from './publicacao-post.component';

describe('PublicacaoPostComponent', () => {
  let component: PublicacaoPostComponent;
  let fixture: ComponentFixture<PublicacaoPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacaoPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacaoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
