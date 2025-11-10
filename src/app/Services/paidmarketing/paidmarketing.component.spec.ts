import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidmarketingComponent } from './paidmarketing.component';

describe('PaidmarketingComponent', () => {
  let component: PaidmarketingComponent;
  let fixture: ComponentFixture<PaidmarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaidmarketingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaidmarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
