import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupdateComponent } from './supdate.component';

describe('SupdateComponent', () => {
  let component: SupdateComponent;
  let fixture: ComponentFixture<SupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
