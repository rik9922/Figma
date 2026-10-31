# Complete User Flow Diagrams: {{PROJECT_NAME}}

## 1. First-Time User Onboarding & Registration Journey

```mermaid
flowchart TD
    Launch([App Launch]) --> ONB01["ONB-01 Splash Screen\n(Logo scale & ambient glow)"]
    ONB01 -->|1.5s Auto Advance| ONB02["ONB-02 Onboarding Hero\n(Hero artwork & value prop)"]
    ONB02 -->|Tap 'Create Account'| AUTH01["AUTH-01 Phone & OTP\n(Enter mobile number)"]
    AUTH01 -->|SMS Code Received| OTPInput{Valid 6-digit Code?}
    OTPInput -->|No / Expired| AUTH01ERR["AUTH-01-ERROR\n(Shake animation + countdown)"]
    AUTH01ERR -->|Resend Code| AUTH01
    OTPInput -->|Yes| AUTH02["AUTH-02 Biometric Setup\n(Enroll FaceID)"]
    AUTH02 -->|Allow FaceID| HOME01["HOME-01 Main Dashboard\n(Active Account View)"]
    AUTH02 -->|Skip| HOME01
```

---

## 2. Returning User & Quick Biometric Auth Flow

```mermaid
flowchart LR
    LaunchReturn([App Launch]) --> QuickBio{FaceID Enrolled?}
    QuickBio -->|Yes| ScanFace[FaceID Prompt]
    ScanFace -->|Success| HOME01["HOME-01 Dashboard"]
    ScanFace -->|Fail 3x| AUTH01["AUTH-01 Fallback Phone Auth"]
    QuickBio -->|No| AUTH01
```

---

## 3. Peer-to-Peer Transfer & Payment Flow

```mermaid
flowchart TD
    HOME01["HOME-01 Dashboard"] -->|Tap 'Send' Action| TXN01["TXN-01 Payee & Amount\n(Frequent payees + numeric keypad)"]
    TXN01 -->|Enter Amount & Tap 'Review'| BalCheck{Sufficient Balance?}
    BalCheck -->|No| TXN02FAIL["TXN-02-FAILED\n(Insufficient funds warning)"]
    TXN02FAIL -->|Top Up| HOME01
    BalCheck -->|Yes| TXN02["TXN-02 Confirm Sheet\n(Fee breakdown + exchange rate)"]
    TXN02 -->|Double-Click Side Button + FaceID| SignCheck{Signed?}
    SignCheck -->|Success| TXN03["TXN-03 Success Receipt\n(Animated checkmark + ID)"]
    TXN03 -->|Tap 'Done'| HOME01
    SignCheck -->|Network Error| TXN02FAIL
```

---

## 4. Digital Cards Management & Edge States

```mermaid
flowchart LR
    HOME01["HOME-01 Dashboard"] -->|Tap 'Cards' Tab| CardCheck{Cards Exist?}
    CardCheck -->|No| WALLET01EMPTY["WALLET-01-EMPTY\n(3D card outline + CTA)"]
    WALLET01EMPTY -->|Request Card| WALLET01["WALLET-01 Cards Hub"]
    CardCheck -->|Yes| WALLET01["WALLET-01 Cards Hub\n(Freeze toggle, reveal CVV)"]
```
