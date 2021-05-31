import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InfoPage } from './info.page';

describe('InfoPage', () => {
  let component: InfoPage;
  let fixture: ComponentFixture<InfoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoPage],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
