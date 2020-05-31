import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TablajugadoresComponent } from './tablajugadores.component';

describe('TablajugadoresComponent', () => {
  let component: TablajugadoresComponent;
  let fixture: ComponentFixture<TablajugadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablajugadoresComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TablajugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
