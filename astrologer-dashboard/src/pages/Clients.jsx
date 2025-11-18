import { useState } from 'react'
import { Search, Plus, Mail, Phone, Calendar, Star } from 'lucide-react'

const clients = [
  { 
    id: 1, 
    name: 'Sarah Johnson', 
    email: 'sarah.j@email.com', 
    phone: '+1 (555) 123-4567',
    totalSessions: 12,
    lastSession: '2024-01-15',
    nextAppointment: '2024-01-20',
    rating: 4.9,
    status: 'active'
  },
  { 
    id: 2, 
    name: 'Michael Chen', 
    email: 'michael.c@email.com', 
    phone: '+1 (555) 234-5678',
    totalSessions: 8,
    lastSession: '2024-01-10',
    nextAppointment: '2024-01-22',
    rating: 4.7,
    status: 'active'
  },
  { 
    id: 3, 
    name: 'Emma Williams', 
    email: 'emma.w@email.com', 
    phone: '+1 (555) 345-6789',
    totalSessions: 5,
    lastSession: '2024-01-08',
    nextAppointment: null,
    rating: 5.0,
    status: 'active'
  },
  { 
    id: 4, 
    name: 'David Martinez', 
    email: 'david.m@email.com', 
    phone: '+1 (555) 456-7890',
    totalSessions: 3,
    lastSession: '2024-01-12',
    nextAppointment: '2024-01-19',
    rating: 4.8,
    status: 'active'
  },
  { 
    id: 5, 
    name: 'Lisa Anderson', 
    email: 'lisa.a@email.com', 
    phone: '+1 (555) 567-8901',
    totalSessions: 15,
    lastSession: '2024-01-05',
    nextAppointment: '2024-01-25',
    rating: 4.6,
    status: 'active'
  },
]

export default function Clients() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedClient, setSelectedClient] = useState(null)

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Clients</h1>
          <p className="text-gray-600 mt-1">Manage your client relationships</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          <Plus className="w-5 h-5" />
          <span>Add Client</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search clients by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Client List */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              All Clients ({filteredClients.length})
            </h2>
          </div>
          <div className="divide-y divide-gray-200">
            {filteredClients.map((client) => (
              <div
                key={client.id}
                onClick={() => setSelectedClient(client)}
                className={`p-6 cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedClient?.id === client.id ? 'bg-purple-50' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        {client.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{client.name}</p>
                      <p className="text-sm text-gray-600">{client.email}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-xs text-gray-500">
                          {client.totalSessions} sessions
                        </span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          <span className="text-xs text-gray-600">{client.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    client.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {client.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Details */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Client Details</h2>
          </div>
          {selectedClient ? (
            <div className="p-6 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
                  <span className="text-white font-semibold text-2xl">
                    {selectedClient.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{selectedClient.name}</h3>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm text-gray-600">{selectedClient.rating} rating</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span>{selectedClient.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span>{selectedClient.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Total Sessions: {selectedClient.totalSessions}</p>
                    <p className="text-sm text-gray-600">Last Session: {selectedClient.lastSession}</p>
                    {selectedClient.nextAppointment && (
                      <p className="text-sm text-purple-600 font-medium">
                        Next: {selectedClient.nextAppointment}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Schedule Appointment
                </button>
              </div>
            </div>
          ) : (
            <div className="p-6 text-center text-gray-500">
              Select a client to view details
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
