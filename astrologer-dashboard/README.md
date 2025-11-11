# Astrologer App Dashboard

A comprehensive, modern dashboard application for managing an astrology business. Built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

### 📊 Dashboard Overview
- Real-time statistics and metrics
- Revenue and call trends visualization
- Recent activity overview
- Performance charts and graphs

### 📞 Call Management
- Complete call history tracking
- Incoming, outgoing, and missed call management
- Upcoming call scheduling
- Call duration and revenue tracking
- Search and filter functionality

### 💬 Messages
- Real-time chat interface
- Conversation management
- Message history
- Client communication tracking
- Unread message indicators

### ⭐ Reviews & Ratings
- Review management system
- Rating distribution visualization
- Client feedback tracking
- Response management
- Review statistics and analytics

### ✨ Services Management
- Service catalog management
- Pricing and duration configuration
- Service categories
- Booking statistics per service
- Service activation/deactivation

### 👥 Clients
- Comprehensive client database
- Client contact information
- Booking history per client
- Client spending analytics
- VIP client identification

### 📅 Schedule
- Calendar view for appointments
- Weekly schedule grid
- Appointment management
- Time slot availability
- Upcoming appointments overview

### ⚙️ Settings
- Profile management
- Notification preferences
- Security settings
- Payment & billing configuration
- Language and timezone preferences

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **Date Handling**: date-fns

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd astrologer-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
astrologer-dashboard/
├── app/
│   ├── calls/          # Call management page
│   ├── clients/        # Client management page
│   ├── messages/       # Messages/chat page
│   ├── reviews/        # Reviews management page
│   ├── schedule/       # Schedule/calendar page
│   ├── services/       # Services management page
│   ├── settings/       # Settings page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Dashboard home page
├── components/
│   ├── Sidebar.tsx     # Navigation sidebar
│   └── StatCard.tsx    # Statistics card component
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Features Overview

### Dashboard
- Overview statistics cards
- Revenue and calls trend charts
- Recent calls table
- Quick access to all sections

### Call Management
- View all calls (incoming, outgoing, missed)
- Track call duration and revenue
- Schedule upcoming calls
- Search and filter call history

### Messages
- Chat interface with clients
- Conversation list sidebar
- Real-time messaging UI
- Message status indicators

### Reviews
- View all client reviews
- Rating distribution chart
- Review statistics
- Reply to reviews functionality

### Services
- Manage service catalog
- Set pricing and duration
- Track service performance
- Enable/disable services

### Clients
- Complete client database
- Contact information
- Booking and spending history
- Client status (Active/VIP)

### Schedule
- Calendar view
- Weekly schedule grid
- Appointment management
- Today's appointments list

### Settings
- Profile configuration
- Notification preferences
- Security settings
- Payment information
- Language and timezone

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme. The current theme uses purple/indigo gradients.

### Adding New Pages
1. Create a new folder in `app/` directory
2. Add `page.tsx` file
3. Update navigation in `components/Sidebar.tsx`

### Styling
All styles use Tailwind CSS utility classes. Modify components directly or extend the Tailwind config.

## Future Enhancements

- Backend API integration
- Real-time notifications
- Data persistence (database)
- User authentication
- Payment gateway integration
- Advanced analytics
- Export functionality (PDF, CSV)
- Mobile responsive improvements
- Dark mode support

## License

This project is open source and available for use.

## Support

For issues or questions, please open an issue in the repository.
