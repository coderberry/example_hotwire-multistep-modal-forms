import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["modal"]
  static values = {
    currentStep: { type: Number, default: 1 },
    totalSteps: { type: Number, default: 1 }
  }

  connect() {
    console.log('MultistepModalController connected');

    // Set the title to the current step
    this.modalTarget.label = `${this.modalTarget.title}: Step ${this.currentStepValue} of ${this.totalStepsValue}`;

    // Prevent the dialog from closing when the user clicks on the overlay
    this.modalTarget.addEventListener('sl-request-close', event => {
      if (event.detail.source == 'overlay') {
        event.preventDefault();
      }
    })
  }

  open() {
    console.log('MultistepModalController open')
    this.modalTarget.show();
  }

  close() {
    console.log('MultistepModalController close')
    this.modalTarget.hide();
  }
}
