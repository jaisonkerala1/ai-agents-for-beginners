import Sidebar from '@/components/Sidebar'
import StatCard from '@/components/StatCard'
import { Phone, MessageSquare, Star, Sparkles, TrendingUp, Users } from 'lucide-react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const stats = [
  { title: 'Total Calls', value: '1,234', change: '+12%', icon: Phone, iconColor: 'text-blue-500' },
  { title: 'Messages', value: '3,456', change: '+8%', icon: MessageSquare, iconColor: 'text-green-500' },
  { title: 'Avg Rating', value: '4.8', change: '+0.2', icon: Star, iconColor: 'text-yellow-500' },
  { title: 'Active Services', value: '12', change: '+2', icon: Sparkles, iconColor: 'text-purple-500' },
]

const revenueData = [
  { month: 'Jan', revenue: 4500, calls: 120 },
  { month: 'Feb', revenue: 5200, calls: 145 },
  { month: 'Mar', revenue: 4800, calls: 138 },
  { month: 'Apr', revenue: 6100, calls: 165 },
  { month: 'May', revenue: 5500, calls: 152 },
  { month: 'Jun', revenue: 6800, calls: 180 },
]

const recentCalls = [
  { id: 1, client: 'John Doe', duration: '45 min', date: '2024-01-15', status: 'Completed', amount: '$50' },
  { id: 2, client: 'Jane Smith', duration: '30 min', date: '2024-01-15', status: 'Completed', amount: '$35' },
  { id: 3, client: 'Mike Johnson', duration: '60 min', date: '2024-01-14', status: 'Completed', amount: '$70' },
  { id: 4, client: 'Sarah Williams', duration: '45 min', date: '2024-01-14', status: 'Completed', amount: '$50' },
]

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
            <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your business.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <StatCard key={stat.title} {...stat} />
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Revenue & Calls Trend</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#8884d8" name="Revenue ($)" />
                  <Line type="monotone" dataKey="calls" stroke="#82ca9d" name="Calls" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Monthly Performance</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="revenue" fill="#8884d8" name="Revenue ($)" />
                  <Bar dataKey="calls" fill="#82ca9d" name="Calls" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Calls */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Recent Calls</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentCalls.map((call) => (
                    <tr key={call.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{call.client}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{call.duration}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{call.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {call.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{call.amount}</td>
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
