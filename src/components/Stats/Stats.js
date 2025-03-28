
/**
 * Stats component renders a section displaying statistical data.
 * Each statistic includes an icon, an end value, a title, and a subtitle.
 * The data is dynamically mapped to individual `StatsItem` components.
 *
 * @component
 * @returns {JSX.Element} A section containing statistical data items.
 */
import React from 'react'
import StatsItem from './StatsItem'

const Stats = () => {
  const statsData = [
    {
      icon: 'bi bi-emoji-smile',
      endValue: 232,
      title: 'Happy Clients',
      subtitle: 'consequuntur quae',
    },
    {
      icon: 'bi bi-journal-richtext',
      endValue: 521,
      title: 'Projects',
      subtitle: 'adipisci atque cum quia aut',
    },
    {
      icon: 'bi bi-headset',
      endValue: 1453,
      title: 'Hours Of Support',
      subtitle: 'aut commodi quaerat',
    },
    {
      icon: 'bi bi-people',
      endValue: 32,
      title: 'Hard Workers',
      subtitle: 'rerum asperiores dolor',
    },
  ]

  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {statsData.map((stat, index) => (
            <StatsItem
              key={index}
              icon={stat.icon}
              endValue={stat.endValue}
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
