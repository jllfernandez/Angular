import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LukeListComponent } from './luke-list.component';

describe('LukeListComponent', () => {
  let component: LukeListComponent;
  let fixture: ComponentFixture<LukeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LukeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LukeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
