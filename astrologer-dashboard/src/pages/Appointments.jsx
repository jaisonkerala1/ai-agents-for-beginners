import { useState } from 'react'
import { Calendar, Clock, User, Plus, CheckCircle, XCircle, AlertCircle } from 'lucide-react'

const appointments = [
  {
    id: 1,
    client: 'Sarah Johnson',
    date: '2024-01-20',
    time: '10:00 AM',
    type: 'Birth Chart Reading',
    duration: '60 min',
    status: 'confirmed',
    notes: 'Follow-up session'
  },
  {
    id: 2,
    client: 'Michael Chen',
    date: '2024-01-20',
    time: '2:30 PM',
    type: 'Relationship Reading',
    duration: '45 min',
    status: 'pending',
    notes: 'New client'
  },
  {
    id: 3,
    client: 'Emma Williams',
    date: '2024-01-21',
    time: '11:00 AM',
    type: 'Career Guidance',
    duration: '60 min',
    status: 'confirmed',
    notes: ''
  },
  {
    id: 4,
    client: 'David Martinez',
    date: '2024-01-21',
    time: '3:00 PM',
    type: 'Yearly Forecast',
    duration: '90 min',
    status: 'confirmed',
    notes: 'Annual review'
  },
  {
    id: 5,
    client: 'Lisa Anderson',
    date: '2024-01-22',
    time: '10:30 AM',
    type: 'Birth Chart Reading',
    duration: '60 min',
    status: 'pending',
    notes: ''
  },
]

const statusColors = {
  confirmed: { bg: 'bg-green-100', text: 'text-green-800', icon: CheckCircle },
  pending: { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: AlertCircle },
  cancelled: { bg: 'bg-red-100', text: 'text-red-800', icon: XCircle },
}

export default function Appointments() {
  const [selectedDate, setSelectedDate] = useState('2024-01-20')
  const [viewMode, setViewMode] = useState('list') // 'list' or 'calendar'

  const filteredAppointments = appointments.filter(apt => apt.date === selectedDate)

  const groupedByDate = appointments.reduce((acc, apt) => {
    if (!acc[apt.date]) {
      acc[apt.date] = []
    }
    acc[apt.date].push(apt)
    return acc
  }, {})

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
          <p className="text-gray-600 mt-1">Manage your schedule and bookings</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          <Plus className="w-5 h-5" />
          <span>New Appointment</span>
        </button>
      </div>

      {/* Calendar View */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Calendar</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              List View
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                viewMode === 'calendar' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              Calendar View
            </button>
          </div>
        </div>

        {viewMode === 'list' ? (
          <div className="space-y-4">
            {Object.entries(groupedByDate).map(([date, apts]) => (
              <div key={date} className="border border-gray-200 rounded-lg">
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">{date}</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {apts.map((apt) => {
                    const StatusIcon = statusColors[apt.status].icon
                    return (
                      <div key={apt.id} className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2 text-gray-600">
                              <Clock className="w-4 h-4" />
                              <span className="font-medium">{apt.time}</span>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">{apt.client}</p>
                              <p className="text-sm text-gray-600">{apt.type} • {apt.duration}</p>
                              {apt.notes && (
                                <p className="text-xs text-gray-500 mt-1">{apt.notes}</p>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${
                              statusColors[apt.status].bg
                            } ${statusColors[apt.status].text}`}>
                              <StatusIcon className="w-3 h-3" />
                              <span>{apt.status}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-7 gap-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center text-sm font-medium text-gray-600 py-2">
                {day}
              </div>
            ))}
            {Array.from({ length: 35 }).map((_, idx) => {
              const date = new Date(2024, 0, idx + 1)
              const dateStr = date.toISOString().split('T')[0]
              const dayAppointments = groupedByDate[dateStr] || []
              const isSelected = dateStr === selectedDate
              
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedDate(dateStr)}
                  className={`p-2 rounded-lg border-2 transition-colors ${
                    isSelected
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-sm font-medium text-gray-900">{date.getDate()}</div>
                  {dayAppointments.length > 0 && (
                    <div className="mt-1 flex justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div>
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        )}
      </div>

      {/* Selected Date Appointments */}
      {selectedDate && filteredAppointments.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Appointments for {selectedDate}
            </h2>
          </div>
          <div className="p-6 space-y-4">
            {filteredAppointments.map((apt) => {
              const StatusIcon = statusColors[apt.status].icon
              return (
                <div key={apt.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Clock className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{apt.client}</p>
                      <p className="text-sm text-gray-600">{apt.type}</p>
                      <p className="text-xs text-gray-500 mt-1">{apt.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${
                      statusColors[apt.status].bg
                    } ${statusColors[apt.status].text}`}>
                      <StatusIcon className="w-3 h-3" />
                      <span>{apt.status}</span>
                    </span>
                    <button className="px-4 py-2 text-sm text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
