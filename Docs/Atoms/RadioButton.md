# RadioButton Component Guide

The `RadioButton` component is a flexible and customizable radio input element that allows users to select one option from a group of predefined choices. It supports various design tokens and styling options for use in different contexts, including forms, settings, and configuration panels.

### Props

- `label`: The text label for the radio button.
- `checked`: The boolean state for whether the radio button is selected or not.
- `onChange`: A function that triggers when the state changes.
- `variant`: Choose between `primary` and `secondary` variants for different visual styles.
- `size`: The size of the radio button, can be `small`, `normal`, or `large`.
- `color`: Supports a wide range of semantic colors from the design system.
- `rounded`: Boolean prop for rendering a rounded or square radio button.
- `disabled`: Boolean to disable the radio button interaction.
- `name`: The name attribute to group radio buttons together.
- `className`: Additional custom CSS classes.

------

## Use Cases for Radio Buttons

### 1. **Multiple Choice Questions**

Radio buttons are commonly used in forms to select one option from several. For example, choosing a payment method where only one option can be selected (e.g., Credit Card or PayPal).

#### Example: Choosing a Payment Method

```jsx
import React, { useState } from 'react';
import { RadioButton } from './RadioButton';

const PaymentMethodSelection = () => {
  const [selectedMethod, setSelectedMethod] = useState('');

  return (
    <div>
      <h3>Select Payment Method</h3>
      <RadioButton
        label="Credit Card"
        name="payment"
        checked={selectedMethod === 'Credit Card'}
        onChange={() => setSelectedMethod('Credit Card')}
      />
      <RadioButton
        label="PayPal"
        name="payment"
        checked={selectedMethod === 'PayPal'}
        onChange={() => setSelectedMethod('PayPal')}
      />
    </div>
  );
};

export default PaymentMethodSelection;
```

In this example, the user selects one payment method from "Credit Card" or "PayPal". The `name` prop ensures that both buttons are grouped, so only one can be selected at a time.

------

### 2. **Settings or Preferences**

Radio buttons are great for settings where a user must choose between options, such as selecting a language, theme, or other configuration options.

#### Example: Choosing a Language Option

```jsx
import React, { useState } from 'react';
import { RadioButton } from './RadioButton';

const LanguageSelection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  return (
    <div>
      <h3>Select Language</h3>
      <RadioButton
        label="English"
        name="language"
        checked={selectedLanguage === 'English'}
        onChange={() => setSelectedLanguage('English')}
      />
      <RadioButton
        label="Spanish"
        name="language"
        checked={selectedLanguage === 'Spanish'}
        onChange={() => setSelectedLanguage('Spanish')}
      />
      <RadioButton
        label="French"
        name="language"
        checked={selectedLanguage === 'French'}
        onChange={() => setSelectedLanguage('French')}
      />
    </div>
  );
};

export default LanguageSelection;
```

In this example, the user selects one language option from a list. Radio buttons ensure that only one language can be selected at a time.

------

### 3. **Single-Option Selectors**

When only one answer is allowed for a question, radio buttons are ideal. For example, selecting a subscription plan (e.g., Basic, Standard, or Premium).

#### Example: Selecting a Subscription Plan

```jsx
import React, { useState } from 'react';
import { RadioButton } from './RadioButton';

const SubscriptionPlanSelection = () => {
  const [selectedPlan, setSelectedPlan] = useState('Basic');

  return (
    <div>
      <h3>Select Subscription Plan</h3>
      <RadioButton
        label="Basic Plan"
        name="subscription"
        checked={selectedPlan === 'Basic'}
        onChange={() => setSelectedPlan('Basic')}
      />
      <RadioButton
        label="Standard Plan"
        name="subscription"
        checked={selectedPlan === 'Standard'}
        onChange={() => setSelectedPlan('Standard')}
      />
      <RadioButton
        label="Premium Plan"
        name="subscription"
        checked={selectedPlan === 'Premium'}
        onChange={() => setSelectedPlan('Premium')}
      />
    </div>
  );
};

export default SubscriptionPlanSelection;
```

In this example, the user selects one subscription plan. The radio button ensures only one plan is chosen at any given time.

------

## Radio Button in User Interface Design

### Key Considerations:

1. **Single Selection**: Radio buttons are perfect for situations where users need to select only one option from a group.
2. **Clear Labeling**: Each radio button should have a clearly labeled description to ensure the user understands the choices.
3. **Grouping**: Radio buttons with the same `name` will behave as a group, allowing only one selection at a time.
4. **Accessibility**: Always ensure that radio buttons are accessible by using descriptive labels and considering screen reader users.

### Customization:

- **Variants and Sizes**: Use `primary` or `secondary` variants and adjust the size (`small`, `normal`, `large`) for visual differentiation.
- **Colors**: Radio buttons can inherit any color from your design system, such as `info`, `warning`, `alert`, etc.
- **Rounded/Squared**: Control whether the radio button is rounded or squared using the `rounded` prop.

------

## Conclusion

The `RadioButton` component is versatile and can be used in a wide range of use cases where only one option should be selected. It’s customizable with colors, sizes, and styles to match the look and feel of your application. Use it for multiple choice questions, settings, single-option selectors, and more.

------

### Example Usage in a Form:

```jsx
const ExampleForm = () => {
  const [selection, setSelection] = useState('');

  return (
    <form>
      <h3>Example Form</h3>
      <RadioButton
        label="Option 1"
        name="example"
        checked={selection === 'Option 1'}
        onChange={() => setSelection('Option 1')}
      />
      <RadioButton
        label="Option 2"
        name="example"
        checked={selection === 'Option 2'}
        onChange={() => setSelection('Option 2')}
      />
    </form>
  );
};
```

This guide provides several use cases and examples to get started with the `RadioButton` component.

------

In web and app development design, a **radio button** is a form element that allows users to **select one option from a group of predefined choices**. It is a type of input element that visually presents a set of mutually exclusive options, where only one selection is possible at any given time within a group.

#### **Key Characteristics of Radio Buttons:**

1. **Single Selection**:

​	• Radio buttons are grouped together, and **only one button in the group can be selected** at a time. When a user selects a radio button, any previously selected button in the group is automatically deselected.

2. **Mutually Exclusive Options**:

​	• They are used when you want users to choose **only one option from a list of two or more** choices.

​	• If multiple selections are needed, checkboxes (not radio buttons) should be used instead.

3. **Visual Representation**:

​	• Radio buttons typically appear as **small circles** next to each option. When selected, the circle is filled with a dot or another visual indicator.

4. **Grouped by** name **Attribute**:

​	• In HTML, radio buttons that belong to the same group (where only one can be selected) must have the same name attribute. This groups the radio buttons together, ensuring only one can be selected.

#### **Use Cases for Radio Buttons:**

1.**Multiple Choice Questions**: Used in forms where a user needs to select one answer from several.

**Example:** Choosing a payment method (credit card, PayPal, etc.).

2. **Settings or Preferences**: For selecting a single configuration option, like choosing a language or theme (light/dark mode).

**Example:** Selecting a gender option (Male, Female, Other).

3. **Single-Option Selectors**: When only one answer is allowed for a question, radio buttons are used instead of checkboxes.

**Example:** Subscription plan selection (Basic, Standard, Premium).

