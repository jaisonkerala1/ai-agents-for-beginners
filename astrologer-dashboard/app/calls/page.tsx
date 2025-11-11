import Sidebar from '@/components/Sidebar'
import { Phone, PhoneIncoming, PhoneOutgoing, PhoneMissed, Calendar, Clock, Search, Filter } from 'lucide-react'

const calls = [
  { id: 1, client: 'John Doe', phone: '+1 234-567-8900', type: 'incoming', duration: '45:32', date: '2024-01-15 10:30 AM', status: 'completed', amount: '$50' },
  { id: 2, client: 'Jane Smith', phone: '+1 234-567-8901', type: 'outgoing', duration: '30:15', date: '2024-01-15 09:15 AM', status: 'completed', amount: '$35' },
  { id: 3, client: 'Mike Johnson', phone: '+1 234-567-8902', type: 'incoming', duration: '60:00', date: '2024-01-14 03:45 PM', status: 'completed', amount: '$70' },
  { id: 4, client: 'Sarah Williams', phone: '+1 234-567-8903', type: 'missed', duration: '-', date: '2024-01-14 02:20 PM', status: 'missed', amount: '-' },
  { id: 5, client: 'David Brown', phone: '+1 234-567-8904', type: 'incoming', duration: '25:10', date: '2024-01-14 11:00 AM', status: 'completed', amount: '$30' },
  { id: 6, client: 'Emily Davis', phone: '+1 234-567-8905', type: 'outgoing', duration: '50:25', date: '2024-01-13 04:30 PM', status: 'completed', amount: '$60' },
]

const upcomingCalls = [
  { id: 1, client: 'Robert Wilson', phone: '+1 234-567-8906', date: '2024-01-16 02:00 PM', service: 'Birth Chart Reading' },
  { id: 2, client: 'Lisa Anderson', phone: '+1 234-567-8907', date: '2024-01-16 04:00 PM', service: 'Love Compatibility' },
  { id: 3, client: 'Tom Martinez', phone: '+1 234-567-8908', date: '2024-01-17 10:00 AM', service: 'Career Guidance' },
]

export default function CallsPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Call Management</h1>
            <p className="text-gray-600 mt-2">Manage all your calls and schedule new appointments</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Calls</p>
                  <p className="text-2xl font-bold text-gray-900">1,234</p>
                </div>
                <Phone className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-green-600">1,180</p>
                </div>
                <PhoneIncoming className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Missed</p>
                  <p className="text-2xl font-bold text-red-600">54</p>
                </div>
                <PhoneMissed className="h-8 w-8 text-red-500" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Upcoming</p>
                  <p className="text-2xl font-bold text-purple-600">12</p>
                </div>
                <Calendar className="h-8 w-8 text-purple-500" />
              </div>
            </div>
          </div>

          {/* Upcoming Calls */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 mb-8">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Upcoming Calls</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {upcomingCalls.map((call) => (
                  <div key={call.id} className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-purple-500 rounded-full">
                        <Calendar className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{call.client}</p>
                        <p className="text-sm text-gray-600">{call.phone}</p>
                        <p className="text-sm text-purple-600">{call.service}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{call.date}</p>
                      <button className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call History */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Call History</h2>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search calls..."
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
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {calls.map((call) => (
                    <tr key={call.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{call.client}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{call.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {call.type === 'incoming' && <PhoneIncoming className="h-5 w-5 text-green-500" />}
                        {call.type === 'outgoing' && <PhoneOutgoing className="h-5 w-5 text-blue-500" />}
                        {call.type === 'missed' && <PhoneMissed className="h-5 w-5 text-red-500" />}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{call.duration}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{call.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          call.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {call.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{call.amount}</td>
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
