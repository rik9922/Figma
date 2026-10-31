# Screen Connection Matrix: crust-and-q

This matrix documents screen-to-screen interaction pathways for `crust-and-q`. Every interactive trigger, destination, transition curve, and expected behavior is specified.

| Source Screen | Interactive Element   | Action / Event             | Destination Screen | Trigger               | Transition Type                   | Expected Behavior & Feedback                                    |
| ------------- | --------------------- | -------------------------- | ------------------ | --------------------- | --------------------------------- | --------------------------------------------------------------- |
| `ONB-01`      | Screen Canvas         | Automatic timer completion | `ONB-02`           | After 1500ms delay    | Smart Animate (`450ms`, ease-out) | Logo moves to header; hero visual scales in; headline fades in. |
| `ONB-02`      | `PrimaryButton`       | Tap "Get Started"          | `AUTH-01`          | On Tap                | Push Left (`320ms`, ease-out)     | Navigates to authentication entry view.                         |
| `ONB-02`      | `SecondaryButton`     | Tap "Sign In"              | `AUTH-01`          | On Tap                | Push Left (`320ms`, ease-out)     | Navigates to authentication with login tab selected.            |
| `AUTH-01`     | `BackButton`          | Tap `<` back icon          | `ONB-02`           | On Tap                | Pop Right (`280ms`, ease-out)     | Returns to onboarding hero view.                                |
| `AUTH-01`     | `SubmitButton`        | Submit valid credentials   | `AUTH-02`          | On Tap                | Push Left (`300ms`, ease-out)     | Advances to verification / confirmation view.                   |
| `AUTH-01`     | `InputField`          | Submit invalid input       | `AUTH-01-ERROR`    | On Validation Failure | Micro-shake (`300ms`, spring)     | Input borders highlight in error tint; helper message appears.  |
| `AUTH-02`     | `VerifyButton`        | Complete verification      | `MAIN-01`          | On Tap                | Cross-fade (`350ms`, ease-out)    | Transitions into the primary application hub.                   |
| `MAIN-01`     | `ItemCard`            | Tap content item           | `DETAIL-01`        | On Tap                | Push Left (`300ms`, ease-out)     | Opens comprehensive item inspection view.                       |
| `MAIN-01`     | `PrimaryActionButton` | Tap primary action         | `ACT-01`           | On Tap                | Slide Up Sheet (`300ms`, spring)  | Modal sheet slides up with background scrim dimming.            |
| `MAIN-01`     | `SettingsButton`      | Tap profile / settings     | `SET-01`           | On Tap                | Push Left (`300ms`, ease-out)     | Opens settings and profile view.                                |
| `DETAIL-01`   | `BackButton`          | Tap `<` back icon          | `MAIN-01`          | On Tap                | Pop Right (`280ms`, ease-out)     | Returns to main hub.                                            |
| `ACT-01`      | `CloseButton`         | Tap "Cancel" or swipe down | `MAIN-01`          | On Tap / Drag Down    | Slide Down Sheet (`280ms`)        | Dismisses modal sheet and restores hub focus.                   |
| `ACT-01`      | `ContinueButton`      | Tap "Review & Continue"    | `ACT-02`           | On Tap                | Push Left inside Sheet (`250ms`)  | Advances to confirmation review summary.                        |
| `ACT-02`      | `BackButton`          | Tap `<` back icon          | `ACT-01`           | On Tap                | Pop Right inside Sheet (`250ms`)  | Returns to edit action parameters.                              |
| `ACT-02`      | `ConfirmButton`       | Confirm action             | `ACT-03`           | On Tap                | Morph / Smart Animate (`450ms`)   | Progress spinner transitions into success celebration.          |
| `ACT-02`      | `ConfirmButton`       | Action failure / timeout   | `ACT-02-FAILED`    | On Failure Event      | Shake & Alert (`300ms`)           | Displays error notification with retry CTA.                     |
| `ACT-03`      | `DoneButton`          | Tap "Done"                 | `MAIN-01`          | On Tap                | Fade to Root (`300ms`, ease-out)  | Closes modal and returns to main hub with updated data.         |
| `SET-01`      | `BackButton`          | Tap `<` back icon          | `MAIN-01`          | On Tap                | Pop Right (`280ms`, ease-out)     | Returns to main hub.                                            |
