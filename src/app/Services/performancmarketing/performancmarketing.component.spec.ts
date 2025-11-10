import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformancmarketingComponent } from './performancmarketing.component';

describe('PerformancmarketingComponent', () => {
  let component: PerformancmarketingComponent;
  let fixture: ComponentFixture<PerformancmarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformancmarketingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformancmarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
