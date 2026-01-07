import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
showLearnMore = false;
  giftMessage = '';
  contactMessage = '';

  // Event Binding: Toggle Learn More section
  toggleLearnMore() {
    this.showLearnMore = !this.showLearnMore;
  }

  // Event Binding: Get Free Gift
  getFreeGift() {
    this.giftMessage = '🎉 Congratulations! You have received a FREE Conference E-Book! Check your email for download instructions.';

    // Auto-dismiss after 5 seconds
    setTimeout(() => {
      if (this.giftMessage) {
        this.giftMessage = '';
      }
    }, 5000);
  }

  // Event Binding: Dismiss gift message
  dismissMessage() {
    this.giftMessage = '';
  }

  // Event Binding: Contact Us
  contactUs() {
    this.contactMessage = '📧 Thank you! Our team will contact you within 24 hours.';

    // Clear message after 3 seconds
    setTimeout(() => {
      this.contactMessage = '';
    }, 3000);
  }
}
