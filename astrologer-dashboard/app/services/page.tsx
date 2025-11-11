import Sidebar from '@/components/Sidebar'
import { Sparkles, Plus, Edit, Trash2, Star, Clock, DollarSign, TrendingUp } from 'lucide-react'

const services = [
  {
    id: 1,
    name: 'Birth Chart Reading',
    description: 'Comprehensive analysis of your natal chart including planetary positions, aspects, and houses.',
    price: 50,
    duration: 45,
    category: 'Chart Reading',
    rating: 4.9,
    totalBookings: 234,
    status: 'active',
    image: '🌟'
  },
  {
    id: 2,
    name: 'Love Compatibility',
    description: 'Detailed compatibility analysis between two birth charts to understand relationship dynamics.',
    price: 70,
    duration: 60,
    category: 'Relationship',
    rating: 4.8,
    totalBookings: 189,
    status: 'active',
    image: '💕'
  },
  {
    id: 3,
    name: 'Career Guidance',
    description: 'Astrological insights into your career path, best opportunities, and timing for career moves.',
    price: 60,
    duration: 50,
    category: 'Career',
    rating: 4.7,
    totalBookings: 156,
    status: 'active',
    image: '💼'
  },
  {
    id: 4,
    name: 'Daily Horoscope',
    description: 'Personalized daily horoscope based on your sun sign and current planetary transits.',
    price: 15,
    duration: 15,
    category: 'Horoscope',
    rating: 4.6,
    totalBookings: 567,
    status: 'active',
    image: '📅'
  },
  {
    id: 5,
    name: 'Remedial Astrology',
    description: 'Guidance on remedies and solutions for astrological challenges in your chart.',
    price: 80,
    duration: 60,
    category: 'Remedies',
    rating: 4.9,
    totalBookings: 98,
    status: 'active',
    image: '🔮'
  },
  {
    id: 6,
    name: 'Yearly Forecast',
    description: 'Complete yearly forecast covering all major life areas for the coming year.',
    price: 100,
    duration: 90,
    category: 'Forecast',
    rating: 4.8,
    totalBookings: 145,
    status: 'active',
    image: '📊'
  },
]

const stats = {
  totalServices: services.length,
  activeServices: services.filter(s => s.status === 'active').length,
  totalRevenue: 45678,
  avgRating: 4.8,
}

export default function ServicesPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Services Management</h1>
              <p className="text-gray-600 mt-2">Manage your astrology services and offerings</p>
            </div>
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center space-x-2 transition">
              <Plus className="h-5 w-5" />
              <span>Add New Service</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Services</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalServices}</p>
                </div>
                <Sparkles className="h-8 w-8 text-purple-500" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Services</p>
                  <p className="text-2xl font-bold text-green-600">{stats.activeServices}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">${stats.totalRevenue.toLocaleString()}</p>
                </div>
                <DollarSign className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg Rating</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <p className="text-2xl font-bold text-gray-900">{stats.avgRating}</p>
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  </div>
                </div>
                <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{service.image}</div>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      service.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {service.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-medium text-gray-900">{service.category}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        Duration:
                      </span>
                      <span className="font-medium text-gray-900">{service.duration} min</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        Price:
                      </span>
                      <span className="font-bold text-purple-600">${service.price}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 flex items-center">
                        <Star className="h-4 w-4 mr-1 text-yellow-500 fill-yellow-500" />
                        Rating:
                      </span>
                      <span className="font-medium text-gray-900">{service.rating}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Bookings:</span>
                      <span className="font-medium text-gray-900">{service.totalBookings}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
                    <button className="flex-1 px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 flex items-center justify-center space-x-2 transition">
                      <Edit className="h-4 w-4" />
                      <span>Edit</span>
                    </button>
                    <button className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
