import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OnlinePage } from './online.page';

describe('OnlinePage', () => {
  let component: OnlinePage;
  let fixture: ComponentFixture<OnlinePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnlinePage],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
