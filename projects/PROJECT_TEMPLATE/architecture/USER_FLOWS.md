# User Flow Diagrams: {{PROJECT_NAME}}

## 1. First-Time User Onboarding & Authentication Journey

```mermaid
flowchart TD
    Launch([App Launch]) --> ONB01["ONB-01 Splash Screen\n(Brand logo & initialization)"]
    ONB01 -->|1.5s Auto Advance| ONB02["ONB-02 Welcome & Value Prop\n(Hero artwork & entry CTAs)"]
    ONB02 -->|Tap 'Get Started'| AUTH01["AUTH-01 Sign In / Register\n(Credentials or identifier entry)"]
    AUTH01 -->|Valid Input| AuthCheck{Verification Needed?}
    AuthCheck -->|Yes| AUTH02["AUTH-02 Security Verification\n(Confirmation code or MFA)"]
    AuthCheck -->|No| MAIN01["MAIN-01 Primary Dashboard\n(Main application hub)"]
    AUTH02 -->|Verified| MAIN01
    AUTH01 -->|Validation Error| AUTH01ERR["AUTH-01-ERROR\n(Inline helper & retry)"]
    AUTH01ERR -->|Retry| AUTH01
```

---

## 2. Returning User Experience Flow

```mermaid
flowchart LR
    LaunchReturn([App Launch]) --> SessionCheck{Active Session?}
    SessionCheck -->|Valid| MAIN01["MAIN-01 Dashboard Hub"]
    SessionCheck -->|Expired| AUTH01["AUTH-01 Re-Authentication"]
    AUTH01 -->|Success| MAIN01
```

---

## 3. Core Task Execution Journey

```mermaid
flowchart TD
    MAIN01["MAIN-01 Main Hub"] -->|Trigger Primary Action| ACT01["ACT-01 Action Parameters Form\n(Data entry & options)"]
    ACT01 -->|Submit Form| ValCheck{Inputs Valid?}
    ValCheck -->|No| ACT01ERR["ACT-01 Form Error\n(Field highlights)"]
    ACT01ERR -->|Correct| ACT01
    ValCheck -->|Yes| ACT02["ACT-02 Review & Confirm Sheet\n(Summary breakdown)"]
    ACT02 -->|Confirm| ExecCheck{Execution Succeeded?}
    ExecCheck -->|Yes| ACT03["ACT-03 Success Celebration\n(Confirmation receipt)"]
    ExecCheck -->|Network/System Error| ACT02FAIL["ACT-02-FAILED\n(Error explanation & retry)"]
    ACT02FAIL -->|Retry| ACT02
    ACT03 -->|Tap 'Done'| MAIN01
```

---

## 4. Item Detail & Content Exploration Flow

```mermaid
flowchart LR
    MAIN01["MAIN-01 Dashboard"] -->|Select Content Item| DETAIL01["DETAIL-01 Item Detail View\n(Full attributes & secondary actions)"]
    DETAIL01 -->|Tap Back| MAIN01
    DETAIL01 -->|Contextual Action| ACT01["ACT-01 Action Flow"]
```
