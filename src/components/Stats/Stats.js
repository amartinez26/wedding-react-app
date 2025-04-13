/**
 * Stats component renders a section displaying statistical data.
 * Each statistic includes an icon, a dynamic value, a title, and a subtitle.
 * The data is dynamically mapped to individual `StatsItem` components.
 *
 * @component
 * @returns {JSX.Element} A section containing statistical data items.
 */
import React, { useState, useEffect } from 'react'
import StatsItem from './StatsItem'

const Stats = () => {
  const initialStatsData = [
    {
      icon: 'bi bi-credit-card',
      title: 'Days until',
      subtitle: '1st and 2nd Deposits are due',
      targetDate: new Date('2025-10-02'), // Target date for this stat
    },
    {
      icon: 'bi bi-credit-card',
      title: 'Days until',
      subtitle: 'Final Payment is due',
      targetDate: new Date('2025-12-02'), // Target date for this stat
    },
    {
      icon: 'bi bi-credit-card',
      title: 'Days until',
      subtitle: 'Flight info for transportation due',
      targetDate: new Date('2026-01-11'), // Target date for this stat
    },
    {
      icon: 'bi bi-bell',
      title: 'Days until',
      subtitle: 'Wedding Day!',
      targetDate: new Date('2026-02-27'), // Target date for this stat
    },
  ]

  // State to manage the stats data
  const [statsData, setStatsData] = useState(initialStatsData)

useEffect(() => {
  const updateCountdown = () => {
    const today = new Date()

    // Update each stat's countdown to the target date
    const updatedStats = initialStatsData.map((stat) => {
      const targetDate = stat.targetDate // Already a Date object

      // Calculate days left from today to targetDate
      const daysLeft = Math.max(
        Math.floor((targetDate - today) / (1000 * 60 * 60 * 24)),
        0
      )

      return {
        ...stat,
        daysLeft, // Add the calculated days left
      }
    })

    setStatsData(updatedStats)
  }

  // Calculate time until next midnight
  const now = new Date()
  const timeUntilMidnight =
    new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime() -
    now.getTime()

  // Update immediately and then at midnight
  updateCountdown()
  const midnightTimeout = setTimeout(() => {
    updateCountdown()
    const interval = setInterval(updateCountdown, 24 * 60 * 60 * 1000) // Update every 24 hours
    return () => clearInterval(interval) // Cleanup interval on unmount
  }, timeUntilMidnight)

  return () => clearTimeout(midnightTimeout) // Cleanup timeout on unmount
}, [initialStatsData])

  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {statsData.map((stat, index) => (
            <StatsItem
              key={index}
              icon={stat.icon}
              endValue={stat.daysLeft} // Pass daysLeft as the countdown value
              title={stat.title}
              subtitle={stat.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
