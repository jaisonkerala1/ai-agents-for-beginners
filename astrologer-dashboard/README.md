# Astrologer Dashboard

A modern, comprehensive dashboard application designed specifically for astrologers to manage their business, clients, appointments, and sessions.

## Features

- **Dashboard Overview**: Get a quick view of key metrics including total clients, upcoming appointments, monthly revenue, and average ratings
- **Client Management**: View and manage all your clients with detailed profiles, session history, and contact information
- **Appointment Scheduling**: Calendar view and list view for managing appointments with status tracking (confirmed, pending, cancelled)
- **Session History**: Track all reading sessions with notes, ratings, and revenue
- **Analytics**: Comprehensive analytics dashboard with revenue trends, session types breakdown, and top clients
- **Profile Management**: Manage your professional profile, certifications, availability, and account settings

## Tech Stack

- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Charting library for analytics
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool and dev server
- **date-fns** - Date utility library

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Navigate to the project directory:
```bash
cd astrologer-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
astrologer-dashboard/
├── src/
│   ├── components/
│   │   └── DashboardLayout.jsx    # Main layout with sidebar navigation
│   ├── pages/
│   │   ├── Dashboard.jsx          # Main dashboard overview
│   │   ├── Clients.jsx            # Client management page
│   │   ├── Appointments.jsx       # Appointment scheduling page
│   │   ├── Sessions.jsx          # Session history page
│   │   ├── Analytics.jsx         # Analytics dashboard
│   │   └── Profile.jsx            # Profile management page
│   ├── App.jsx                    # Main app component with routing
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Features in Detail

### Dashboard
- Key performance indicators (KPIs)
- Today's appointments overview
- Recent clients list
- Quick stats with trend indicators

### Clients
- Searchable client list
- Client detail view
- Session history per client
- Contact information management

### Appointments
- Calendar and list view modes
- Appointment status management
- Date filtering
- Appointment details and notes

### Sessions
- Complete session history
- Filter by session type
- Session notes and ratings
- Revenue tracking per session

### Analytics
- Monthly revenue trends
- Weekly performance charts
- Session type breakdown
- Top clients analysis

### Profile
- Professional profile management
- Certifications display
- Availability settings
- Notification preferences

## Customization

The dashboard uses a purple/indigo color scheme by default. You can customize colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom color palette
  }
}
```

## Future Enhancements

- Backend integration for data persistence
- Real-time appointment notifications
- Payment processing integration
- Client communication tools
- Export reports functionality
- Multi-language support

## License

This project is open source and available for use.
