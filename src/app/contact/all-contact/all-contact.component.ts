import { Component, Input } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-all-contact',
  standalone: true,
  imports: [],
  templateUrl: './all-contact.component.html',
  styleUrl: './all-contact.component.css'
})
export class AllContactComponent {
  @Input() listContact: any | Contact;
}
