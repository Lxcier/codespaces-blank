import React from 'react'

const Comp = () => {
  return (
    <main className="flex flex-col bg-slate-50 mt-16 py-14 gap-8">
      <section className="container flex items-center gap-6">
        <div className="flex flex-col justify-center bg-[#FFF] rounded-[50px] lg:h-[575px] py-5 px-10">
          <img
            className="w-[430px] self-end"
            src="/planning.svg"
            alt="Planning Image"
          />
          <div className="flex flex-col mt-3">
            <h4 className="text-blue-200 lg:w-[270px] mb-4">
              Estate Planning and Probate
            </h4>
            <div className="flex items-center gap-8">
              <p>
                Our focus areas encompass cases involving emission scandals,
                data breaches, online gambling establishments.
              </p>
              <button
                className="px-6 py-4 rounded-full w-full border-[1.5px] border-blue-200"
                type="button"
              >
                <a href="#" className="block">
                  Check affectedness now
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-[#FFF] rounded-[50px] lg:h-[575px] py-5 px-10 gap-4">
          <img class="w-auto" src="/immigrate.svg" alt="Imigrattion Law" />
          <h4 className="text-blue-200">Immigration Law</h4>
          <p>We excel in advocanting for consumers and smaller entities</p>
          <button
            className="px-6 py-4 rounded-full w-full border-[1.5px] border-blue-200"
            type="button"
          >
            <a href="#" className="block">
              Check affectedness now
            </a>
          </button>
        </div>
      </section>

      <section className="container flex items-center gap-14">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src="/trophy.svg" alt="Trophy Icon" />
            <p className="gradient">Victories</p>
          </div>
          <h2 className="text-blue-200">Olve victorious <br/> Legal Cases</h2>
          <p>
            Discover the impressive case studies of our sucessful legal battles
            where we have fought for constumers and smaller parties against
            large organizations
          </p>
          <div className="flex items-center gap-5 mt-8">
            <a href="#" className="btn btn-primary inline-block">
              Our areas of Law
            </a>
            <a href="#" className="flex gap-2">
              New Successes
              <img src="/arrow.svg" alt="Arrow Icon" />
            </a>
          </div>
        </div>

        <img src="/comp.png" alt="Compensation Picture" className='translate-180'/>
      </section>
    </main>
  )
}

export default Comp
