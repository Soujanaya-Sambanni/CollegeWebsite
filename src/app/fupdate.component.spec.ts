import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FupdateComponent } from './fupdate.component';

describe('FupdateComponent', () => {
  let component: FupdateComponent;
  let fixture: ComponentFixture<FupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
