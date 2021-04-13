import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TributeComponent } from './tribute.component';

describe('TributeComponent', () => {
  let component: TributeComponent;
  let fixture: ComponentFixture<TributeComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TributeComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(TributeComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the main element (User Story 1)', () => {
    const main = compiled.querySelector('#main');
    expect(main).toBeDefined('missing the main element');
    // if main is root element for component, top level should be the ng-version
    expect(main.parentElement.getAttribute('ng-version')).toBeDefined(
      'main element does not contain all other elements'
    );
  });

  it('should have an element with id of title (User Story 2)', () => {
    const title = compiled.querySelector('#title');
    expect(title).toBeDefined('missing the title element');
  });

  it('should have an img-div element (User Story 3)', () => {
    const imgDiv = compiled.querySelector('#img-div');
    expect(imgDiv).toBeDefined('missing img-div element');
  });

  it('should have an image element (User Story 4)', () => {
    const image = compiled.querySelector('#image');
    expect(image).toBeDefined('missing image element');
    expect(image.tagName).toBe('IMG', 'image element is not an img element');
    expect(image.parentElement.getAttribute('id')).toBe(
      'img-div',
      'image element is not within img-div'
    );
  });

  it('should have an img-caption element (User Story 5)', () => {
    const imgCaption = compiled.querySelector('#img-caption');
    expect(imgCaption).toBeDefined('missing img-caption element');
    expect(imgCaption.tagName).toBe(
      'FIGCAPTION',
      'img-caption is not a figcaption'
    );
    expect(imgCaption.parentElement.getAttribute('id')).toBe(
      'img-div',
      'img-caption is not within the img-div element'
    );
  });

  it('should have a tribute-info element (User Story 6)', () => {
    const tributeInfo = compiled.querySelector('#tribute-info');
    expect(tributeInfo).toBeDefined('missing tribute-info element');
  });

  it('should have a tribute-link element (User Story 7)', () => {
    const tributeLink = compiled.querySelector('#tribute-link');
    expect(tributeLink).toBeDefined('missing tribute-link element');
  });
});
