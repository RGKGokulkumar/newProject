import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListwearhouseComponent } from './listwearhouse.component';

describe('ListwearhouseComponent', () => {
  let component: ListwearhouseComponent;
  let fixture: ComponentFixture<ListwearhouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListwearhouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListwearhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
