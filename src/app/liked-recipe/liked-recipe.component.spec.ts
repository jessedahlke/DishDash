import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedRecipeComponent } from './liked-recipe.component';

describe('LikedRecipeComponent', () => {
  let component: LikedRecipeComponent;
  let fixture: ComponentFixture<LikedRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikedRecipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikedRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
