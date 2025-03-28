

/**
 * HeroImage component renders an image with optional AOS (Animate On Scroll) animation attributes.
 *
 * @param {Object} props - The props object.
 * @param {string} props.src - The source URL of the image.
 * @param {string} props.alt - The alternative text for the image.
 * @param {string} props.aos - The AOS animation type to apply to the image.
 * @returns {JSX.Element} The rendered image component.
 */
const HeroImage = ({ src, alt, aos }) => {
  return <img src={src} alt={alt} data-aos={aos} className="" />
}

export default HeroImage
