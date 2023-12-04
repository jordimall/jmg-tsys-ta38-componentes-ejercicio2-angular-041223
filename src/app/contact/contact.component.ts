import { Component } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contacts: Contact[] = [];
}
