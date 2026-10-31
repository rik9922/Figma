---
name: figma-components
description: Guides the creation and management of reusable Master Components, Instances, Component Sets, Variants, and modern Component Properties (Boolean, Text, Instance Swap, Variant) in Figma.
---

# Figma Components & Variants Architecture

## 1. Components vs Instances

- **Main / Master Component** (`❖` purple filled diamond): Single source of truth. Created once. Changing its style, layout, or typography updates all instances.
- **Instance** (`◇` purple hollow diamond): A reusable placed copy. Inherits master changes while allowing non-destructive overrides (text string, icon swap, fill color).

## 2. When to Componentize

Componentize whenever an element is repeated or has multiple states:

- Buttons (Primary, Secondary, Text, Danger).
- Text Input Fields (Idle, Active, Filled, Error, Disabled).
- Navigation Bars and Tab Bar items.
- List Rows and Feed Cards.
- Badges, Tags, and Status Chips.

## 3. Creating Component Properties (Modern Figma Standard)

Do not create bloated variant sets for simple changes. Use modern component properties:

1. **Variant Property**: Used for distinct visual configurations (e.g. `Type: Primary | Secondary | Ghost`, `Size: Small | Medium | Large`).
2. **Boolean Property**: Toggles visibility on/off without needing separate frames (e.g. `showIcon: true/false`, `hasError: true/false`).
   - _How to create_: Select child layer → Right Panel → Layer section → Click the small "Apply variable/property" icon next to eye icon.
3. **Text Property**: Exposes text editing directly in the parent component properties panel without double-clicking into deep layers.
   - _How to create_: Select text layer → Right Panel → Text section → Click "Create text property".
4. **Instance Swap Property**: Allows swapping an icon component instance from a dropdown menu.
   - _How to create_: Select icon instance → Right Panel → Component section → Click "Apply instance swap property".

## 4. Variant Set Organization

- Use clean key-value naming: `Property1=Value1, Property2=Value2`.
- Example for Button: `style=primary, state=default, size=medium`.
- Enclose the entire set in a clearly labeled Component Set frame.
