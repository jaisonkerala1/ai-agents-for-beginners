'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Phone, 
  MessageSquare, 
  Star, 
  Settings, 
  Sparkles,
  Users,
  Calendar
} from 'lucide-react'
import clsx from 'clsx'

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Calls', href: '/calls', icon: Phone },
  { name: 'Messages', href: '/messages', icon: MessageSquare },
  { name: 'Reviews', href: '/reviews', icon: Star },
  { name: 'Services', href: '/services', icon: Sparkles },
  { name: 'Clients', href: '/clients', icon: Users },
  { name: 'Schedule', href: '/schedule', icon: Calendar },
  { name: 'Settings', href: '/settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-64 flex-col bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900 text-white">
      <div className="flex h-16 items-center justify-center border-b border-purple-700 px-4">
        <div className="flex items-center space-x-2">
          <Sparkles className="h-8 w-8 text-yellow-300" />
          <span className="text-xl font-bold">AstroDash</span>
        </div>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                'group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all',
                isActive
                  ? 'bg-white/20 text-white shadow-lg'
                  : 'text-purple-100 hover:bg-white/10 hover:text-white'
              )}
            >
              <item.icon
                className={clsx(
                  'mr-3 h-5 w-5 flex-shrink-0',
                  isActive ? 'text-yellow-300' : 'text-purple-300 group-hover:text-yellow-300'
                )}
              />
              {item.name}
            </Link>
          )
        })}
      </nav>
      <div className="border-t border-purple-700 p-4">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 flex items-center justify-center">
            <span className="text-purple-900 font-bold text-lg">A</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">Astrologer Name</p>
            <p className="text-xs text-purple-300 truncate">Premium Member</p>
          </div>
        </div>
      </div>
    </div>
  )
}
