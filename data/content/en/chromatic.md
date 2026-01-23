# Chromatic

Chromatic is a visual testing platform for Storybook that automates visual and interaction testing for UI components.

## Key Features

- **Storybook Integration**: Native Storybook support
- **Visual Snapshots**: Capture component states
- **Interaction Testing**: Test component behaviors
- **UI Review**: Collaborate on UI changes
- **Turbosnap**: Only test changed components
- **Component Docs**: Generate documentation

## Quick Start

Install Chromatic:

```bash
npm install --save-dev chromatic
```

Add to package.json:

```json
{
  "scripts": {
    "chromatic": "chromatic --project-token=your-token"
  }
}
```

Configure Storybook for interactions:

```javascript
// Button.stories.js
import { Button } from './Button';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Components/Button',
  component: Button
};

export const Primary = {
  args: {
    label: 'Click me',
    primary: true
  }
};

export const Clicked = {
  ...Primary,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    await userEvent.click(button);
    await expect(button).toHaveClass('clicked');
  }
};
```

Run Chromatic:

```bash
npm run chromatic
```

## Why Choose Chromatic?

- **Storybook Native**: Built by Storybook team
- **Fast**: Smart selective testing
- **Collaborative**: UI review workflow
- **Design System**: Perfect for design systems

## Pricing

- **Free**: 5,000 snapshots/month
- **Pro**: Starting at $149/month
- **Enterprise**: Custom pricing

## Learn More

- [Official Website](https://www.chromatic.com/)
- [Documentation](https://www.chromatic.com/docs/)
- [Storybook Integration](https://www.chromatic.com/docs/storybook)
