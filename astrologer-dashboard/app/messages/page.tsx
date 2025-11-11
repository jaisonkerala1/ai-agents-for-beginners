import Sidebar from '@/components/Sidebar'
import { MessageSquare, Send, Search, Filter, Clock, Check, CheckCheck } from 'lucide-react'

const conversations = [
  { 
    id: 1, 
    client: 'John Doe', 
    lastMessage: 'Thank you for the reading! It was very insightful.', 
    time: '2 hours ago',
    unread: 2,
    avatar: 'JD'
  },
  { 
    id: 2, 
    client: 'Jane Smith', 
    lastMessage: 'Can you explain more about my career prospects?', 
    time: '5 hours ago',
    unread: 0,
    avatar: 'JS'
  },
  { 
    id: 3, 
    client: 'Mike Johnson', 
    lastMessage: 'I have a question about my birth chart', 
    time: '1 day ago',
    unread: 1,
    avatar: 'MJ'
  },
  { 
    id: 4, 
    client: 'Sarah Williams', 
    lastMessage: 'When is the best time for me to start a new project?', 
    time: '2 days ago',
    unread: 0,
    avatar: 'SW'
  },
]

const messages = [
  { id: 1, sender: 'client', text: 'Hello, I would like to know more about my birth chart reading.', time: '10:30 AM' },
  { id: 2, sender: 'you', text: 'Hello! I\'d be happy to help you with your birth chart reading. Do you have your birth details ready?', time: '10:32 AM' },
  { id: 3, sender: 'client', text: 'Yes, I was born on March 15, 1990 at 3:45 PM in New York.', time: '10:35 AM' },
  { id: 4, sender: 'you', text: 'Perfect! Based on your birth chart, you have a strong presence of fire signs which indicates...', time: '10:40 AM' },
  { id: 5, sender: 'client', text: 'Thank you for the reading! It was very insightful.', time: '11:15 AM' },
]

export default function MessagesPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
            <p className="text-gray-600 mt-2">Manage conversations with your clients</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
            {/* Conversations List */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 flex flex-col">
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Conversations</h2>
                  <button className="px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-sm">
                    New Chat
                  </button>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex-1 overflow-y-auto">
                {conversations.map((conv) => (
                  <div
                    key={conv.id}
                    className="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-semibold">
                        {conv.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900">{conv.client}</p>
                          <span className="text-xs text-gray-500">{conv.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 truncate mt-1">{conv.lastMessage}</p>
                        {conv.unread > 0 && (
                          <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-purple-600 rounded-full mt-1">
                            {conv.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Window */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md border border-gray-200 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-semibold">
                      JD
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">John Doe</p>
                      <p className="text-xs text-gray-500">Online</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
                    View Profile
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'you' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        msg.sender === 'you'
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <div className={`flex items-center justify-end mt-1 space-x-1 ${
                        msg.sender === 'you' ? 'text-purple-200' : 'text-gray-500'
                      }`}>
                        <span className="text-xs">{msg.time}</span>
                        {msg.sender === 'you' && <CheckCheck className="h-3 w-3" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <button className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
