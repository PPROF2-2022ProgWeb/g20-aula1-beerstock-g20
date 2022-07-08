import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresPageComponent } from './proveedores-page.component';

describe('ProveedoresPageComponent', () => {
  let component: ProveedoresPageComponent;
  let fixture: ComponentFixture<ProveedoresPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedoresPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedoresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
