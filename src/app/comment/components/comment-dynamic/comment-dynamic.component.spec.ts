import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDynamicComponent } from './comment-dynamic.component';

describe('CommentDynamicComponent', () => {
    let component: CommentDynamicComponent;
    let fixture: ComponentFixture<CommentDynamicComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CommentDynamicComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CommentDynamicComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
