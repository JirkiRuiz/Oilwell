import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsCatalogComponent } from './materials-catalog.component';

describe('MaterialsCatalogComponent', () => {
  let component: MaterialsCatalogComponent;
  let fixture: ComponentFixture<MaterialsCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialsCatalogComponent]
    });
    fixture = TestBed.createComponent(MaterialsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
