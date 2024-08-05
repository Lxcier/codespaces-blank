const Navbar = () => {
  return (
    <header className="container mx-auto flex items-center justify-between mt-6">
      <nav className="flex items-center gap-12">
        <picture>
          <img src="/logo.svg" alt="Logo" />
        </picture>
        <ul className="flex items-center gap-4">
          <li>
            <a
              className="text-blue-200 hover:text-blue-flat"
              href="#ourservices"
            >
              Our Services
            </a>
          </li>
          <li>
            <a className="text-blue-200 hover:text-blue-flat" href="#aboutus">
              About Us
            </a>
          </li>
          <li>
            <a className="text-blue-200 hover:text-blue-flat" href="#contactus">
              Contact Us
            </a>
          </li>
          <li>
            <a className="text-blue-200 hover:text-blue-flat" href="#more">
              More
            </a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex items-center gap-3">
          <li>
            <a
              href="/login"
              className="flex items-center gap-1 text-blue-200 hover:text-blue-flat"
            >
              Sign Up
              <img src="/circle-cta.svg" alt="Circle CTA" />
            </a>
          </li>
          <li>
            <a href="/contact" className="btn btn-primary">
              Call Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
