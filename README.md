# My Hono.js Portfolio App

A modern, refactored portfolio application built with Hono.js following best practices.

## 🚀 Features

- **Modern Architecture**: Modular route structure with proper separation of concerns
- **Type Safety**: Full TypeScript support with proper interfaces
- **Middleware**: Built-in logging, CORS, security headers, and error handling
- **Responsive Design**: Mobile-first design with dark/light theme toggle
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Optimized for Cloudflare Workers with Vite build

## 🏗️ Project Structure

```
src/
├── index.tsx              # Main application entry point
├── types.ts               # TypeScript interfaces and types
├── middleware/            # Middleware functions
│   ├── index.ts          # Middleware exports
│   ├── logger.ts         # Request logging
│   ├── cors.ts           # CORS handling
│   ├── security.ts       # Security headers
│   └── errorHandler.ts   # Error handling
├── routes/                # Route handlers
│   ├── index.ts          # Route exports
│   ├── home.ts           # Home page routes
│   ├── about.ts          # About page routes
│   ├── projects.ts       # Project page routes
│   └── posts.ts          # Blog post routes
└── utils/                 # Utility functions
    └── template.tsx      # HTML template utilities

public/
└── static/               # Static assets
    ├── style.css         # Stylesheets
    └── script.js         # Client-side JavaScript
```

## 🛠️ Technologies Used

- **Hono.js**: Fast, lightweight web framework
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and dev server
- **Cloudflare Workers**: Edge computing platform
- **CSS3**: Modern styling with responsive design

## 📦 Installation

```bash
npm install
```

## 🚀 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Start production server locally
npm run start
```

## 🚀 Deployment

```bash
# Deploy to Cloudflare Pages
npm run deploy

# Generate Cloudflare types
npm run cf-typegen
```

## 🔧 Additional Scripts

```bash
# Type checking
npm run type-check

# Clean build directory
npm run clean
```

## 🏗️ Architecture Highlights

### 1. **Modular Route Structure**
- Each route type is separated into its own file
- Easy to maintain and extend
- Clear separation of concerns

### 2. **Middleware System**
- **Logger**: Request/response logging with timing
- **CORS**: Cross-origin resource sharing
- **Security**: Security headers for protection
- **Error Handler**: Centralized error handling

### 3. **Type Safety**
- Proper TypeScript interfaces for all data structures
- Type-safe route handlers
- Cloudflare bindings support

### 4. **Template System**
- Reusable HTML templates
- Consistent page structure
- SEO meta tag management

### 5. **Static Asset Management**
- CSS and JavaScript properly separated
- Optimized for production builds
- Clean asset organization

## 🌟 Best Practices Implemented

1. **Code Organization**: Clear separation of routes, middleware, and utilities
2. **Type Safety**: Full TypeScript coverage with proper interfaces
3. **Error Handling**: Centralized error handling with proper logging
4. **Security**: Security headers and CORS configuration
5. **Performance**: Optimized for edge computing with Cloudflare Workers
6. **Maintainability**: Modular structure for easy updates and extensions
7. **SEO**: Proper meta tags and semantic HTML structure
8. **Accessibility**: ARIA labels and semantic markup

## 🔄 Migration from Old Structure

The application has been refactored from a single monolithic file to a modular structure:

- **Before**: All routes and HTML in `src/index.tsx`
- **After**: Separated into logical modules with proper imports

### Key Changes:
- Routes organized into dedicated files
- Middleware system for cross-cutting concerns
- Template utilities for consistent HTML generation
- Proper TypeScript interfaces
- Static assets properly separated

## 🚀 Performance Benefits

- **Faster Builds**: Modular structure enables better tree-shaking
- **Better Caching**: Static assets properly separated
- **Edge Optimization**: Optimized for Cloudflare Workers
- **Reduced Bundle Size**: Efficient code splitting

## 🔧 Customization

### Adding New Routes
1. Create a new route file in `src/routes/`
2. Export the route from `src/routes/index.ts`
3. Mount it in `src/index.tsx`

### Adding New Middleware
1. Create middleware in `src/middleware/`
2. Export from `src/middleware/index.ts`
3. Apply in `src/index.tsx`

### Styling
- Main styles in `public/static/style.css`
- Theme toggle functionality in `public/static/script.js`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
