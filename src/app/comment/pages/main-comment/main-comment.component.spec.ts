import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCommentComponent } from './main-comment.component';

describe('MainCommentComponent', () => {
  let component: MainCommentComponent;
  let fixture: ComponentFixture<MainCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
