import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

fdescribe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let compiled: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a #header element (User Story 1)', () => {
    const header = compiled.querySelector('#header');
    expect(header).toBeTruthy();
    const text = header.querySelector('span');
    expect(text.innerText.trim()).toBe(`Becca's Adventuring Group`);
  });

  it('should have a #header-img element (User Story 2)', () => {
    const header = compiled.querySelector('#header');
    const image = header.querySelector('#header-img');
    expect(image).toBeTruthy();
    expect(image.getAttribute('src')).toMatch(/becca.png/i);
  });

  it('should have a #nav-bar element (User Story 3)', () => {
    const header = compiled.querySelector('#header');
    const nav = header.querySelector('#nav-bar');
    expect(nav).toBeTruthy();
  });

  it('should have 3 .nav-link elements (User Story 4)', () => {
    const nav = compiled.querySelector('#nav-bar');
    const links = nav.querySelectorAll('.nav-link');
    expect(links.length).toEqual(3);
    expect(links[0].innerText.trim()).toBe('About Us');
    expect(links[1].innerText.trim()).toBe('Our Services');
    expect(links[2].innerText.trim()).toBe('Contact Us');
  });

  it('should link .nav-link elements to sections of page (User Story 5)', () => {
    const nav = compiled.querySelector('#nav-bar');
    const links = nav.querySelectorAll('.nav-link');
    expect(links.length).toEqual(3);
    expect(links[0].getAttribute('href')).toBe('#about');
    expect(links[1].getAttribute('href')).toBe('#services');
    expect(links[2].getAttribute('href')).toBe('#contact');
    expect(compiled.querySelector('#about')).toBeTruthy();
    expect(compiled.querySelector('#services')).toBeTruthy();
    expect(compiled.querySelector('#contact')).toBeTruthy();
  });

  it('should have a #video element (User Story 6)', () => {
    const video = compiled.querySelector('#video');
    expect(video).toBeTruthy();
    expect(video.tagName).toBe('IFRAME');
    expect(video.getAttribute('src')).toBe(
      'https://www.youtube.com/embed/JGhlg4JqvQw'
    );
  });

  it('should have a #form element (User Story 7)', () => {
    const form = compiled.querySelector('#form');
    expect(form).toBeTruthy();
    expect(form.tagName).toBe('FORM');
  });

  it('should have an #email element (User Story 8)', () => {
    const form = compiled.querySelector('#form');
    const email = form.querySelector('#email');
    expect(email).toBeTruthy();
    expect(email.tagName).toBe('INPUT');
  });

  it('should have a placeholder in the #email (User Story #9)', () => {
    const email = compiled.querySelector('#email');
    expect(email.placeholder).toBe('beccalyria@beccalyria.com');
  });

  it('should require that #email be an email (User Story 10)', () => {
    const email = compiled.querySelector('#email');
    expect(email.getAttribute('type')).toBe('email');
  });

  it('should have a #submit element (User Story 11)', () => {
    const form = compiled.querySelector('#form');
    const submit = form.querySelector('#submit');
    expect(submit).toBeTruthy();
    expect(submit.tagName).toBe('INPUT');
    expect(submit.getAttribute('type')).toBe('submit');
  });

  it('should have an action on submit (User Story 12)', () => {
    const form = compiled.querySelector('#form');
    expect(form.getAttribute('action')).toBe('https://www.beccalyria.com');
  });

  it('should have a fixed navbar (User Story 12)', () => {
    const header = compiled.querySelector('#header');
    expect(getComputedStyle(header).position).toBe('fixed');
  });

  it('should use CSS flexbox at least once (User Story 15)', () => {
    const nav = compiled.querySelector('#nav-bar');
    expect(getComputedStyle(nav).display).toBe('flex');
  });
});
