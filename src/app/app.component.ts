
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  bandName = 'The Karvaan';

  members = [
  {
    name: 'Pritish',
    role: 'Vocalist And Pianist',
    image: 'assets/pritish.png'
  },
  {
    name: 'Antriksh',
    role: 'Vocalist And Guitarist',
    image: 'assets/antriksh.png'
  },
  {
    name: 'Nidhi',
    role: 'Female Vocalist',
    image: 'assets/nidhi.jpeg'
  }
];

  genres = [
    {
      title: 'Bollywood',
      icon: '🎬',
      description: 'From timeless classics to the latest Bollywood hits.'
    },
    {
      title: 'Love',
      icon: '❤️',
      description: 'Soulful melodies and romantic songs that connect.'
    },
    {
      title: 'Rock',
      icon: '🎸',
      description: 'Powerful guitars, energy and unforgettable live moments.'
    },
    {
      title: 'Sufi',
      icon: '🌙',
      description: 'Mystical melodies with a contemporary live-band feel.'
    },
    {
      title: 'English',
      icon: '🎤',
      description: 'Popular English songs across generations and genres.'
    }
  ];

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  openYouTube(): void {
    window.open(
      'https://youtube.com/@the.karvaanco?si=eN6pzzTR5ijOAKON',
      '_blank'
    );
  }

  openInstagram(): void {
    window.open(
      'https://www.instagram.com/the.karvaan?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==',
      '_blank'
    );
  }

  bookBand(): void {
    this.scrollToSection('contact');
  }

  openWhatsApp(): void {
  const phoneNumber = '918824165918'; // country code + number, without +
  const message = 'Hello, I would like to know more about your band.';

  const whatsappUrl =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, '_blank');
}
}

