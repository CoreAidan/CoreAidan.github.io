import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  toEmail: string = "aidanmelendez@gmail.com";

  constructor(private fb: FormBuilder) { 
    this.contactForm = this.fb.group({
      name: [null],
      email: [null],
      message: [null],
    });
  }

  onSubmit(){
    if (this.contactForm.invalid) {
      this.contactForm.get('name')?.markAsTouched();
      this.contactForm.get('email')?.markAsTouched();
      this.contactForm.get('message')?.markAsTouched();
      return;
    }

    let message: { name: string, email: string, message: string} = Object.assign({}, this.contactForm.value);

    var mail = document.createElement("a");
    mail.href = `mailto:${this.toEmail}?subject=Full Stack Developer opportunity&body=${message}`;
    mail.click();
  }

  ngOnInit(): void {
  }

}
