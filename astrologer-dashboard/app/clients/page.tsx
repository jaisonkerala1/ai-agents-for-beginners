import Sidebar from '@/components/Sidebar'
import { Users, Search, Filter, Mail, Phone, Calendar, Star, TrendingUp } from 'lucide-react'

const clients = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 234-567-8900',
    totalCalls: 12,
    totalSpent: 600,
    lastContact: '2024-01-15',
    rating: 5,
    status: 'active'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@email.com',
    phone: '+1 234-567-8901',
    totalCalls: 8,
    totalSpent: 420,
    lastContact: '2024-01-14',
    rating: 5,
    status: 'active'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike.j@email.com',
    phone: '+1 234-567-8902',
    totalCalls: 5,
    totalSpent: 350,
    lastContact: '2024-01-10',
    rating: 4,
    status: 'active'
  },
  {
    id: 4,
    name: 'Sarah Williams',
    email: 'sarah.w@email.com',
    phone: '+1 234-567-8903',
    totalCalls: 15,
    totalSpent: 900,
    lastContact: '2024-01-13',
    rating: 5,
    status: 'vip'
  },
  {
    id: 5,
    name: 'David Brown',
    email: 'david.b@email.com',
    phone: '+1 234-567-8904',
    totalCalls: 3,
    totalSpent: 180,
    lastContact: '2024-01-08',
    rating: 4,
    status: 'active'
  },
]

export default function ClientsPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Clients</h1>
            <p className="text-gray-600 mt-2">Manage your client database</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Clients</p>
                  <p className="text-2xl font-bold text-gray-900">1,247</p>
                </div>
                <Users className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Clients</p>
                  <p className="text-2xl font-bold text-green-600">892</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">VIP Clients</p>
                  <p className="text-2xl font-bold text-purple-600">45</p>
                </div>
                <Star className="h-8 w-8 text-purple-500 fill-purple-500" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">New This Month</p>
                  <p className="text-2xl font-bold text-orange-600">127</p>
                </div>
                <Calendar className="h-8 w-8 text-orange-500" />
              </div>
            </div>
          </div>

          {/* Clients Table */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">All Clients</h2>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search clients..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
                    <Filter className="h-4 w-4" />
                    <span>Filter</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Calls</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Spent</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {clients.map((client) => (
                    <tr key={client.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-semibold">
                            {client.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{client.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 flex items-center space-x-1">
                          <Mail className="h-4 w-4 text-gray-400" />
                          <span>{client.email}</span>
                        </div>
                        <div className="text-sm text-gray-500 flex items-center space-x-1 mt-1">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <span>{client.phone}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{client.totalCalls}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${client.totalSpent}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-sm text-gray-900">{client.rating}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{client.lastContact}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          client.status === 'vip' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'
                        }`}>
                          {client.status.toUpperCase()}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-purple-600 hover:text-purple-900">View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
