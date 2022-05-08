import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedtieComponent } from './redtie.component';

describe('RedtieComponent', () => {
  let component: RedtieComponent;
  let fixture: ComponentFixture<RedtieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedtieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedtieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
