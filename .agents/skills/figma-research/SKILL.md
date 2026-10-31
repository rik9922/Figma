---
name: figma-research
description: Conducts rigorous pre-design UX research, requirement analysis, competitor mobile benchmarking, user persona mapping, and platform design guideline evaluation (Apple HIG and Google Material Design 3).
---

# Pre-Design UX Research & Benchmarking

Never design in a vacuum. Before touching the Figma canvas or drawing artboards, execute this research protocol.

## Step 1: Requirement Analysis & Problem Statement

- **Core User Goal**: What specific problem does this flow solve for the user?
- **Business Objective**: Conversion, retention, frictionless onboarding, or speed of operation?
- **Input Data / Fields**: Explicit list of required vs optional inputs.
- **Constraints & Edge Cases**: What happens when network fails? What if the user enters invalid credentials? What if the list is empty?

## Step 2: Benchmarking Real-World Mobile Apps

Always analyze proven UX patterns in top tier apps:

- **Authentication & Onboarding**: Apple ID, Duolingo, Uber, Airbnb, Revolut.
- **Navigation & Bottom Sheets**: Apple Maps, Linear Mobile, Spotify.
- **Form Validation & Inputs**: Monzo, Stripe Checkout, Robinhood.
- **Settings & Account Management**: iOS Settings, Telegram, WhatsApp.

## Step 3: Platform Selection & Guidelines

Evaluate whether the project targets **iOS**, **Android**, or **Cross-Platform**:

### iOS (Apple Human Interface Guidelines)

- Font: SF Pro (or clean sans-serif like Inter).
- Navigation: Top Navigation Bar with Back chevron and title; Bottom Tab Bar (fixed 49-83 pt with safe area).
- Touch Target: Minimum **44 × 44 pt**.
- Primary CTA: Full-width button anchored to bottom or top-right text button.

### Android (Material Design 3)

- Font: Roboto / Google Sans.
- Navigation: Top App Bar; Bottom Navigation Bar (80 dp height with active pill indicator).
- Touch Target: Minimum **48 × 48 dp**.
- Primary CTA: Floating Action Button (FAB) or filled tonal button.

## Step 4: Accessibility & Usability Criteria

- Contrast Ratio: 4.5:1 for standard body text; 3:1 for large headers and icons.
- Cognitive Load: 1 primary action per screen. Secondary actions styled subtly.
