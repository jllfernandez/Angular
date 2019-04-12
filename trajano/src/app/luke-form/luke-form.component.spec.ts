import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LukeFormComponent } from './luke-form.component';

describe('LukeFormComponent', () => {
  let component: LukeFormComponent;
  let fixture: ComponentFixture<LukeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LukeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LukeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
