const Grid = () => {
  return (
    <>
      <main className="flex flex-col lg:flex-row lg:items-center gap-9 2xl:justify-between w-full md:w-[1744px] mx-auto">
        <div className="rounded-[52px] hidden lg:block">
          <img src="/grid-1.png" alt="Grid First" />
        </div>
        <div className="lg:w-[386px] lg:mt-0 mt-14">
          <div className="lg:rounded-[52px] lg:w-full h-[285px] lg:h-[278px] bg-white-100 relative">
            <img
              src="/lawyer.svg"
              alt="Lawyer"
              className="absolute bottom-0 -right-14 z-10"
            />
          </div>
          <div className="px-4">
            <h3 className="gradient my-6 lg:my-3 lg:text-left">
              Defending Your Rights, Crafting Your Victory
            </h3>
            <p className="text-sm w-full lg:text-justify">
              At Olve, We excel in advocating for consumers and smaller entities
              in legal battles against corporate giants. Our focus areas
              encompass cases involving emission scandals, data breaches, online
              gambling establishments, and broader consumer rights issues.
            </p>
          </div>
        </div>
        <div className="rounded-[52px] hidden lg:block">
          <img src="/grid-2.png" alt="Grid Second" />
        </div>
        <div className="rounded-[52px] hidden lg:block">
          <img src="/grid-3.svg" alt="Grid Third" />
        </div>
      </main>
    </>
  )
}

export default Grid
