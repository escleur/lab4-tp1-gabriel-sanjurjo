import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRtComponent } from './listado-rt.component';

describe('ListadoRtComponent', () => {
  let component: ListadoRtComponent;
  let fixture: ComponentFixture<ListadoRtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoRtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoRtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
