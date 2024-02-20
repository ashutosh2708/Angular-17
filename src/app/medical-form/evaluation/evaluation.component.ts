import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-evaluation',
  standalone: true,
  imports: [
    MatFormFieldModule,
    CommonModule,
    NgSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.scss',
})
export class EvaluationComponent {
  medicalForm: any;
  selectedGender: any;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();

    // Assume this is the data fetched from API
    const formData = {
      name: 'John Doe',
      age: 30,
      gender: 'male',
      address: '123 Main St',
      diagnosis: 'Headach',
      contact: '1234567890',
      email: 'john@example.com',
      personalHistory: 'None',
      familyHistory: 'None',
      painScore: '5',
    };

    // Use patchValue to update only specific fields
    // this.medicalForm.patchValue({
    //   name: formData.name,
    //   age: formData.age,
    //   gender: formData.gender,
    //   address: formData.address,
    //   diagnosis: formData.diagnosis,
    //   conatact: formData.contact,
    //   email: formData.email,
    // });

    // Use setValue to update the entire form
    this.medicalForm.setValue(formData);

    this.medicalForm.get('gender').valueChanges.subscribe((value: string) => {
      this.selectedGender = value;
      console.log('SelectedGender ', this.selectedGender);
    });
  }

  initializeForm() {
    this.medicalForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/^.{1,50}$/)]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      diagnosis: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      personalHistory: [''],
      familyHistory: [''],
      painScore: [''],
    });
  }
  submitForm() {
    if (this.medicalForm.valid) {
      console.log('Form is submitted', this.medicalForm.value);
    }
  }
  // Event Binding
  submit() {
    console.log('Submitted');
  }
  // Event filtering
  handleSubmit(event: any) {
    console.log('Eventttt', event);
    if (event.ctrlKey) {
      console.log('ontrol key is press');
    } else {
      console.log('Normal');
    }
  }

  onGenderChange(event: any) {
    console.log('onGenderChange', event);
    console.log('onGenderChange target', event.target);
    console.log('onGenderChange value', event.target.value);

    this.selectedGender = event.target.value;
  }

  // Patch Values & Set Values
}
