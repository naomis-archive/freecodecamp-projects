import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
})
export class SurveyComponent implements OnInit {
  public surveyForm = this.formBuilder.group({
    name: '',
    email: '',
    adventureCount: 0,
    role: '',
    experience: '',
    pledge: false,
    donate: false,
  });
  public data: DataInt = {
    name: '',
    email: '',
    adventureCount: 0,
    role: '',
    experience: '',
    pledge: false,
    donate: false,
  };
  public submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const data: DataInt = this.surveyForm.value;

    if (!data.name) {
      return alert('Please provide your name!');
    }
    if (!data.email) {
      return alert('Please provide your email!');
    }
    if (!data.pledge) {
      return alert('Please pledge your loyalty to our guild.');
    }
    if (!data.role) {
      return alert('Please select a role!')
    }
    if (!data.experience) {
      return alert('Please indicate your experience level!')
    }

    this.submitted = true;
    this.data = data;
  }

  onReset(): void {
    this.submitted = false;
  }
}

interface DataInt {
  name: string;
  email: string;
  adventureCount: number;
  role: string;
  experience: string;
  pledge: boolean;
  donate: boolean;
}
