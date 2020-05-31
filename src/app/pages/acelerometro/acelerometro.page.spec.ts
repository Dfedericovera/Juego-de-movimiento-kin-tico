import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcelerometroPage } from './acelerometro.page';

describe('AcelerometroPage', () => {
  let component: AcelerometroPage;
  let fixture: ComponentFixture<AcelerometroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcelerometroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcelerometroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
