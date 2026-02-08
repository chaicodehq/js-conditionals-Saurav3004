/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  const hasUppercase = /[A-Z]/;
  const hasLowercase = /[a-z]/;
  const hasDigit     = /[0-9]/;
  const hasSpecial   = /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/;

  if(password == ""){
    return "weak"
  }

  if(typeof password !== "string"){
    return "weak"
  }

  if(password.length >= 8 && hasUppercase.test(password) && hasLowercase.test(password) && hasDigit.test(password) && hasSpecial.test(password)){
    return "very strong"
  }else if(password.length >= 8 && hasUppercase.test(password) && hasLowercase.test(password) && hasSpecial.test(password)){
    return "strong"
  }else if(password.length >= 8 && hasUppercase.test(password) && hasLowercase.test(password) && hasDigit.test(password)){
    return "strong"
  }else if(password.length >= 8 && hasUppercase.test(password) && hasLowercase.test(password)){
    return "medium"
  }else if(hasSpecial.test(password) && hasLowercase.test(password) && hasDigit.test(password)){
    return "medium"
  }else if(password.length >= 8  && hasLowercase.test(password)){
    return "medium"
  }else if(password.length < 8 && hasDigit.test(password)){
    return "weak"
  }else if(password.length < 8 && hasLowercase.test(password)){
    return "weak"
  }
}

