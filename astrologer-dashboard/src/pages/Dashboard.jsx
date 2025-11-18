import { Calendar, Users, DollarSign, TrendingUp, Clock, Star } from 'lucide-react'

const stats = [
  { label: 'Total Clients', value: '247', icon: Users, change: '+12%', color: 'text-blue-600' },
  { label: 'Upcoming Appointments', value: '18', icon: Calendar, change: '+5', color: 'text-purple-600' },
  { label: 'Monthly Revenue', value: '$12,450', icon: DollarSign, change: '+23%', color: 'text-green-600' },
  { label: 'Avg Rating', value: '4.8', icon: Star, change: '+0.2', color: 'text-yellow-600' },
]

const recentAppointments = [
  { id: 1, client: 'Sarah Johnson', time: '10:00 AM', type: 'Birth Chart Reading', status: 'confirmed' },
  { id: 2, client: 'Michael Chen', time: '2:30 PM', type: 'Relationship Reading', status: 'pending' },
  { id: 3, client: 'Emma Williams', time: '4:00 PM', type: 'Career Guidance', status: 'confirmed' },
]

const recentClients = [
  { id: 1, name: 'David Martinez', lastSession: '2 days ago', nextAppointment: 'Tomorrow' },
  { id: 2, name: 'Lisa Anderson', lastSession: '1 week ago', nextAppointment: 'Next week' },
  { id: 3, name: 'Robert Taylor', lastSession: '3 days ago', nextAppointment: 'Today' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <p className={`text-sm mt-1 ${stat.color}`}>{stat.change} from last month</p>
                </div>
                <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Appointments */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Today's Appointments</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentAppointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{appointment.client}</p>
                    <p className="text-sm text-gray-600">{appointment.type}</p>
                    <div className="flex items-center mt-2 space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{appointment.time}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    appointment.status === 'confirmed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {appointment.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Clients */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Recent Clients</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentClients.map((client) => (
                <div key={client.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
                      <span className="text-white font-semibold">{client.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{client.name}</p>
                      <p className="text-sm text-gray-600">Last session: {client.lastSession}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-purple-600">{client.nextAppointment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
