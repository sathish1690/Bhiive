import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediamarketingComponent } from './socialmediamarketing.component';

describe('SocialmediamarketingComponent', () => {
  let component: SocialmediamarketingComponent;
  let fixture: ComponentFixture<SocialmediamarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialmediamarketingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialmediamarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
