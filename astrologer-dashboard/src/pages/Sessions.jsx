import { useState } from 'react'
import { BookOpen, Calendar, User, Clock, Search, Filter, Star } from 'lucide-react'

const sessions = [
  {
    id: 1,
    client: 'Sarah Johnson',
    date: '2024-01-15',
    time: '10:00 AM',
    type: 'Birth Chart Reading',
    duration: '60 min',
    notes: 'Discussed career path and upcoming opportunities. Client showed interest in relocation.',
    rating: 5,
    revenue: 150
  },
  {
    id: 2,
    client: 'Michael Chen',
    date: '2024-01-10',
    time: '2:30 PM',
    type: 'Relationship Reading',
    duration: '45 min',
    notes: 'Focused on compatibility analysis. Provided guidance on communication patterns.',
    rating: 4,
    revenue: 120
  },
  {
    id: 3,
    client: 'Emma Williams',
    date: '2024-01-08',
    time: '11:00 AM',
    type: 'Career Guidance',
    duration: '60 min',
    notes: 'Explored career transition options. Client felt empowered and clear about next steps.',
    rating: 5,
    revenue: 150
  },
  {
    id: 4,
    client: 'David Martinez',
    date: '2024-01-12',
    time: '3:00 PM',
    type: 'Yearly Forecast',
    duration: '90 min',
    notes: 'Comprehensive yearly overview. Highlighted key months for major decisions.',
    rating: 5,
    revenue: 200
  },
  {
    id: 5,
    client: 'Lisa Anderson',
    date: '2024-01-05',
    time: '10:30 AM',
    type: 'Birth Chart Reading',
    duration: '60 min',
    notes: 'Deep dive into natal chart. Client gained new insights about personality traits.',
    rating: 4,
    revenue: 150
  },
]

const sessionTypes = ['All', 'Birth Chart Reading', 'Relationship Reading', 'Career Guidance', 'Yearly Forecast']

export default function Sessions() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState('All')
  const [selectedSession, setSelectedSession] = useState(null)

  const filteredSessions = sessions.filter(session => {
    const matchesSearch = session.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         session.notes.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = selectedType === 'All' || session.type === selectedType
    return matchesSearch && matchesType
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Sessions</h1>
          <p className="text-gray-600 mt-1">View and manage your reading history</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search sessions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            {sessionTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedType === type
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sessions List */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Session History ({filteredSessions.length})
            </h2>
          </div>
          <div className="divide-y divide-gray-200">
            {filteredSessions.map((session) => (
              <div
                key={session.id}
                onClick={() => setSelectedSession(session)}
                className={`p-6 cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedSession?.id === session.id ? 'bg-purple-50' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-gray-900">{session.client}</h3>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded">
                        {session.type}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{session.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{session.time} • {session.duration}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">{session.notes}</p>
                    <div className="flex items-center space-x-1 mt-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < session.rating
                              ? 'text-yellow-500 fill-yellow-500'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="ml-4 text-right">
                    <p className="text-lg font-bold text-green-600">${session.revenue}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Session Details */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Session Details</h2>
          </div>
          {selectedSession ? (
            <div className="p-6 space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{selectedSession.client}</h3>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded">
                    {selectedSession.type}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span>{selectedSession.date}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span>{selectedSession.time} • {selectedSession.duration}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    <span className="font-medium">{selectedSession.rating} / 5.0</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <span className="text-lg font-bold text-green-600">${selectedSession.revenue}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Session Notes</h4>
                <p className="text-gray-600 leading-relaxed">{selectedSession.notes}</p>
              </div>

              <div className="pt-4 border-t border-gray-200 space-y-2">
                <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Edit Notes
                </button>
                <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                  Schedule Follow-up
                </button>
              </div>
            </div>
          ) : (
            <div className="p-6 text-center text-gray-500">
              Select a session to view details
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
