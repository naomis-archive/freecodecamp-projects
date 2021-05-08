import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SurveyComponent } from './survey.component';

fdescribe('SurveyComponent', () => {
  let component: SurveyComponent;
  let fixture: ComponentFixture<SurveyComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SurveyComponent],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();
    fixture = TestBed.createComponent(SurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  beforeEach(() => {});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct properties', () => {
    expect(component.submitted).toBeFalse();
    expect(component.data).toBeDefined();
    expect(component.surveyForm).toBeDefined();
  })

  it('should have the #title element (User Story 1)', () => {
    const title = compiled.querySelector('#title');
    expect(title).toBeTruthy();
    expect(title.innerText.trim()).toBe(`Join Becca Lyria's Adventures`);
  });

  it('should have the #description element (User Story 2)', () => {
    const desc = compiled.querySelector('#description');
    expect(desc).toBeTruthy();
    expect(desc.innerText.trim()).toBe(
      'Do you want to join our adventure team? Fill out this form below!'
    );
  });

  it('should have the #survey-form element (User Story 3)', () => {
    const form = compiled.querySelector('#survey-form');
    expect(form).toBeTruthy();
    expect(form.tagName).toBe('FORM');
  });

  it('should have the #name element (User Story 4)', () => {
    const form = compiled.querySelector('#survey-form');
    const name = form.querySelector('#name');
    expect(name).toBeTruthy();
    expect(name.tagName).toBe('INPUT');
    expect(name.required).toBeTrue();
  });

  it('should have the #email element (User Story 5)', () => {
    const form = compiled.querySelector('#survey-form');
    const email = form.querySelector('#email');
    expect(email).toBeTruthy();
    expect(email.tagName).toBe('INPUT');
    expect(email.required).toBeTrue();
  });

  it('should expect the #email element to take an email (User Story 6)', () => {
    const form = compiled.querySelector('#survey-form');
    const email = form.querySelector('#email');
    expect(email.getAttribute('type')).toBe('email');
  });

  it('should have the #number element (User Story 7)', () => {
    const form = compiled.querySelector('#survey-form');
    const number = form.querySelector('#number');
    expect(number).toBeTruthy();
    expect(number.tagName).toBe('INPUT');
  });

  it('should expect the #number element to take a number (User Story 8)', () => {
    const form = compiled.querySelector('#survey-form');
    const number = form.querySelector('#number');
    expect(number.getAttribute('type')).toBe('number');
  });

  it('should have a min and max on the #number element', () => {
    const form = compiled.querySelector('#survey-form');
    const number = form.querySelector('#number');
    expect(number.getAttribute('min')).toBe('0');
    expect(number.getAttribute('max')).toBe('100');
  });

  it('should have labels for the name, email, and number inputs (User Story 10)', () => {
    const form = compiled.querySelector('#survey-form');
    const name = form.querySelector('#name-label');
    expect(name).toBeTruthy();
    expect(name.getAttribute('for')).toBe('name');
    const email = form.querySelector('#email-label');
    expect(email).toBeTruthy();
    expect(email.getAttribute('for')).toBe('email');
    const number = form.querySelector('#number-label');
    expect(number).toBeTruthy();
    expect(number.getAttribute('for')).toBe('number');
  });

  it('should have placeholders in name, email, and number inputs (User Story 11)', () => {
    const form = compiled.querySelector('#survey-form');
    const name = form.querySelector('#name');
    expect(name.getAttribute('placeholder')).toBe('Rosalia Nightsong');
    const email = form.querySelector('#email');
    expect(email.getAttribute('placeholder')).toBe(
      'Rosalia.Nightsong@beccalyria.com'
    );
    const number = form.querySelector('#number');
    expect(number.getAttribute('placeholder')).toBe('1-100');
  });

  it('should have a #dropdown element (User Story 12)', () => {
    const form = compiled.querySelector('#survey-form');
    const dropdown = form.querySelector('#dropdown');
    expect(dropdown).toBeTruthy();
    expect(dropdown.tagName).toBe('SELECT');
  });

  it('should have radio buttons (User Story 13)', () => {
    const form = compiled.querySelector('#survey-form');
    const radio = form.querySelectorAll('input[type="radio"]');
    expect(radio.length).toBe(3);
  });

  it('should have checkboxes (User Story 14)', () => {
    const form = compiled.querySelector('#survey-form');
    const boxes = form.querySelectorAll('input[type="checkbox"]');
    expect(boxes.length).toBe(2);
  });

  it('should have a textarea (User Story 15)', () => {
    const form = compiled.querySelector('#survey-form');
    const text = form.querySelector('textarea');
    expect(text).toBeTruthy();
  });

  it('should have a #submit element (User Story 16)', () => {
    const form = compiled.querySelector('#survey-form');
    const button = form.querySelector('#submit');
    expect(button).toBeTruthy();
    expect(button.tagName).toBe('BUTTON');
    expect(button.getAttribute('type')).toBe('submit');
  });

  it('should show the letter after submitting', () => {
    component.submitted = true;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    const letter = compiled.querySelector('.letter');
    expect(letter).toBeTruthy();
  })
});
