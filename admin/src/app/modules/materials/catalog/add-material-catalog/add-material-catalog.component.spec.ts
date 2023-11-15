import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaterialCatalogComponent } from './add-material-catalog.component';

describe('AddMaterialCatalogComponent', () => {
  let component: AddMaterialCatalogComponent;
  let fixture: ComponentFixture<AddMaterialCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMaterialCatalogComponent]
    });
    fixture = TestBed.createComponent(AddMaterialCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
