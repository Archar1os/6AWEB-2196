import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  imports: [CommonModule],
  templateUrl: './partners.html',
  styleUrl: './partners.css',
})
export class Partners {
  partners = [
    {
      name: 'Microsoft',
      industry: 'Technology',
      trademark: 'MSFT',
      level: 'Platinum',
      website: 'https://microsoft.com',
      icon: '🔷',
      since: '2018'
    },
    {
      name: 'Apple, Inc.',
      industry: 'Technology',
      trademark: 'AAPL',
      level: 'Gold',
      website: 'https://apple.com',
      icon: '🍎',
      since: '2019'
    },
    {
      name: 'Amazon',
      industry: 'E-commerce & Cloud',
      trademark: 'AMZN',
      level: 'Silver',
      website: 'https://amazon.com',
      icon: '📦',
      since: '2020'
    },
    {
      name: 'Google, Inc.',
      industry: 'Technology',
      trademark: 'GOOGL',
      level: 'Bronze',
      website: 'https://google.com',
      icon: '🔍',
      since: '2021'
    }
  ];
}
