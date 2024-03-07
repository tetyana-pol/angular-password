import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-check',
  standalone: true,
  imports: [],
  templateUrl: './password-check.component.html',
  styleUrl: './password-check.component.css',
})
export class PasswordCheckComponent {
  @Input() password: string = '';

  get getPasswordStrength() {
    if (this.password.length === 0) {
      return ['gray', 'gray', 'gray'];
    }
    if (this.password.length < 8) {
      return ['red', 'red', 'red'];
    }

    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasDigits = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

    if (hasLetters && hasDigits && hasSymbols) {
      return ['green', 'green', 'green'];
    }
    if (
      (hasLetters && hasDigits) ||
      (hasLetters && hasSymbols) ||
      (hasDigits && hasSymbols)
    ) {
      return ['yellow', 'yellow', 'gray'];
    }

    return ['red', 'gray', 'gray'];
  }
}
