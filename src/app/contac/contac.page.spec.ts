import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContacPage } from './contac.page';

describe('ContacPage', () => {
  let component: ContacPage;
  let fixture: ComponentFixture<ContacPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
