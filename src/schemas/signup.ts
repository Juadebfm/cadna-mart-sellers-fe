/**
 * Email validation
 */
export interface EmailValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateEmail = (email: string): EmailValidationResult => {
  if (!email) {
    return { isValid: false, error: "Email is required" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return { isValid: false, error: "Please enter a valid email address" };
  }

  return { isValid: true };
};

/**
 * Details validation
 */
export interface SignupDetailsData {
  firstName: string;
  lastName: string;
  countryCode: string;
  phoneNumber: string;
  businessName: string;
  businessRegistrationNumber: string;
  businessType: string;
  businessAddress: string;
  city: string;
  state: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
}

export interface DetailsValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof SignupDetailsData, string>>;
}

export const validateSignupDetails = (
  details: Partial<SignupDetailsData>,
): DetailsValidationResult => {
  const errors: Partial<Record<keyof SignupDetailsData, string>> = {};

  // Personal information validation
  if (!details.firstName?.trim()) {
    errors.firstName = "First name is required";
  }

  if (!details.lastName?.trim()) {
    errors.lastName = "Last name is required";
  }

  if (!details.countryCode?.trim()) {
    errors.countryCode = "Country code is required";
  }

  if (!details.phoneNumber?.trim()) {
    errors.phoneNumber = "Phone number is required";
  } else if (!/^[0-9+\-\s()]+$/.test(details.phoneNumber)) {
    errors.phoneNumber = "Please enter a valid phone number";
  }

  // Business information validation
  if (!details.businessName?.trim()) {
    errors.businessName = "Business name is required";
  }

  if (!details.businessType?.trim()) {
    errors.businessType = "Business type is required";
  }

  if (!details.businessAddress?.trim()) {
    errors.businessAddress = "Business address is required";
  }

  if (!details.city?.trim()) {
    errors.city = "City is required";
  }

  if (!details.state?.trim()) {
    errors.state = "State is required";
  }

  // Bank information validation
  if (!details.bankName?.trim()) {
    errors.bankName = "Bank name is required";
  }

  if (!details.accountName?.trim()) {
    errors.accountName = "Account name is required";
  }

  if (!details.accountNumber?.trim()) {
    errors.accountNumber = "Account number is required";
  } else if (!/^[0-9]+$/.test(details.accountNumber)) {
    errors.accountNumber = "Account number should contain only numbers";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Password validation
 */
export interface PasswordValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface PasswordRules {
  length: boolean;
  number: boolean;
  symbol: boolean;
  space: boolean;
}

export const validatePassword = (password: string): PasswordRules => {
  return {
    length: password.length >= 8,
    number: /[0-9]/.test(password),
    symbol: /[^A-Za-z0-9]/.test(password),
    space: !password.includes(" "),
  };
};

export const validatePasswordMatch = (
  password: string,
  confirmPassword: string,
): PasswordValidationResult => {
  const errors: string[] = [];

  const rules = validatePassword(password);

  if (!rules.length) {
    errors.push("Password must be at least 8 characters long");
  }

  if (!rules.number) {
    errors.push("Password must contain at least one number");
  }

  if (!rules.symbol) {
    errors.push("Password must contain at least one symbol");
  }

  if (!rules.space) {
    errors.push("Password cannot contain spaces");
  }

  if (!confirmPassword) {
    errors.push("Confirm password is required");
  }

  if (password !== confirmPassword) {
    errors.push("Passwords do not match");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Verification code validation
 */
export interface VerificationValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateVerificationCode = (
  code: string,
): VerificationValidationResult => {
  if (!code) {
    return { isValid: false, error: "Verification code is required" };
  }

  if (code.length < 6) {
    return {
      isValid: false,
      error: "Verification code must be at least 6 characters",
    };
  }

  if (!/^[0-9]+$/.test(code)) {
    return {
      isValid: false,
      error: "Verification code should contain only numbers",
    };
  }

  return { isValid: true };
};
