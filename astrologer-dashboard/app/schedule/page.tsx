import Sidebar from '@/components/Sidebar'
import { Calendar, Clock, User, Phone, Plus, ChevronLeft, ChevronRight } from 'lucide-react'

const appointments = [
  { id: 1, client: 'John Doe', service: 'Birth Chart Reading', time: '10:00 AM', duration: 45, status: 'confirmed', phone: '+1 234-567-8900' },
  { id: 2, client: 'Jane Smith', service: 'Love Compatibility', time: '11:00 AM', duration: 60, status: 'confirmed', phone: '+1 234-567-8901' },
  { id: 3, client: 'Mike Johnson', service: 'Career Guidance', time: '02:00 PM', duration: 50, status: 'pending', phone: '+1 234-567-8902' },
  { id: 4, client: 'Sarah Williams', service: 'Yearly Forecast', time: '03:30 PM', duration: 90, status: 'confirmed', phone: '+1 234-567-8903' },
  { id: 5, client: 'David Brown', service: 'Daily Horoscope', time: '04:30 PM', duration: 15, status: 'confirmed', phone: '+1 234-567-8904' },
]

const timeSlots = Array.from({ length: 12 }, (_, i) => {
  const hour = 9 + i
  return `${hour}:00 ${hour >= 12 ? 'PM' : 'AM'}`
})

export default function SchedulePage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Schedule</h1>
              <p className="text-gray-600 mt-2">Manage your appointments and availability</p>
            </div>
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center space-x-2 transition">
              <Plus className="h-5 w-5" />
              <span>New Appointment</span>
            </button>
          </div>

          {/* Calendar View */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Calendar */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">January 2024</h2>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
                    Today
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-700 py-2">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 35 }, (_, i) => {
                  const date = i + 1
                  const isToday = date === 15
                  const hasAppointment = [15, 16, 17, 18, 19].includes(date)
                  return (
                    <div
                      key={i}
                      className={`aspect-square flex items-center justify-center text-sm rounded-lg cursor-pointer transition ${
                        isToday
                          ? 'bg-purple-600 text-white font-bold'
                          : hasAppointment
                          ? 'bg-purple-100 text-purple-900 hover:bg-purple-200'
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {date <= 31 ? date : ''}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Today's Appointments */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Today's Appointments</h2>
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold text-gray-900">{appointment.client}</p>
                        <p className="text-sm text-gray-600">{appointment.service}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {appointment.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-3">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{appointment.time}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{appointment.duration} min</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 mt-3">
                      <button className="flex-1 px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm transition">
                        View Details
                      </button>
                      <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                        <Phone className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Weekly Schedule */}
          <div className="mt-8 bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Weekly Schedule</h2>
            <div className="overflow-x-auto">
              <div className="min-w-full">
                <div className="grid grid-cols-8 gap-2">
                  <div className="font-medium text-sm text-gray-700 py-2">Time</div>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <div key={day} className="font-medium text-sm text-gray-700 py-2 text-center">
                      {day}
                    </div>
                  ))}
                  {timeSlots.map((time) => (
                    <>
                      <div key={`time-${time}`} className="text-sm text-gray-600 py-2 border-t border-gray-200">
                        {time}
                      </div>
                      {Array.from({ length: 7 }).map((_, dayIndex) => {
                        const hasAppointment = Math.random() > 0.85
                        return (
                          <div
                            key={`${time}-${dayIndex}`}
                            className={`border-t border-gray-200 py-2 min-h-[60px] ${
                              hasAppointment ? 'bg-purple-50 border-purple-200' : ''
                            }`}
                          >
                            {hasAppointment && (
                              <div className="p-2 bg-purple-600 text-white rounded text-xs">
                                <p className="font-semibold">John Doe</p>
                                <p className="text-purple-100">Birth Chart</p>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
