
import React, { useState } from 'react'
import SectionTitle from '../Shared/SectionTitle'
import PortfolioFilters from './PortfolioFilters'
import PortfolioItems from './PortfolioItems'
import mixImage1 from '../../assets/img/portfolio/Mix/det-couple.JPG'
import mixImage3 from '../../assets/img/portfolio/Mix/couple-2.jpg'
import mixImage4 from '../../assets/img/portfolio/Mix/vero-wedding-4.jpeg'
import mixImage5 from '../../assets/img/portfolio/Mix/couple-4.jpg'
import mixImage6 from '../../assets/img/portfolio/Mix/engage-party.jpg'
import mixImage7 from '../../assets/img/portfolio/Mix/couple-6.jpg'
import mixImage8 from '../../assets/img/portfolio/Mix/fl-couple-3.jpeg'
import mixImage9 from '../../assets/img/portfolio/Mix/gt-couple-2.jpg'
import mixImage10 from '../../assets/img/portfolio/Mix/gt-couple.jpg'
import mixImage11 from '../../assets/img/portfolio/Mix/fl-couple-4.jpeg'
import mixImage12 from '../../assets/img/portfolio/Mix/pr-couple.jpeg'
import mixImage13 from '../../assets/img/portfolio/Mix/ny-couple-2.jpeg'
import mixImage14 from '../../assets/img/portfolio/Mix/paddy-couple.jpeg'
import mixImage15 from '../../assets/img/portfolio/Mix/vero-wedding.jpeg'
import ProposalImage1 from '../../assets/img/portfolio/Proposal/spain-couple.jpg'
import ProposalImage2 from '../../assets/img/portfolio/Proposal/spain-couple-3.jpeg'
import ProposalImage3 from '../../assets/img/portfolio/Proposal/spain-couple-4.jpeg'
import ProposalImage4 from '../../assets/img/portfolio/Proposal/spain-couple-5.jpeg'
import ProposalImage5 from '../../assets/img/portfolio/Proposal/spain-couple-6.jpeg'
import WeddingShootImage1 from '../../assets/img/portfolio/WeddingShoot/grocery.jpg'
import WeddingShootImage2 from '../../assets/img/portfolio/WeddingShoot/grocery-2.jpg'
import WeddingShootImage3 from '../../assets/img/portfolio/WeddingShoot/mall.jpg'
import WeddingShootImage4 from '../../assets/img/portfolio/WeddingShoot/profile-img.jpg'
import WeddingShootImage5 from '../../assets/img/portfolio/WeddingShoot/virgen.jpg'
import Slider from 'react-slick'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const Portfolio = () => {
  const sectionTitle = {
    title: 'Photo Gallery',
    description:
      "\"Take a scroll through our photo gallery—wedding shoots where we nailed the 'in love' look, a proposal in Spain that screams 'Pinterest goals,' and travel pics proving we’re basically a rom-com on the go.\"",
  }

  const filters = [
    { filter: '*', label: 'All', active: true },
    { filter: 'filter-WS', label: 'Wedding Shoot' },
    { filter: 'filter-proposal', label: 'Proposal' },
    { filter: 'filter-mix', label: 'through the years' },
    // { filter: 'filter-books', label: 'Books' },
  ]

  const portfolioItems = [
    {
      filter: 'filter-WS',
      img: WeddingShootImage1,
      title: 'Groceries',
      description: 'Picking out Peppers',
    },
    {
      filter: 'filter-WS',
      img: WeddingShootImage2,
      title: 'Soda Aisle',
      description: 'Our song was on',
    },
    {
      filter: 'filter-WS',
      img: WeddingShootImage3,
      title: 'Mega Mall',
      description: 'Novela Material',
    },
    {
      filter: 'filter-WS',
      img: WeddingShootImage4,
      title: 'the best hats around',
      description: 'This may be a permanent look',
    },
    {
      filter: 'filter-WS',
      img: WeddingShootImage5,
      title: 'New Year New US',
      description: 'In a castle in Barcelona',
    },
    {
      filter: 'filter-proposal',
      img: ProposalImage1,
      title: 'New Year New US',
      description: 'In a castle in Barcelona',
    },
    {
      filter: 'filter-proposal',
      img: ProposalImage2,
      title: 'Gothic Quarters',
      description: 'Exploring the city',
    },
    {
      filter: 'filter-proposal',
      img: ProposalImage3,
      title: 'The Proposal',
      description: 'Shock of a Century',
    },
    {
      filter: 'filter-proposal',
      img: ProposalImage4,
      title: 'She Said Yes!',
      description: 'The happiest day of my life',
    },
    {
      filter: 'filter-proposal',
      img: ProposalImage5,
      title: 'The Rang',
      description: 'Blingin',
    },
    {
      filter: 'filter-mix',
      img: mixImage11,
      title: 'Miami Waters',
      description: 'Strolling Miami Beach',
    },
    {
      filter: 'filter-mix',
      img: mixImage6,
      title: 'Engagement Party',
      description: 'Great day with friends and family',
    },
    {
      filter: 'filter-mix',
      img: mixImage3,
      title: 'Chicago Theatre',
      description: 'Out for a show in the windy city',
    },
    {
      filter: 'filter-mix',
      img: mixImage4,
      title: 'Funny or Serious',
      description: 'Not on the same page',
    },
    {
      filter: 'filter-mix',
      img: mixImage5,
      title: 'Connected',
      description: 'This one we handled better',
    },
    {
      filter: 'filter-mix',
      img: mixImage14,
      title: "Paddy's day",
      description: "Chicago's river goes green",
    },
    {
      filter: 'filter-mix',
      img: mixImage7,
      title: 'Silly Faces',
      description: 'Letting loose',
    },
    {
      filter: 'filter-mix',
      img: mixImage8,
      title: 'When in SOBE',
      description: ' a dabble with the sun',
    },
    {
      filter: 'filter-mix',
      img: mixImage9,
      title: 'Lago Atitlan',
      description: 'The prettiest views in Guatemala',
    },
    {
      filter: 'filter-mix',
      img: mixImage10,
      title: 'GT Market',
      description: 'Hitting the streets in Guatemala',
    },
    {
      filter: 'filter-mix',
      img: mixImage1,
      title: 'Wedding Guests',
      description: 'Wedding In Detriot',
    },
    {
      filter: 'filter-mix',
      img: mixImage12,
      title: 'Viejo San Juan',
      description: 'party in the old city',
    },
    {
      filter: 'filter-mix',
      img: mixImage13,
      title: 'I Love NY',
      description: 'the city that never sleeps',
    },
    {
      filter: 'filter-mix',
      img: mixImage15,
      title: 'Wedding Guests',
      description: 'enjoying the beautiful day',
    },
  ]

  // State to track the active filter
  const [activeFilter, setActiveFilter] = useState('*')
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Filtered portfolio items based on the active filter
  const filteredItems =
    activeFilter === '*'
      ? portfolioItems
      : portfolioItems.filter((item) => item.filter === activeFilter)

  // Handle filter change
  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
  }

  // React Slick settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay interval (3 seconds)
    arrows: true, // Show navigation arrows
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
        <PhotoProvider>
          <Slider {...settings}>
            {filteredItems.map((item, index) => (
              <div key={index} className="portfolio-item">
                <PhotoView src={item.img}>
                  <div
                    className="portfolio-image-wrapper"
                    style={{ position: 'relative', cursor: 'pointer' }}
                    onClick={() => window.open(item.img, '_blank')} // Fallback to open in a new tab
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="portfolio-image"
                      loading="lazy"
                      onLoad={(e) => e.target.classList.add('loaded')} // Add a class when the image is loaded
                      style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '10px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      }}
                    />
                    <div
                      className="magnify-icon"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        fontSize: '2rem',
                        color: 'white',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        borderRadius: '50%',
                        padding: '10px',
                      }}
                    >
                      🔍
                    </div>
                  </div>
                </PhotoView>
                <h4 className="portfolio-title">{item.title}</h4>
                <p className="portfolio-description">{item.description}</p>
              </div>
            ))}
          </Slider>
        </PhotoProvider>
      </div>
    </section>
  )
}

export default Portfolio
