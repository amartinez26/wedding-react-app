
/**
 * Portfolio Component
 *
 * This component renders the Portfolio section of the application, which includes:
 * - A section title with a title and description.
 * - A set of portfolio filters to categorize portfolio items.
 * - A list of portfolio items displayed based on the selected filter.
 *
 * The component uses the following sub-components:
 * - `SectionTitle`: Displays the title and description of the section.
 * - `PortfolioFilters`: Displays filter buttons for categorizing portfolio items.
 * - `PortfolioItems`: Displays the portfolio items based on the selected filter.
 *
 * Data:
 * - `sectionTitle`: An object containing the title and description of the section.
 * - `filters`: An array of filter objects, each containing a filter key, label, and active state.
 * - `portfolioItems`: An array of portfolio item objects, each containing a filter key, image path, title, and description.
 *
 * @component
 */
import React from 'react'
import SectionTitle from '../Shared/SectionTitle'
import PortfolioFilters from './PortfolioFilters'
import PortfolioItems from './PortfolioItems'

const Portfolio = () => {
  const sectionTitle = {
    title: 'Portfolio',
    description:
      'Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.',
  }

  const filters = [
    { filter: '*', label: 'All', active: true },
    { filter: '.filter-app', label: 'App' },
    { filter: '.filter-product', label: 'Product' },
    { filter: '.filter-branding', label: 'Branding' },
    { filter: '.filter-books', label: 'Books' },
  ]

  const portfolioItems = [
    {
      filter: 'filter-app',
      img: 'assets/img/portfolio/app-1.jpg',
      title: 'App 1',
      description: 'Lorem ipsum, dolor sit amet consectetur',
    },
    {
      filter: 'filter-product',
      img: 'assets/img/portfolio/product-1.jpg',
      title: 'Product 1',
      description: 'Lorem ipsum, dolor sit amet consectetur',
    },
    {
      filter: 'filter-branding',
      img: 'assets/img/portfolio/branding-1.jpg',
      title: 'Branding 1',
      description: 'Lorem ipsum, dolor sit amet consectetur',
    },
    {
      filter: 'filter-books',
      img: 'assets/img/portfolio/books-1.jpg',
      title: 'Books 1',
      description: 'Lorem ipsum, dolor sit amet consectetur',
    },
    // Add more items as needed
  ]

  return (
    <section id="portfolio" className="portfolio section light-background">
      <SectionTitle
        title={sectionTitle.title}
        description={sectionTitle.description}
      />
      <div className="container">
        <PortfolioFilters filters={filters} />
        <PortfolioItems items={portfolioItems} />
      </div>
    </section>
  )
}

export default Portfolio
