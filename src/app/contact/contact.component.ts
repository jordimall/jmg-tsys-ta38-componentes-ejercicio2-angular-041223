import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { FormNewContactComponent } from './form-new-contact/form-new-contact.component';
import { AllContactComponent } from "./all-contact/all-contact.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    imports: [FormNewContactComponent, AllContactComponent]
})
export class ContactComponent {
  contacts: Contact[] = [];

  addContact = (contact: Contact): void => {
    this.contacts.push(contact);
  };
}
