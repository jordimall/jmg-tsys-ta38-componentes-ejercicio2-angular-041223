import { Component, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact';

import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-form-new-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-new-contact.component.html',
  styleUrl: './form-new-contact.component.css',
})
export class FormNewContactComponent {
  private VALIDATION: number = 5;
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
    result: new FormControl('', [
      Validators.required,
      Validators.pattern(`^${this.VALIDATION}$`),
    ]),
  });

  @Output() addContact = new EventEmitter();

  public crearContact = (): void => {
    this.addContact.emit(
      new Contact(
        this.validarCampos(this.contactForm.value.name),
        this.validarCampos(this.contactForm.value.email),
        this.validarCampos(this.contactForm.value.message)
      )
    );
    this.contactForm.reset();
  };

  private validarCampos = (value: any): string => {
    let valueDefect: string = '';
    if (value != null && value != undefined) {
      return value;
    }
    return valueDefect;
  };
}
