import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Stat {
  label: string
  value: string
  change: number
  icon: string
  color: string
}

interface ChartData {
  month: string
  bookings: number
  revenue: number
}

export default function AnalyticsDashboard() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeTab, setActiveTab] = useState<'overview' | 'fleet' | 'customers'>('overview')
  const [liveVisitors, setLiveVisitors] = useState(127)

  // Simulate live visitor updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveVisitors(prev => {
        const change = Math.floor(Math.random() * 10) - 5
        return Math.max(50, Math.min(300, prev + change))
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const stats: Stat[] = [
    {
      label: 'Total Bookings',
      value: '1,234',
      change: 12.5,
      icon: '📅',
      color: 'from-green-500 to-green-600'
    },
    {
      label: 'Revenue This Month',
      value: 'AED 2.8M',
      change: 18.2,
      icon: '💰',
      color: 'from-blue-500 to-blue-600'
    },
    {
      label: 'Customer Satisfaction',
      value: '4.9/5.0',
      change: 2.1,
      icon: '⭐',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      label: 'Fleet Utilization',
      value: '87%',
      change: 5.3,
      icon: '🚗',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const fleetPerformance = [
    { model: 'Phantom', bookings: 234, utilization: 92, revenue: 'AED 585K' },
    { model: 'Cullinan', bookings: 189, utilization: 85, revenue: 'AED 529K' },
    { model: 'Ghost', bookings: 156, utilization: 78, revenue: 'AED 343K' },
    { model: 'Dawn', bookings: 145, utilization: 83, revenue: 'AED 348K' },
    { model: 'Wraith', bookings: 112, utilization: 71, revenue: 'AED 258K' }
  ]

  const topDestinations = [
    { name: 'Burj Khalifa', visits: 456, percentage: 37 },
    { name: 'Palm Jumeirah', visits: 389, percentage: 31 },
    { name: 'Dubai Marina', visits: 234, percentage: 19 },
    { name: 'JBR Beach', visits: 167, percentage: 13 }
  ]

  const chartData: ChartData[] = [
    { month: 'Jan', bookings: 145, revenue: 1.2 },
    { month: 'Feb', bookings: 167, revenue: 1.4 },
    { month: 'Mar', bookings: 189, revenue: 1.6 },
    { month: 'Apr', bookings: 203, revenue: 1.8 },
    { month: 'May', bookings: 234, revenue: 2.1 },
    { month: 'Jun', bookings: 267, revenue: 2.4 }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-rolls-black to-rolls-navy">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-white mb-4">Live Performance Insights</h2>
          <p className="text-xl text-rolls-gold mb-6">Real-time analytics and business intelligence</p>
          
          {/* Live Visitors Counter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/30 rounded-full px-6 py-3"
          >
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-white font-semibold">{liveVisitors} Live Visitors</span>
            <span className="text-sm text-gray-400">on site now</span>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{stat.icon}</div>
                <div className={`flex items-center gap-1 text-sm px-2 py-1 rounded-full bg-gradient-to-r ${stat.color} text-white`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  {stat.change}%
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {(['overview', 'fleet', 'customers'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full transition-all capitalize ${
                activeTab === tab
                  ? 'bg-rolls-gold text-rolls-black font-semibold'
                  : 'bg-rolls-black/50 text-white border border-rolls-gold/20 hover:bg-rolls-gold/20'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-8"
        >
          {activeTab === 'overview' && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Monthly Performance</h3>
              
              {/* Simple Chart Visualization */}
              <div className="mb-8">
                <div className="flex items-end justify-between h-64 mb-4">
                  {chartData.map((data, index) => (
                    <div key={data.month} className="flex-1 flex flex-col items-center">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${(data.bookings / 300) * 100}%` }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="w-full max-w-16 bg-gradient-to-t from-rolls-gold to-yellow-600 rounded-t-lg relative group"
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-rolls-black/90 px-2 py-1 rounded text-xs text-white whitespace-nowrap">
                          {data.bookings} bookings
                        </div>
                      </motion.div>
                      <div className="text-xs text-gray-400 mt-2">{data.month}</div>
                    </div>
                  ))}
                </div>
                <div className="text-center text-sm text-gray-400">Monthly Booking Trend</div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-rolls-gold mb-2">32%</div>
                  <div className="text-sm text-gray-400">Conversion Rate</div>
                  <div className="text-xs text-green-400">↑ 5% from last month</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rolls-gold mb-2">2.5 days</div>
                  <div className="text-sm text-gray-400">Average Rental Duration</div>
                  <div className="text-xs text-green-400">↑ 0.3 days from last month</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rolls-gold mb-2">AED 2,450</div>
                  <div className="text-sm text-gray-400">Average Order Value</div>
                  <div className="text-xs text-green-400">↑ 8% from last month</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'fleet' && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Fleet Performance</h3>
              <div className="space-y-4">
                {fleetPerformance.map((car) => (
                  <div key={car.model} className="bg-rolls-navy/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white">{car.model}</h4>
                      <span className="text-rolls-gold font-semibold">{car.revenue}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Bookings:</span>
                        <span className="text-white ml-2">{car.bookings}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Utilization:</span>
                        <span className="text-white ml-2">{car.utilization}%</span>
                      </div>
                      <div className="text-right">
                        <div className="w-full bg-rolls-black/50 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-rolls-gold to-yellow-600 h-full rounded-full"
                            style={{ width: `${car.utilization}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'customers' && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Customer Insights</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-rolls-gold mb-4">Top Destinations</h4>
                  <div className="space-y-3">
                    {topDestinations.map((dest) => (
                      <div key={dest.name}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-white">{dest.name}</span>
                          <span className="text-gray-400">{dest.visits} visits</span>
                        </div>
                        <div className="w-full bg-rolls-black/50 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-rolls-gold to-yellow-600 h-full rounded-full"
                            style={{ width: `${dest.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-rolls-gold mb-4">Customer Demographics</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Repeat Customers</span>
                      <span className="text-white font-semibold">68%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Corporate Clients</span>
                      <span className="text-white font-semibold">42%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">International Visitors</span>
                      <span className="text-white font-semibold">73%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Mobile Bookings</span>
                      <span className="text-white font-semibold">56%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Real-time Activity Feed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-3 max-h-48 overflow-y-auto">
            {[
              { time: '2 min ago', action: 'New booking', details: 'Phantom for 3 days', icon: '✅' },
              { time: '5 min ago', action: 'Quote requested', details: 'Wedding package', icon: '📋' },
              { time: '12 min ago', action: 'Review submitted', details: '5-star rating', icon: '⭐' },
              { time: '18 min ago', action: 'New member', details: 'Elite Club signup', icon: '👑' },
              { time: '25 min ago', action: 'Booking completed', details: 'Cullinan rental', icon: '✅' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-4 text-sm">
                <span className="text-2xl">{activity.icon}</span>
                <div className="flex-1">
                  <span className="text-white">{activity.action}</span>
                  <span className="text-gray-400 mx-2">•</span>
                  <span className="text-gray-400">{activity.details}</span>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}