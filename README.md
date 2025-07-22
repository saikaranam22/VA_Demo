# VA Benefits Eligibility Checker Website

📝 **Overview**

This project is a web-based simulation of a VA (Veterans Affairs) Benefits Eligibility Checker designed to improve user experience and accessibility for Veterans. It walks users through a simplified journey to determine potential benefits eligibility, based on service history and health conditions. The goal is to create a clean, accessible, and intuitive website that demonstrates how Veterans could be guided more clearly through eligibility questions.

## 🌐 Tech Stack

- **HTML5 + CSS3** (Tailwind CSS)
- **JavaScript** (React + React Router)
- **Vite** for build tooling and development
- **Lucide React** for icons
- **Context API** for state management

## 🚀 Features

### User Journey Flow

1. **Landing Page**
   - Welcome text and introduction
   - CTA: "Start Your Eligibility Check"
   - Feature highlights and information

2. **Step 1: Service History**
   - Branch of service selection
   - Years served dropdown
   - Active duty status selection

3. **Step 2: Health & Disability Information**
   - Service-related injury checkboxes
   - PTSD and mental health conditions
   - VA disability rating status

4. **Step 3: Special Military Status**
   - Purple Heart recipient
   - Medal of Honor recipient
   - Former POW status
   - Combat zone deployment

5. **Step 4: Eligibility Summary**
   - Personalized eligibility assessment
   - Priority level determination
   - Next steps and resources
   - Links to VA enrollment, help line, and appointment booking

## ✅ Accessibility & Compliance

- **Section 508-ready** layout and interactions
- **Responsive design** (desktop, tablet, mobile)
- **Screen reader support** (ARIA labels, semantic HTML)
- **Keyboard navigation** friendly
- **Focus management** with visible focus indicators
- **Color contrast** meets WCAG guidelines
- **Future-proof** for HIPAA-compliant integration

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd va-benefits-checker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The application will automatically reload on file changes

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
va-benefits-checker/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── Layout.jsx      # Main layout component
│   │   ├── ProgressIndicator.jsx
│   │   ├── LandingPage.jsx
│   │   ├── ServiceHistory.jsx
│   │   ├── HealthDisability.jsx
│   │   ├── SpecialStatus.jsx
│   │   └── EligibilitySummary.jsx
│   ├── context/           # React Context for state management
│   │   └── EligibilityContext.jsx
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles with Tailwind
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
└── package.json          # Dependencies and scripts
```

## 🎨 Design System

### Colors
- **VA Blue**: `#003f7f` - Primary brand color
- **VA Dark Blue**: `#112e51` - Header and emphasis
- **VA Red**: `#e31c3d` - Alerts and errors
- **VA Green**: `#00a91c` - Success states
- **VA Gray**: `#5b616b` - Text and borders

### Typography
- **Font Family**: Source Sans Pro (Google Fonts)
- **Weights**: 400 (Regular), 600 (Semibold), 700 (Bold)

### Components
- Custom button styles (`.btn-primary`, `.btn-secondary`)
- Form input styles (`.form-input`, `.form-label`)
- Focus management (`.focus-outline`)

## 🔧 Key Components

### Context Management
- **EligibilityContext**: Manages form state across all steps
- **State persistence**: Maintains user input during navigation
- **Form validation**: Real-time validation with error messages

### Accessibility Features
- **ARIA labels** and descriptions
- **Semantic HTML** structure
- **Screen reader** announcements
- **Keyboard navigation** support
- **Focus indicators** for all interactive elements

### Responsive Design
- **Mobile-first** approach
- **Breakpoint system**: sm, md, lg, xl
- **Flexible layouts** using CSS Grid and Flexbox
- **Touch-friendly** interactions on mobile devices

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📝 License

This project is for educational and demonstration purposes. In a real-world implementation, it would need to comply with all VA security and privacy requirements.

## ⚠️ Important Notes

- **Demo Purpose**: This is a demonstration tool for educational purposes
- **Privacy**: No real user data should be entered
- **Security**: Not configured for production use with real VA data
- **Compliance**: Would require additional security measures for real deployment

## 📞 Support

For questions or support:
- **VA Benefits Hotline**: 1-800-827-1000
- **TTY**: 711
- **Website**: [va.gov](https://www.va.gov)

---

**Disclaimer**: This is a demonstration website and not an official VA application. For real VA benefits information and applications, please visit [va.gov](https://www.va.gov) or contact the VA directly.
