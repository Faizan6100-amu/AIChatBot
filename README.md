# BeyondChats - Intelligent Chatbot Integration Platform

BeyondChats is a modern, user-friendly platform that enables businesses to integrate AI-powered chatbots into their websites with minimal setup time and technical knowledge required.

![BeyondChats Screenshot](https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1600)

## Features

- **Quick Setup Process**
  - User registration with email verification
  - Organization setup with website scanning
  - One-click chatbot integration

- **Intelligent Website Scanning**
  - Automatic content detection
  - Smart data chunking
  - Progress tracking

- **Easy Integration**
  - Simple copy-paste installation
  - Developer-friendly documentation
  - Email integration instructions

- **Testing & Validation**
  - Live chatbot preview
  - Integration validation
  - Feedback system

- **Modern UI/UX**
  - Responsive design
  - Dark mode support
  - Smooth animations
  - Progress tracking

## Tech Stack

- **Frontend**
  - React 18
  - TypeScript
  - Tailwind CSS
  - Lucide Icons

- **Features**
  - Dark mode with system preference detection
  - Mobile-responsive design
  - Confetti animations
  - Social sharing integration

## Getting Started

1. **Installation**
   ```bash
   npm install
   ```

2. **Development**
   ```bash
   npm run dev
   ```

3. **Build**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## Integration

To integrate BeyondChats into your website, add the following code to your HTML's `<head>` section:

```html
<script>
  window.beyondChatsConfig = {
    apiKey: 'YOUR_API_KEY',
    theme: 'auto',
    company: 'YOUR_COMPANY_NAME',
    domain: 'YOUR_DOMAIN'
  };
</script>
<script src="https://cdn.beyondchats.com/widget.js" async></script>
```

## Project Structure

```
src/
├── components/
│   ├── Registration.tsx       # User registration form
│   ├── OrganizationSetup.tsx # Company setup and scanning
│   ├── ChatbotIntegration.tsx# Integration and testing
│   ├── ProgressBar.tsx       # Setup progress indicator
│   ├── Confetti.tsx         # Success animation
│   └── Footer.tsx           # Site footer
├── App.tsx                  # Main application component
└── main.tsx                # Application entry point
```

## Features in Detail

### 1. User Registration
- Email and password registration
- Google OAuth integration
- Email verification system
- Secure authentication flow

### 2. Organization Setup
- Company profile creation
- Website URL validation
- Automatic meta-description fetching
- Real-time website scanning
- Progress tracking

### 3. Chatbot Integration
- One-click integration
- Developer instructions
- Integration testing
- Success validation
- Social sharing

### 4. Dark Mode
- System preference detection
- Manual toggle option
- Persistent preference storage
- Smooth transition animations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email anwarfaizankhan@gmail.com.com or join our WhatApp Group.

## Acknowledgments

- Icons by [Lucide](https://lucide.dev)
- UI Framework by [Tailwind CSS](https://tailwindcss.com)
- Built with [React](https://reactjs.org) and [TypeScript](https://www.typescriptlang.org)
