
import React, { useState } from 'react'
import SectionTitle from '../Shared/SectionTitle'
import PortfolioFilters from './PortfolioFilters'
import PortfolioItems from './PortfolioItems'
import app1Img from '../../assets/img/portfolio/app-1.jpg'
import product1Img from '../../assets/img/portfolio/product-1.jpg'
import branding1Img from '../../assets/img/portfolio/branding-1.jpg'
import books1Img from '../../assets/img/portfolio/books-1.jpg'

const Portfolio = () => {
  const sectionTitle = {
    title: 'Portfolio',
    description:
      'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.',
  }

  const filters = [
    { filter: '*', label: 'All', active: true },
    { filter: 'filter-app', label: 'App' },
    { filter: 'filter-product', label: 'Product' },
    { filter: 'filter-branding', label: 'Branding' },
    { filter: 'filter-books', label: 'Books' },
  ]

  const portfolioItems = [
    {
      filter: 'filter-app',
      img: app1Img,
      title: 'App 1',
      description: 'Lorem ipsum, dolor sit amet consectetur',
    },
    {
      filter: 'filter-product',
      img: product1Img,
      title: 'Product 1',
      description: 'Lorem ipsum, dolor sit amet consectetur',
    },
    {
      filter: 'filter-branding',
      img: branding1Img,
      title: 'Branding 1',
      description: 'Lorem ipsum, dolor sit amet consectetur',
    },
    {
      filter: 'filter-books',
      img: books1Img,
      title: 'Books 1',
      description: 'Lorem ipsum, dolor sit amet consectetur',
    },
  ]

  // State to track the active filter
  const [activeFilter, setActiveFilter] = useState('*')

  // Filtered portfolio items based on the active filter
  const filteredItems =
    activeFilter === '*'
      ? portfolioItems
      : portfolioItems.filter((item) => item.filter === activeFilter)

  // Handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
  }

  return (
    <section id="portfolio" className="portfolio section light-background">
      <SectionTitle
        title={sectionTitle.title}
        description={sectionTitle.description}
      />
      <div className="container">
        <PortfolioFilters
          filters={filters}
          onFilterChange={handleFilterChange}
        />
        <PortfolioItems items={filteredItems} />
      </div>
    </section>
  )
}

export default Portfolio
