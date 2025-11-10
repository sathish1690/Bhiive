import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchenginemarketingComponent } from './searchenginemarketing.component';

describe('SearchenginemarketingComponent', () => {
  let component: SearchenginemarketingComponent;
  let fixture: ComponentFixture<SearchenginemarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchenginemarketingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchenginemarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
