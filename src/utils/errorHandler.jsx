import ToastMake from "./toastMaker";

const createError = (message, type) => {
  const errorMessages = {
    "auth/wrong-password":
      "The password is invalid or the user does not have a password.",
    "auth/claims-too-large":
      "The claims payload provided to setCustomUserClaims() exceeds the maximum allowed size of 1000 bytes.",
    "auth/email-already-exists":
      "The provided email is already in use by an existing user. Each user must have a unique email.",
    "auth/id-token-expired": "The provided Firebase ID token is expired.",
    "auth/id-token-revoked": "The Firebase ID token has been revoked.",
    "auth/insufficient-permission":
      "The credential used to initialize the Admin SDK has insufficient permission to access the requested Authentication resource. Refer to Set up a Firebase project for documentation on how to generate a credential with appropriate permissions and use it to authenticate the Admin SDKs.",
    "auth/invalid-argument":
      "An invalid argument was provided to an Authentication method. The error message should contain additional information.",
    "auth/invalid-claims":
      "The custom claim attributes provided to setCustomUserClaims() are invalid.",
    "auth/invalid-creation-time":
      "The creation time must be a valid UTC date string.",
    "auth/invalid-disabled-field":
      "The provided value for the disabled user property is invalid. It must be a boolean.",
    "auth/invalid-display-name":
      "The provided value for the displayName user property is invalid. It must be a non-empty string.",
    "auth/invalid-email-verified":
      "The provided value for the emailVerified user property is invalid. It must be a boolean.",
    "auth/invalid-hash-algorithm":
      "The hash algorithm must match one of the strings in the list of supported algorithms.",
    "auth/invalid-hash-block-size": "The hash block size must be a valid number.",
    "auth/invalid-hash-derived-key-length":
      "The hash derived key length must be a valid number.",
    "auth/invalid-hash-key": "The hash key must a valid byte buffer.",
    "auth/invalid-hash-memory-cost": "The hash memory cost must be a valid number.",
    "auth/invalid-hash-parallelization":
      "The hash parallelization must be a valid number.",
    "auth/invalid-hash-rounds": "The hash rounds must be a valid number.",
    "auth/invalid-hash-salt-separator":
      "The hashing algorithm salt separator field must be a valid byte buffer.",
    "auth/invalid-id-token":
      "The provided ID token is not a valid Firebase ID token.",
    "auth/invalid-last-sign-in-time":
      "The last sign-in time must be a valid UTC date string.",
    "auth/invalid-page-token":
      "The provided next page token in listUsers() is invalid. It must be a valid non-empty string.",
    "auth/invalid-password":
      "The provided value for the password user property is invalid. It must be a string with at least six characters.",
    "auth/invalid-password-hash": "The password hash must be a valid byte buffer.",
    "auth/invalid-password-salt": "The password salt must be a valid byte buffer",
    "auth/invalid-photo-url":
      "The provided value for the photoURL user property is invalid. It must be a string URL.",
    "auth/invalid-provider-data":
      "The providerData must be a valid array of UserInfo objects.",
    "auth/invalid-oauth-responsetype":
      "Only exactly one OAuth responseType should be set to true.",
    "auth/invalid-session-cookie-duration":
      "The session cookie duration must be a valid number in milliseconds between 5 minutes and 2 weeks.",
    "auth/invalid-uid":
      "The provided uid must be a non-empty string with at most 128 characters.",
    "auth/invalid-user-import": "The user record to import is invalid.",
    "auth/maximum-user-count-exceeded":
      "The maximum allowed number of users to import has been exceeded.",
    "auth/missing-hash-algorithm":
      "Importing users with password hashes requires that the hashing algorithm and its parameters be provided.",
    "auth/missing-uid": "A uid identifier is required for the current operation.",
    "auth/missing-oauth-client-secret":
      "The OAuth configuration client secret is required to enable OIDC code flow.",
    "auth/phone-number-already-exists":
      "The provided phoneNumber is already in use by an existing user. Each user must have a unique phoneNumber.",
    "auth/project-not-found":
      "No Firebase project was found for the credential used to initialize the Admin SDKs. Refer to Set up a Firebase project for documentation on how to generate a credential for your project and use it to authenticate the Admin SDKs.",
    "auth/reserved-claims":
      "One or more custom user claims provided to setCustomUserClaims() are reserved. For example, OIDC specific claims such as (sub, iat, iss, exp, aud, auth_time, etc) should not be used as keys for custom claims.",
    "auth/session-cookie-expired":
      "The provided Firebase session cookie is expired.",
    "auth/session-cookie-revoked": "The Firebase session cookie has been revoked.",
    "auth/uid-already-exists":
      "The provided uid is already in use by an existing user. Each user must have a unique uid.",
    "auth/admin-restricted-operation":
      "This operation is restricted to administrators only.",
    "auth/app-not-authorized":
      "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
    "auth/app-not-installed":
      "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
    "auth/captcha-check-failed":
      "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
    "auth/code-expired":
      "The SMS code has expired. Please re-send the verification code to try again.",
    "auth/cordova-not-ready": "Cordova framework is not ready.",
    "auth/cors-unsupported": "This browser is not supported.",
    "auth/credential-already-in-use":
      "This credential is already associated with a different user account.",
    "auth/custom-token-mismatch":
      "The custom token corresponds to a different audience.",
    "auth/requires-recent-login":
      "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
    "auth/dependent-sdk-initialized-before-auth":
      "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
    "auth/dynamic-link-not-activated":
      "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
    "auth/email-change-needs-verification":
      "Multi-factor users must always have a verified email.",
    "auth/email-already-in-use":
      "The email address is already in use by another account.",
    "auth/emulator-config-failed":
      "Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling 'connectAuthEmulator()' sooner.",
    "auth/expired-action-code": "The action code has expired.",
    "auth/cancelled-popup-request":
      "This operation has been cancelled due to another conflicting popup being opened.",
    "auth/internal-error": "An internal AuthError has occurred.",
    "auth/invalid-app-credential":
      "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
    "auth/invalid-app-id":
      "The mobile app identifier is not registed for the current project.",
    "auth/invalid-user-token":
      "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
    "auth/invalid-auth-event": "An internal AuthError has occurred.",
    "auth/invalid-verification-code":
      "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
    "auth/invalid-continue-uri":
      "The continue URL provided in the request is invalid.",
    "auth/invalid-cordova-configuration":
      "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
    "auth/invalid-custom-token":
      "The custom token format is incorrect. Please check the documentation.",
    "auth/invalid-dynamic-link-domain":
      "The provided dynamic link domain is not configured or authorized for the current project.",
    "auth/invalid-email": "The email address is badly formatted.",
    "auth/invalid-emulator-scheme":
      "Emulator URL must start with a valid scheme (http:// or https://).",
    "auth/invalid-api-key":
      "Your API key is invalid, please check you have copied it correctly.",
    "auth/invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
    "auth/invalid-credential":
      "The supplied auth credential is malformed or has expired.",
    "auth/invalid-message-payload":
      "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
    "auth/invalid-multi-factor-session":
      "The request does not contain a valid proof of first factor successful sign-in.",
    "auth/invalid-oauth-provider":
      "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
    "auth/invalid-oauth-client-id":
      "The OAuth client ID provided is either invalid or does not match the specified API key.",
    "auth/unauthorized-domain":
      "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
    "auth/invalid-action-code":
      "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
    "auth/invalid-persistence-type":
      "The specified persistence type is invalid. It can only be local, session or none.",
    "auth/invalid-phone-number":
      "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
    "auth/invalid-provider-id": "The specified provider ID is invalid.",
    "auth/invalid-recipient-email":
      "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
    "auth/invalid-sender":
      "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
    "auth/invalid-verification-id":
      "The verification ID used to create the phone auth credential is invalid.",
    "auth/invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
    "auth/missing-android-pkg-name":
      "An Android Package Name must be provided if the Android App is required to be installed.",
    "auth/auth-domain-config-required":
      "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
    "auth/missing-app-credential":
      "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
    "auth/missing-verification-code":
      "The phone auth credential was created with an empty SMS verification code.",
    "auth/missing-continue-uri": "A continue URL must be provided in the request.",
    "auth/missing-iframe-start": "An internal AuthError has occurred.",
    "auth/missing-ios-bundle-id":
      "An iOS Bundle ID must be provided if an App Store ID is provided.",
    "auth/missing-or-invalid-nonce":
      "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
    "auth/missing-multi-factor-info": "No second factor identifier is provided.",
    "auth/missing-multi-factor-session":
      "The request is missing proof of first factor successful sign-in.",
    "auth/missing-phone-number":
      "To send verification codes, provide a phone number for the recipient.",
    "auth/missing-verification-id":
      "The phone auth credential was created with an empty verification ID.",
    "auth/app-deleted": "This instance of FirebaseApp has been deleted.",
    "auth/multi-factor-info-not-found":
      "The user does not have a second factor matching the identifier provided.",
    "auth/multi-factor-auth-required":
      "Proof of ownership of a second factor is required to complete sign-in.",
    "auth/account-exists-with-different-credential":
      "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
    "auth/network-request-failed":
      "A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",
    "auth/no-auth-event": "An internal AuthError has occurred.",
    "auth/no-such-provider":
      "User was not linked to an account with the given provider.",
    "auth/null-user":
      "A null user object was provided as the argument for an operation which requires a non-null user object.",
    "auth/operation-not-allowed":
      "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
    "auth/operation-not-supported-in-this-environment":
      "This operation is not supported in the environment this application is running on. 'location.protocol' must be http, https or chrome-extension and web storage must be enabled.",
    "auth/popup-blocked":
      "Unable to establish a connection with the popup. It may have been blocked by the browser.",
    "auth/popup-closed-by-user":
      "The popup has been closed by the user before finalizing the operation.",
    "auth/provider-already-linked":
      "User can only be linked to one identity for the given provider.",
    "auth/quota-exceeded":
      "The project's quota for this operation has been exceeded.",
    "auth/redirect-cancelled-by-user":
      "The redirect operation has been cancelled by the user before finalizing.",
    "auth/redirect-operation-pending":
      "A redirect sign-in operation is already pending.",
    "auth/rejected-credential":
      "The request contains malformed or mismatching credentials.",
    "auth/second-factor-already-in-use":
      "The second factor is already enrolled on this account.",
    "auth/maximum-second-factor-count-exceeded":
      "The maximum allowed number of second factors on a user has been exceeded.",
    "auth/tenant-id-mismatch":
      "The provided tenant ID does not match the Auth instance's tenant ID",
    "auth/timeout": "The operation has timed out.",
    "auth/user-token-expired":
      "The user's credential is no longer valid. The user must sign in again.",
    "auth/too-many-requests":
      "We have blocked all requests from this device due to unusual activity. Try again later.",
    "auth/unauthorized-continue-uri":
      "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
    "auth/unsupported-first-factor":
      "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
    "auth/unsupported-persistence-type":
      "The current environment does not support the specified persistence type.",
    "auth/unsupported-tenant-operation":
      "This operation is not supported in a multi-tenant context.",
    "auth/unverified-email": "The operation requires a verified email.",
    "auth/user-cancelled":
      "The user did not grant your application the permissions it requested.",
    "auth/user-not-found":
      "There is no user record corresponding to this identifier. The user may have been deleted.",
    "auth/user-disabled": "The user account has been disabled by an administrator.",
    "auth/user-mismatch":
      "The supplied credentials do not correspond to the previously signed in user.",
    "auth/weak-password": "The password must be 6 characters long or more.",
    "auth/web-storage-unsupported":
      "This browser is not supported or 3rd party cookies and data may be disabled.",
    "auth/already-initialized":
      "initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",
  };

  const errorMessage = errorMessages[message] || "An error occurred";
  return ToastMake(errorMessage, type);
};

export default createError;
