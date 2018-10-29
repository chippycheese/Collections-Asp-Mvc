import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionNewComponent } from './collection-new.component';

describe('CollectionNewComponent', () => {
  let component: CollectionNewComponent;
  let fixture: ComponentFixture<CollectionNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
