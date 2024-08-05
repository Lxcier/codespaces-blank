const Hero = () => {
  return (
    <div className="container">
      <div className="flex justify-center items-center lg:justify-between mx-auto h-[80vh] lg:h-auto px-4 lg:px-0">
        <div className="w-full g:w-1/2 lg:text-left lg:py-0">
          <h1 className="text-blue-200">
            Navigating <span className="gradient">Legal Waters</span>, Securing
            Your Tomorrow
          </h1>
          <p className="mt-4">
            We advocate for consumers and underrepresented parties, amplifying
            the voices and safeguarding the rights of all.
          </p>
          <div className="flex items-center lg:justify-start gap-4 mt-6">
            <button className="btn btn-primary">
              <a href="#">Get Started</a>
            </button>
            <button className="btn btn-secondary">
              <a href="#">About Us</a>
            </button>
          </div>
        </div>
        <img
          src="/HERO.svg"
          alt="Hero Image"
          className="absolute right-0 bottom-0 -z-10 lg:relative lg:z-10 lg:w-1/2 hidden lg:block"
        />
      </div>
    </div>
  )
}

export default Hero
