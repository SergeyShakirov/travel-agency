# EuroWork - European Employment Agency Website 🇪🇺

A modern, responsive single-page application for a European employment agency built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean, professional design inspired by leading employment websites
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **SEO Optimized**: Meta tags, structured data, and proper semantic HTML
- **High Performance**: Fast loading times with Next.js optimization
- **Type Safety**: Full TypeScript implementation
- **Component Testing**: Comprehensive test suite with Jest and Testing Library
- **Production Ready**: Optimized build process

## 🚀 Live Demo

Visit the live website: [https://eurowork-site.vercel.app](https://eurowork-site.vercel.app) *(to be deployed)*

## 🏗️ Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript
- **Styling:** Tailwind CSS 3, Lucide React Icons
- **Testing:** Jest, React Testing Library
- **Animations:** Framer Motion, CSS Transitions
- **Linting:** ESLint, Next.js Config

## 📋 Project Structure

```
eurowork-site/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Header.tsx        # Site header
│       ├── Hero.tsx          # Main hero section
│       ├── Services.tsx      # Services offered
│       ├── Countries.tsx     # Available countries
│       ├── Benefits.tsx      # Company benefits
│       ├── Testimonials.tsx  # Client testimonials
│       ├── Contact.tsx       # Contact form
│       ├── Footer.tsx        # Site footer
│       └── __tests__/        # Component tests
├── public/                   # Static files
├── package.json
├── tailwind.config.js
├── jest.config.js
└── README.md
```

Сайт включает следующие секции:

1. **Header** - Навигация с контактами и социальными сетями
2. **Hero** - Главный экран с призывом к действию
3. **Services** - Услуги по трудоустройству (6 карточек)
4. **Countries** - Популярные страны Европы
5. **Benefits** - Преимущества работы с компанией
6. **Testimonials** - Отзывы довольных клиентов
7. **Contact** - Форма обратной связи
8. **Footer** - Дополнительная информация и контакты

## 🎨 Design Overview

The website includes the following sections:

1. **Header** - Navigation with contacts and social media links
2. **Hero** - Main screen with call-to-action
3. **Services** - Employment services (6 service cards)
4. **Countries** - Popular European countries
5. **Benefits** - Company advantages
6. **Testimonials** - Client success stories
7. **Contact** - Contact form and information
8. **Footer** - Additional information and contacts

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager
- Git for version control

### Local Development

```bash
# Clone the repository
git clone https://github.com/SergeyShakirov/travel-agency.git

# Navigate to project folder
cd travel-agency

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Create optimized build
npm run build

# Start production server
npm start
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Coverage
- **Total Tests**: 36
- **Passing**: 28 (77.8%)
- **Components**: All 8 main components tested

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**: Make sure your code is in a GitHub repository
2. **Import to Vercel**: 
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
3. **Configure**: 
   - Select "Next.js" framework
   - Use default build settings
4. **Deploy**: Click "Deploy" and your site will be live

### Deploy to Netlify

1. **Connect Repository**: Link your GitHub repo to Netlify
2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. **Deploy**: Your site will be live at `https://your-site.netlify.app`

### Deploy to Other Platforms

The project works on any platform supporting Node.js:
- **Railway**: One-click deployment
- **DigitalOcean App Platform**: Connect GitHub repo
- **AWS Amplify**: Deploy from GitHub
- **Render**: Simple GitHub integration

### Manual Deployment

For custom servers:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Start the server (requires Node.js)
npm start
```

## 🔧 Customization

### Environment Variables

Create `.env.local` for custom settings:

```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_CONTACT_EMAIL=your-email@domain.com
NEXT_PUBLIC_CONTACT_PHONE=+1234567890
```

### Styling

- **Colors**: Edit `tailwind.config.js`
- **Fonts**: Update `src/app/globals.css`
- **Components**: Modify files in `src/components/`

### Content Updates

- **Hero Text**: Edit `src/components/Hero.tsx`
- **Services**: Update `src/components/Services.tsx`
- **Contact Info**: Modify `src/components/Header.tsx` and `src/components/Contact.tsx`

## 📊 Performance

- **Lighthouse Score**: 95+ target
- **Core Web Vitals**: Optimized
- **Bundle Size**: Minimized
- **SEO**: Optimized meta tags and structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 📞 Contact

- **Email**: info@eurowork.kz
- **Phone**: +7 777 123 45 67
- **GitHub**: [@SergeyShakirov](https://github.com/SergeyShakirov)

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for utility-first styling
- Lucide for beautiful icons
- The open-source community

---

**EuroWork** - Your gateway to European employment opportunities 🇪🇺
