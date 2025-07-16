import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'next-i18next'

interface AvailableDate {
  date: Date
  available: boolean
  price?: number
}

interface BookingDetails {
  car: string
  startDate: Date | null
  endDate: Date | null
  totalDays: number
  totalPrice: number
}

export default function AvailabilityCalendar() {
  const { t } = useTranslation('common')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [selectedCar, setSelectedCar] = useState('phantom')
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null)
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null)

  // Helper function to ensure array safety
  const ensureArray = (arr: any): any[] => {
    return Array.isArray(arr) ? arr : [];
  };

  // Safe translation array helper
  const getTranslatedArray = (key: string): string[] => {
    const translation = t(key, { returnObjects: true });
    return ensureArray(translation);
  };

  const cars = ensureArray([
    { id: 'phantom', name: 'Rolls-Royce Phantom', price: 5800, image: '/images/Rolls-royce-phantom.jpg' },
    { id: 'cullinan', name: 'Rolls-Royce Cullinan', price: 6500, image: '/images/Rolls-Royce-Cullinan_.jpg' },
    { id: 'ghost', name: 'Rolls-Royce Ghost', price: 4800, image: '/images/Rolls-Royce-black.jpg' },
    { id: 'dawn', name: 'Rolls-Royce Dawn', price: 5500, image: '/images/Rolls-Royce-white.jpg' },
    { id: 'wraith', name: 'Rolls-Royce Wraith', price: 5000, image: '/images/Rolls-Royce-front.jpg' }
  ])

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days: (Date | null)[] = []
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }
    return days
  }

  const isDateAvailable = (date: Date) => {
    // Simulate availability based on date (deterministic)
    const isPastDate = date < new Date()
    if (isPastDate) return false
    
    // Make some dates unavailable based on day of month for demo
    const dayOfMonth = date.getDate()
    const unavailableDays = [5, 10, 15, 20, 25] // Example unavailable days
    return !unavailableDays.includes(dayOfMonth)
  }

  const isDateInRange = (date: Date) => {
    if (!selectedStartDate || !selectedEndDate || !date) return false
    return date >= selectedStartDate && date <= selectedEndDate
  }

  const isDateSelected = (date: Date) => {
    if (!date) return false
    return (selectedStartDate && date.getTime() === selectedStartDate.getTime()) ||
           (selectedEndDate && date.getTime() === selectedEndDate.getTime())
  }

  const handleDateClick = (date: Date | null) => {
    if (!date || !isDateAvailable(date)) return

    if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
      setSelectedStartDate(date)
      setSelectedEndDate(null)
    } else if (date < selectedStartDate) {
      setSelectedStartDate(date)
    } else {
      setSelectedEndDate(date)
    }
  }

  const calculateBookingDetails = () => {
    if (!selectedStartDate || !selectedEndDate) return

    const days = Math.ceil((selectedEndDate.getTime() - selectedStartDate.getTime()) / (1000 * 60 * 60 * 24)) + 1
    const car = cars.find(c => c.id === selectedCar)
    const totalPrice = days * (car?.price || 0)

    setBookingDetails({
      car: car?.name || '',
      startDate: selectedStartDate,
      endDate: selectedEndDate,
      totalDays: days,
      totalPrice
    })
    setShowBookingForm(true)
  }

  const monthNames = getTranslatedArray('checkAvailability.calendar.months');
  const dayNames = getTranslatedArray('checkAvailability.calendar.daysOfWeek');

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
          <h2 className="heading-2 text-white mb-4">{t('checkAvailability.title')}</h2>
          <p className="text-xl text-rolls-gold">{t('checkAvailability.subtitle')}</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Car Selection */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h3 className="text-lg font-semibold text-white mb-4">{t('checkAvailability.selectYourRR')}</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {cars.map((car) => (
                <button
                  key={car.id}
                  onClick={() => setSelectedCar(car.id)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                    selectedCar === car.id ? 'ring-2 ring-rolls-gold scale-105' : 'hover:scale-102'
                  }`}
                >
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-24 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rolls-black/80 to-transparent flex items-end p-2">
                    <div className="text-left">
                      <p className="text-xs text-white font-semibold">{t(`checkAvailability.cars.${car.id}.name`)}</p>
                      <p className="text-xs text-rolls-gold">{t('fleet.aed')} {car.price}{t('fleet.perDay')}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-rolls-black/50 backdrop-blur-sm border border-rolls-gold/20 rounded-lg p-6 glass-effect"
          >
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                className="p-2 text-white hover:text-rolls-gold transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h3 className="text-xl font-semibold text-white">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h3>
              <button
                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                className="p-2 text-white hover:text-rolls-gold transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {dayNames.map((day) => (
                <div key={day} className="text-center text-sm font-semibold text-rolls-gold py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar days */}
            <div className="grid grid-cols-7 gap-2">
              {getDaysInMonth(currentMonth).map((date, index) => {
                const available = date ? isDateAvailable(date) : false
                const inRange = date ? isDateInRange(date) : false
                const selected = date ? isDateSelected(date) : false
                const today = date && date.toDateString() === new Date().toDateString()

                return (
                  <div
                    key={index}
                    onClick={() => handleDateClick(date)}
                    className={`
                      aspect-square flex flex-col items-center justify-center rounded-lg cursor-pointer
                      transition-all duration-200 relative
                      ${!date ? 'invisible' : ''}
                      ${available ? 'hover:bg-rolls-gold/20' : 'opacity-30 cursor-not-allowed'}
                      ${inRange ? 'bg-rolls-gold/10' : ''}
                      ${selected ? 'bg-rolls-gold text-rolls-black' : ''}
                      ${today ? 'border border-rolls-gold/50' : ''}
                    `}
                  >
                    {date && (
                      <>
                        <span className={`text-sm font-semibold ${selected ? 'text-rolls-black' : 'text-white'}`}>
                          {date.getDate()}
                        </span>
                        {available && (
                          <span className={`text-xs ${selected ? 'text-rolls-black' : 'text-rolls-gold'}`}>
                            {t('checkAvailability.calendar.available')}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Selected dates display */}
            {(selectedStartDate || selectedEndDate) && (
              <div className="mt-6 p-4 bg-rolls-navy/50 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">{t('checkAvailability.calendar.selectedDates')}</p>
                    <p className="text-white">
                      {selectedStartDate && selectedStartDate.toLocaleDateString()}
                      {selectedStartDate && selectedEndDate && ' → '}
                      {selectedEndDate && selectedEndDate.toLocaleDateString()}
                    </p>
                    {selectedStartDate && selectedEndDate && (
                      <p className="text-sm text-rolls-gold">
                        {t('checkAvailability.calendar.totalDays', { count: Math.ceil((selectedEndDate.getTime() - selectedStartDate.getTime()) / (1000 * 60 * 60 * 24)) + 1 })}
                      </p>
                    )}
                  </div>
                  {selectedStartDate && selectedEndDate && (
                    <button
                      onClick={calculateBookingDetails}
                      className="btn-primary"
                    >
                      {t('checkAvailability.proceedToBooking')}
                    </button>
                  )}
                </div>
              </div>
            )}
          </motion.div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 flex flex-wrap justify-center gap-6 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white rounded"></div>
              <span className="text-gray-400">{t('checkAvailability.calendar.available')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-white/30 rounded"></div>
              <span className="text-gray-400">{t('checkAvailability.calendar.unavailable')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-rolls-gold rounded"></div>
              <span className="text-gray-400">{t('checkAvailability.calendar.selected')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-rolls-gold/20 rounded"></div>
              <span className="text-gray-400">{t('checkAvailability.calendar.dateRange')}</span>
            </div>
          </motion.div>
        </div>

        {/* Booking Form Modal */}
        {showBookingForm && bookingDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setShowBookingForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-rolls-black border border-rolls-gold/30 rounded-lg p-8 max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-semibold text-white mb-6">{t('bookingForm.title')}</h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-rolls-navy/50 p-4 rounded-lg">
                  <p className="text-sm text-gray-400">{t('bookingForm.vehicle')}</p>
                  <p className="text-lg font-semibold text-white">{bookingDetails.car}</p>
                </div>
                
                <div className="bg-rolls-navy/50 p-4 rounded-lg">
                  <p className="text-sm text-gray-400">{t('bookingForm.rentalPeriod')}</p>
                  <p className="text-lg font-semibold text-white">
                    {bookingDetails.startDate?.toLocaleDateString()} - {bookingDetails.endDate?.toLocaleDateString()}
                  </p>
                  <p className="text-sm text-rolls-gold">{t('bookingForm.totalDays', { count: bookingDetails.totalDays })}</p>
                </div>
                
                <div className="bg-rolls-navy/50 p-4 rounded-lg">
                  <p className="text-sm text-gray-400">{t('bookingForm.totalPrice')}</p>
                  <p className="text-2xl font-bold text-rolls-gold">
                    {t('fleet.aed')} {bookingDetails.totalPrice.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500">{t('bookingForm.priceIncludes')}</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex-1 text-center"
                  onClick={() => setShowBookingForm(false)}
                >
                  {t('bookingForm.bookNow')}
                </motion.a>
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="btn-secondary flex-1"
                >
                  {t('bookingForm.cancel')}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}