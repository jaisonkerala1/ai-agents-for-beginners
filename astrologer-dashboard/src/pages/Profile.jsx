import { User, Mail, Phone, MapPin, Calendar, Award, Edit, Save } from 'lucide-react'
import { useState } from 'react'

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'Astrologer Name',
    email: 'astrologer@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    specialization: 'Natal Charts, Relationship Readings, Career Guidance',
    experience: '15 years',
    bio: 'Professional astrologer with over 15 years of experience helping clients navigate life\'s challenges through the wisdom of the stars. Specializing in natal chart analysis, relationship compatibility, and career guidance.',
    certifications: [
      'Certified Professional Astrologer (CPA)',
      'International Society for Astrological Research (ISAR)',
      'National Council for Geocosmic Research (NCGR)'
    ],
    languages: ['English', 'Spanish', 'French'],
    availability: 'Monday - Friday: 9 AM - 6 PM EST',
  })

  const handleSave = () => {
    setIsEditing(false)
    // In a real app, this would save to a backend
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
          <p className="text-gray-600 mt-1">Manage your professional profile</p>
        </div>
        <button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          {isEditing ? (
            <>
              <Save className="w-5 h-5" />
              <span>Save Changes</span>
            </>
          ) : (
            <>
              <Edit className="w-5 h-5" />
              <span>Edit Profile</span>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-4xl">{profile.name.charAt(0)}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
              <p className="text-gray-600 mt-1">Professional Astrologer</p>
              <div className="mt-4 flex items-center justify-center space-x-1">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-gray-600 text-sm ml-2">4.8 (247 reviews)</span>
              </div>
            </div>

            <div className="mt-6 space-y-4 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-3 text-gray-700">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-sm">{profile.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-sm">{profile.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-sm">{profile.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span className="text-sm">{profile.experience}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Bio */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">About</h3>
            {isEditing ? (
              <textarea
                value={profile.bio}
                onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                rows={4}
              />
            ) : (
              <p className="text-gray-600 leading-relaxed">{profile.bio}</p>
            )}
          </div>

          {/* Specialization */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialization</h3>
            {isEditing ? (
              <input
                type="text"
                value={profile.specialization}
                onChange={(e) => setProfile({ ...profile, specialization: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-600">{profile.specialization}</p>
            )}
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Award className="w-5 h-5 text-purple-600" />
              <h3 className="text-xl font-semibold text-gray-900">Certifications</h3>
            </div>
            <ul className="space-y-2">
              {profile.certifications.map((cert, index) => (
                <li key={index} className="flex items-center space-x-2 text-gray-700">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {profile.languages.map((lang, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Availability</h3>
            {isEditing ? (
              <input
                type="text"
                value={profile.availability}
                onChange={(e) => setProfile({ ...profile, availability: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-600">{profile.availability}</p>
            )}
          </div>

          {/* Settings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Email Notifications</p>
                  <p className="text-sm text-gray-600">Receive email updates about appointments</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">SMS Notifications</p>
                  <p className="text-sm text-gray-600">Receive SMS reminders for appointments</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
