# EVnation Manual Library

A comprehensive web application for managing and distributing EVnation's internal manuals and documentation. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🌟 Features

### 📚 Manual Management
- **3 Essential Manuals**: Company Overview, RingCentral System, Project Pricing Summary
- **Detailed Information**: Each manual includes comprehensive descriptions, key features, and target audience
- **Search & Filter**: Find manuals by category, tags, and search terms
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### 📥 Download Functionality
- **PDF Downloads**: Direct download of manual PDFs from the server
- **API-based**: Secure file serving through Next.js API routes
- **Proper Headers**: Correct content-type and disposition headers for downloads

### 🎨 Modern UI/UX
- **Beautiful Design**: Gradient backgrounds with glassmorphism effects
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Interactive Elements**: Hover effects, loading states, and responsive feedback
- **Accessibility**: Proper ARIA labels and keyboard navigation

### 🔧 Technical Features
- **TypeScript**: Full type safety and better development experience
- **Next.js 15**: Latest features including App Router and Server Components
- **Tailwind CSS**: Utility-first styling with custom design system
- **Framer Motion**: Smooth animations and transitions
- **Lucide Icons**: Consistent iconography throughout the application

## 📋 Available Manuals

### 1. Company Overview & Organization Chart
- **Category**: Company Info
- **Target Audience**: All EVnation employees and contractors
- **Key Features**: Company introduction, organization chart, contact information, company policies
- **Pages**: 25
- **File Size**: 206KB

### 2. RingCentral Communication System Manual
- **Category**: Integration
- **Target Audience**: Internal EVnation employees
- **Key Features**: Phone system setup, team calling, text messaging, voicemail management
- **Pages**: 18
- **File Size**: 1.8MB

### 3. Project Pricing Summary & Master Page Tool
- **Category**: Integration
- **Target Audience**: EVnation project managers and sales team
- **Key Features**: Client information management, load calculations, cost estimation, PDF generation
- **Pages**: 15
- **File Size**: 708KB

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JunK-enter/evnationmanual.git
   cd evnationmanual
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
evnation-manual/
├── public/
│   └── manuals/           # PDF files
│       ├── company-overview.pdf
│       ├── RCmanual.pdf
│       └── projectpricingsum.pdf
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── download/
│   │   │       └── [id]/
│   │   │           └── route.ts    # Download API
│   │   ├── manual/
│   │   │   └── [id]/
│   │   │       └── page.tsx        # Manual preview page
│   │   ├── programs/
│   │   │   └── page.tsx            # Programs reference page
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx                # Main page
│   └── components/
│       └── FlipBook.tsx
├── package.json
├── tailwind.config.ts
└── README.md
```

## 🔧 Configuration

### Environment Variables
No environment variables are required for basic functionality.

### PDF Files
Place your PDF files in the `public/manuals/` directory and update the manual data in the respective page components.

## 🎯 Usage

### For Users
1. **Browse Manuals**: Visit the main page to see all available manuals
2. **Search & Filter**: Use the search bar and filters to find specific manuals
3. **Preview**: Click "Preview" to see detailed information about a manual
4. **Download**: Click "Download PDF" to get the manual file

### For Developers
1. **Add New Manuals**: Update the `manuals` array in `src/app/page.tsx`
2. **Modify API**: Update the download route in `src/app/api/download/[id]/route.ts`
3. **Styling**: Use Tailwind CSS classes for consistent styling
4. **Animations**: Add Framer Motion animations for smooth interactions

## 🛠️ Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary to EVnation. All rights reserved.

## 📞 Support

For support and questions, please contact the EVnation development team.

---

**Built with ❤️ for EVnation**
