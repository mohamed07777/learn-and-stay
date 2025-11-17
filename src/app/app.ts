// import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms'

import { ChangeDetectionStrategy, Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed for pipes, etc.
import { FormsModule } from '@angular/forms'; // <-- ADDED: Required for [(ngModel)]

// Mock data for the website content
interface University {
  name: string;
  location: string;
  description: string;
  duration: string;
  tuitionFee: string;
  eligibility: string;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  
  // protected readonly title = signal('learnAndStay');
  // FormGroupName
  myForm!: FormGroup;
  
  // // State Signals
  // activeSection = signal<'home' | 'about' | 'destinations' | 'hostel' | 'admission' | 'gallery' | 'contact'>('home');
  // activeCountry = signal<'georgia' | 'russia'>('georgia');
  // isMobileMenuOpen = signal(false);
  
  // // Form State Signals
  // leadForm = {
  //   name: '',
  //   country: '',
  //   whatsapp: '',
  //   email: '',
  //   interestedCountry: '',
  // };
  // contactForm = {
  //   name: '',
  //   email: '',
  //   message: '',
  // };
  
  // formMessage = signal('');
  // inquiryMessage = signal('');

  // // Computed Values
  // currentYear = computed(() => new Date().getFullYear());
  // formMessageClass = computed(() => this.formMessage().includes('Success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700');
  // inquiryMessageClass = computed(() => this.inquiryMessage().includes('Success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700');

  // // Static Data
  // sections = signal([
  //   { name: 'home', names: 'Home' },
  //   { name: 'about', names: 'About Us' },
  //   { name: 'destinations', names: 'Study Destinations' },
  //   { name: 'hostel', names: 'Hostel' },
  //   { name: 'admission', names: 'Admission' },
  //   { name: 'gallery', names: 'Gallery' },
  //   { name: 'contact', names: 'Contact' },
  // ]);

  // keyHighlights: Feature[] = [
  //   { icon: '💯', title: '100% Admission Support', description: 'Complete end-to-end guidance from application to enrollment.' },
  //   { icon: '🎓', title: 'MCI / NMC Approved', description: 'Study in universities recognized by the National Medical Commission (India).' },
  //   { icon: '🏠', title: 'Separate Hostel Facility', description: 'Safe, secure, and separate accommodation for boys and girls.' },
  //   { icon: '🍽️', title: 'Indian & Halal Food', description: 'Guaranteed access to familiar and culturally appropriate meals.' },
  // ];

  // georgiaUniversities: University[] = [
  //   { name: 'Tbilisi State Medical University', location: 'Tbilisi, Georgia', description: 'A leading public university known for its high-quality medical education and European standards.', duration: '6 Years', tuitionFee: 'USD 6,000/year', eligibility: '50% PCB in 12th, NEET Qualified' },
  //   { name: 'European University', location: 'Tbilisi, Georgia', description: 'Modern institution with state-of-the-art facilities and a strong focus on clinical practice.', duration: '6 Years', tuitionFee: 'USD 5,500/year', eligibility: '50% PCB in 12th, NEET Qualified' },
  // ];

  // russiaUniversities: University[] = [
  //   { name: 'Sechenov First Moscow State Medical University', location: 'Moscow, Russia', description: 'Russia\'s oldest and most prestigious medical school, globally recognized.', duration: '6 Years', tuitionFee: 'USD 7,500/year', eligibility: '50% PCB in 12th, NEET Qualified' },
  //   { name: 'Kazan Federal University', location: 'Kazan, Russia', description: 'A highly reputed university offering diverse courses in English medium for international students.', duration: '6 Years', tuitionFee: 'USD 5,800/year', eligibility: '50% PCB in 12th, NEET Qualified' },
  // ];

  // hostelFacilities: string[] = [
  //   '24x7 Security & CCTV Monitoring',
  //   'High-Speed Wi-Fi Access',
  //   'In-House Laundry Services',
  //   'Dedicated Study Rooms & Library',
  //   'Comfortable, Furnished Rooms (2/3 sharing)',
  //   'Easy Commute/Transport to Campus',
  //   'Full-time 24x7 Warden/Caretaker'
  // ];

  // studentTestimonials = [
  //   { name: 'Ahmed Khan', country: 'Pakistan', university: 'Tbilisi State MU', quote: 'The support for Halal food was a huge relief. The hostel is clean, safe, and close to the university.' },
  //   { name: 'Priya Sharma', country: 'India', university: 'Kazan Federal U', quote: 'The visa process was seamless, and the airport pickup made my arrival stress-free. Highly recommend Amazement Co.!' },
  //   { name: 'Lebo M.', country: 'South Africa', university: 'European U', quote: 'Quality education at an affordable price. The team is always there for guidance, especially during my first year.' },
  // ];

  // admissionSteps = [
  //   { title: 'Submit Application', description: 'Fill out our simple online form with your academic details and documents.' },
  //   { title: 'Offer Letter from University', description: 'Receive your conditional acceptance letter within 7-10 working days.' },
  //   { title: 'Visa Processing', description: 'We manage all documentation and embassy procedures for your student visa.' },
  //   { title: 'Travel & Airport Pickup', description: 'Book your flight, and our local team will meet you directly at the airport.' },
  //   { title: 'Hostel Allocation', description: 'Settle into your pre-booked, safe, and comfortable separate hostel room.' },
  //   { title: 'Orientation Program', description: 'Attend a program covering academics, safety, local laws, and city tours.' },
  // ];
  
  // galleryImages = [
  //   { src: 'https://placehold.co/300x200/22c55e/ffffff?text=Hostel+Life', alt: 'Daily life in the student hostel' },
  //   { src: 'https://placehold.co/300x200/ef4444/ffffff?text=City+Tours', alt: 'Students enjoying city tours' },
  //   { src: 'https://placehold.co/300x200/3b82f6/ffffff?text=Airport+Arrival', alt: 'Student airport arrival and pickup' },
  //   { src: 'https://placehold.co/300x200/f59e0b/ffffff?text=Food+Served', alt: 'Indian/Halal food served in the mess' },
  // ];

  // // Methods
  // setActiveSection(section: 'home' | 'about' | 'destinations' | 'hostel' | 'admission' | 'gallery' | 'contact'): void {
  //   this.activeSection.set(section);
  //   // Smooth scroll to the top of the main content area for better UX
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }

  // openCounselingLink(): void {
  //   // In a real app, this would open a calendar or scheduling link (e.g., Calendly)
  //   // Note: The original alert() call is safe to keep here as it's not a user-facing error message, 
  //   // but in a production environment, this should be replaced by a custom modal/toast.
  //   console.log('Counseling Call Feature: Opens a booking link. (Mock Action)'); 
  // }

  // applicationForm() {
  //     this.myForm = new FormGroup({
  //     name: new FormControl('', Validators.required),
  //     country: new FormControl('', Validators.required),
  //     whatsapp:new FormControl('', Validators.required),
  //     email: new FormControl('', [Validators.required]),
  //     intersted_country: new FormControl('', Validators.required)
  // });
  // }

  // onSubmit() {
  //   if (this.myForm.valid) {
  //     console.log('Form Submitted!', this.myForm.value);
  //     // Perform actions with form data
  //   } else {
  //     console.log('Form is invalid.');
  //   }
  // }

  // submitLeadForm(event: Event): void {
  //   event.preventDefault();
  //   if (this.leadForm.name && this.leadForm.email && this.leadForm.whatsapp && this.leadForm.country && this.leadForm.interestedCountry) {
  //     // In a real application, data would be sent to a backend API (e.g., CRM or Firestore)
  //     console.log('Lead Submitted:', this.leadForm);
  //     this.formMessage.set('Success! Thank you for your interest. We will contact you within 24 hours.');
  //     // Reset form after submission
  //     this.leadForm = { name: '', country: '', whatsapp: '', email: '', interestedCountry: '' };
  //   } else {
  //     this.formMessage.set('Error: Please fill out all required fields.');
  //   }
  // }

  // submitInquiryForm(event: Event): void {
  //   event.preventDefault();
  //   if (this.contactForm.name && this.contactForm.email && this.contactForm.message) {
  //     // In a real application, data would be sent to an email service
  //     console.log('Inquiry Submitted:', this.contactForm);
  //     this.inquiryMessage.set('Success! Your inquiry has been sent. We aim to reply within one business day.');
  //     // Reset form after submission
  //     this.contactForm = { name: '', email: '', message: '' };
  //   } else {
  //     this.inquiryMessage.set('Error: Please fill out all required fields.');
  //   }
  // }
   // State Signals
  activeSection = signal<'home' | 'about' | 'destinations' | 'hostel' | 'admission' | 'gallery' | 'contact'>('home');
  activeCountry = signal<'georgia' | 'russia'>('georgia');
  isMobileMenuOpen = signal(false);
  
  // Form State Signals
  leadForm = {
    name: '',
    country: '',
    whatsapp: '',
    email: '',
    interestedCountry: '',
  };
  contactForm = {
    name: '',
    email: '',
    message: '',
  };
  
  formMessage = signal('');
  inquiryMessage = signal('');

  // Computed Values
  currentYear = computed(() => new Date().getFullYear());
  formMessageClass = computed(() => this.formMessage().includes('Success') ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger');
  inquiryMessageClass = computed(() => this.inquiryMessage().includes('Success') ? 'bg-success-subtle text-success' : 'bg-danger-subtle text-danger');

  // Static Data
  sections = signal([
    // { id: 1, names: 'Home' },
    // { id: 2, names: 'About Us' },
    // { id: 3, names: 'Study Destinations' },
    // { id: 4, names: 'Hostel' },
    // { id: 5, names: 'Admission' },
    // { id: 6, names: 'Gallery' },
    // { id: 7, names: 'Contact' },
     { id: 'home', name: 'Home' },
    { id: 'about', name: 'About Us' },
    { id: 'destinations', name: 'Study Destinations' },
    { id: 'hostel', name: 'Hostel' },
    { id: 'admission', name: 'Admission' },
    { id: 'gallery', name: 'Gallery' },
    { id: 'contact', name: 'Contact' },
  ]);

  keyHighlights: Feature[] = [
    { icon: '💯', title: '100% Admission Support', description: 'Complete end-to-end guidance from application to enrollment.' },
    { icon: '🎓', title: 'MCI / NMC Approved', description: 'Study in universities recognized by the National Medical Commission (India).' },
    { icon: '🏠', title: 'Separate Hostel Facility', description: 'Safe, secure, and separate accommodation for boys and girls.' },
    { icon: '🍽️', title: 'Indian & Halal Food', description: 'Guaranteed access to familiar and culturally appropriate meals.' },
  ];

  georgiaUniversities: University[] = [
    { name: 'Tbilisi State Medical University', location: 'Tbilisi, Georgia', description: 'A leading public university known for its high-quality medical education and European standards.', duration: '6 Years', tuitionFee: 'USD 6,000/year', eligibility: '50% PCB in 12th, NEET Qualified' },
    { name: 'European University', location: 'Tbilisi, Georgia', description: 'Modern institution with state-of-the-art facilities and a strong focus on clinical practice.', duration: '6 Years', tuitionFee: 'USD 5,500/year', eligibility: '50% PCB in 12th, NEET Qualified' },
  ];

  russiaUniversities: University[] = [
    { name: 'Sechenov First Moscow State Medical University', location: 'Moscow, Russia', description: 'Russia\'s oldest and most prestigious medical school, globally recognized.', duration: '6 Years', tuitionFee: 'USD 7,500/year', eligibility: '50% PCB in 12th, NEET Qualified' },
    { name: 'Kazan Federal University', location: 'Kazan, Russia', description: 'A highly reputed university offering diverse courses in English medium for international students.', duration: '6 Years', tuitionFee: 'USD 5,800/year', eligibility: '50% PCB in 12th, NEET Qualified' },
  ];

  hostelFacilities: string[] = [
    '24x7 Security & CCTV Monitoring',
    'High-Speed Wi-Fi Access',
    'In-House Laundry Services',
    'Dedicated Study Rooms & Library',
    'Comfortable, Furnished Rooms (2/3 sharing)',
    'Easy Commute/Transport to Campus',
    'Full-time 24x7 Warden/Caretaker'
  ];

  studentTestimonials = [
    { name: 'Ahmed Khan', country: 'Pakistan', university: 'Tbilisi State MU', quote: 'The support for Halal food was a huge relief. The hostel is clean, safe, and close to the university.' },
    { name: 'Priya Sharma', country: 'India', university: 'Kazan Federal U', quote: 'The visa process was seamless, and the airport pickup made my arrival stress-free. Highly recommend Amazement Co.!' },
    { name: 'Lebo M.', country: 'South Africa', university: 'European U', quote: 'Quality education at an affordable price. The team is always there for guidance, especially during my first year.' },
  ];

  admissionSteps = [
    { title: 'Submit Application', description: 'Fill out our simple online form with your academic details and documents.' },
    { title: 'Offer Letter from University', description: 'Receive your conditional acceptance letter within 7-10 working days.' },
    { title: 'Visa Processing', description: 'We manage all documentation and embassy procedures for your student visa.' },
    { title: 'Travel & Airport Pickup', description: 'Book your flight, and our local team will meet you directly at the airport.' },
    { title: 'Hostel Allocation', description: 'Settle into your pre-booked, safe, and comfortable separate hostel room.' },
    { title: 'Orientation Program', description: 'Attend a program covering academics, safety, local laws, and city tours.' },
  ];
  
  galleryImages = [
    { src: 'https://placehold.co/300x200/22c55e/ffffff?text=Hostel+Life', alt: 'Daily life in the student hostel' },
    { src: 'https://placehold.co/300x200/ef4444/ffffff?text=City+Tours', alt: 'Students enjoying city tours' },
    { src: 'https://placehold.co/300x200/3b82f6/ffffff?text=Airport+Arrival', alt: 'Student airport arrival and pickup' },
    { src: 'https://placehold.co/300x200/f59e0b/ffffff?text=Food+Served', alt: 'Indian/Halal food served in the mess' },
  ];

  // Methods : 'home' | 'about' | 'destinations' | 'hostel' | 'admission' | 'gallery' | 'contact'
  setActiveSection(section:any): void {
    console.log(section.id);
    this.activeSection.set(section.id);
    // Smooth scroll to the top of the main content area for better UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openCounselingLink(): void {
    console.log('Counseling Call Feature: Opens a booking link. (Mock Action)'); 
  }

  submitLeadForm(event: Event): void {
    event.preventDefault();
    if (this.leadForm.name && this.leadForm.email && this.leadForm.whatsapp && this.leadForm.country && this.leadForm.interestedCountry) {
      console.log('Lead Submitted:', this.leadForm);
      this.formMessage.set('Success! Thank you for your interest. We will contact you within 24 hours.');
      this.leadForm = { name: '', country: '', whatsapp: '', email: '', interestedCountry: '' };
    } else {
      this.formMessage.set('Error: Please fill out all required fields.');
    }
  }

  submitInquiryForm(event: Event): void {
    event.preventDefault();
    if (this.contactForm.name && this.contactForm.email && this.contactForm.message) {
      console.log('Inquiry Submitted:', this.contactForm);
      this.inquiryMessage.set('Success! Your inquiry has been sent. We aim to reply within one business day.');
      this.contactForm = { name: '', email: '', message: '' };
    } else {
      this.inquiryMessage.set('Error: Please fill out all required fields.');
    }
  }








}
