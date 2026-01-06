import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestProjectComponent } from './newest-project.component';

describe('NewestProjectComponent', () => {
  let component: NewestProjectComponent;
  let fixture: ComponentFixture<NewestProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewestProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewestProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
