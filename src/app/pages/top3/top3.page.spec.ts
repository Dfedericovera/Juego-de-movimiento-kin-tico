import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Top3Page } from './top3.page';

describe('Top3Page', () => {
  let component: Top3Page;
  let fixture: ComponentFixture<Top3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Top3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
