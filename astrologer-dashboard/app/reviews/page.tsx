import Sidebar from '@/components/Sidebar'
import { Star, Filter, Search, TrendingUp, MessageSquare } from 'lucide-react'

const reviews = [
  {
    id: 1,
    client: 'John Doe',
    rating: 5,
    comment: 'Excellent reading! The astrologer provided deep insights into my birth chart and helped me understand my life path better. Highly recommended!',
    date: '2024-01-15',
    service: 'Birth Chart Reading',
    helpful: 12
  },
  {
    id: 2,
    client: 'Jane Smith',
    rating: 5,
    comment: 'Amazing experience! The love compatibility reading was spot on and gave me clarity about my relationship.',
    date: '2024-01-14',
    service: 'Love Compatibility',
    helpful: 8
  },
  {
    id: 3,
    client: 'Mike Johnson',
    rating: 4,
    comment: 'Good reading overall. The career guidance was helpful, though I wish it was a bit more detailed.',
    date: '2024-01-13',
    service: 'Career Guidance',
    helpful: 5
  },
  {
    id: 4,
    client: 'Sarah Williams',
    rating: 5,
    comment: 'Outstanding service! The astrologer is very knowledgeable and patient. The reading exceeded my expectations.',
    date: '2024-01-12',
    service: 'Birth Chart Reading',
    helpful: 15
  },
  {
    id: 5,
    client: 'David Brown',
    rating: 4,
    comment: 'Great reading! Very insightful and professional. Would definitely book again.',
    date: '2024-01-11',
    service: 'Daily Horoscope',
    helpful: 7
  },
  {
    id: 6,
    client: 'Emily Davis',
    rating: 5,
    comment: 'Perfect! The reading was accurate and the astrologer explained everything clearly. Thank you!',
    date: '2024-01-10',
    service: 'Love Compatibility',
    helpful: 10
  },
]

const stats = {
  totalReviews: 1247,
  averageRating: 4.8,
  fiveStar: 892,
  fourStar: 245,
  threeStar: 78,
  twoStar: 24,
  oneStar: 8,
}

export default function ReviewsPage() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Reviews & Ratings</h1>
            <p className="text-gray-600 mt-2">Manage and respond to client reviews</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Reviews</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalReviews.toLocaleString()}</p>
                </div>
                <MessageSquare className="h-10 w-10 text-blue-500" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Average Rating</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <p className="text-3xl font-bold text-gray-900">{stats.averageRating}</p>
                    <div className="flex">
                      {renderStars(Math.round(stats.averageRating))}
                    </div>
                  </div>
                </div>
                <Star className="h-10 w-10 text-yellow-500 fill-yellow-500" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">5 Star Reviews</p>
                  <p className="text-3xl font-bold text-green-600">{stats.fiveStar}</p>
                  <p className="text-sm text-gray-500 mt-1">
                    {Math.round((stats.fiveStar / stats.totalReviews) * 100)}% of total
                  </p>
                </div>
                <TrendingUp className="h-10 w-10 text-green-500" />
              </div>
            </div>
          </div>

          {/* Rating Distribution */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Rating Distribution</h2>
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((rating) => {
                const count = stats[rating === 5 ? 'fiveStar' : rating === 4 ? 'fourStar' : rating === 3 ? 'threeStar' : rating === 2 ? 'twoStar' : 'oneStar'] as number
                const percentage = (count / stats.totalReviews) * 100
                return (
                  <div key={rating} className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 w-20">
                      <span className="text-sm font-medium text-gray-700">{rating}</span>
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    </div>
                    <div className="flex-1 bg-gray-200 rounded-full h-4">
                      <div
                        className="bg-yellow-400 h-4 rounded-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 w-16 text-right">{count}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Reviews List */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">All Reviews</h2>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search reviews..."
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
            <div className="divide-y divide-gray-200">
              {reviews.map((review) => (
                <div key={review.id} className="p-6 hover:bg-gray-50 transition">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-semibold">
                        {review.client.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{review.client}</p>
                        <p className="text-sm text-gray-500">{review.service}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-3">{review.comment}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button className="text-sm text-purple-600 hover:text-purple-800 font-medium">
                        Reply
                      </button>
                      <button className="text-sm text-gray-600 hover:text-gray-800">
                        Helpful ({review.helpful})
                      </button>
                    </div>
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      Verified Purchase
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
