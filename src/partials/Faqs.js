import React from 'react';

function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800 lg:border-0 lg:pt-0">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2">Frequently asked questions</h2>
          </div>

          {/* Faqs */}
          <ul className="grid gap-8 md:grid-cols-2 xl:gap-x-16 lg:gap-y-12">
            <li>
              <h4 className="text-xl font-medium mb-2">How is this even possible</h4>
              <p className="text-lg text-gray-400">We have a simple and straight forward minting system called Proof of Contribution (PoC), we coded that a contribution has value, over time The DAO may evolve this model but for now it just works.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">Is it legal?</h4>
              <p className="text-lg text-gray-400">According to who? The Natural Laws that govern The DAO says this is not only legal but highly enchoraged. In our extensive leagal studdies we discovered we don't have any f***s to give on the matter.This is a Private society, kind of like the Free Masons, Seattle Police Guild, Amarican</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">How do I submit my billings?</h4>
              <p className="text-lg text-gray-400">Any trackable, confirmable means you like, add it to a commit, or pull request, soon we will set up on an onsite submitions however we need to sort out our Inter Planitary File System (IPFS), and our Orbit Data Base (OrbitDB) to ensure maximum privacy.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">How do I submit my expense report?</h4>
              <p className="text-lg text-gray-400">Same as the billings, add it to a commit, or pull request, soon we will have for on the site but first we need to get everything setup to it's so securitty the military would be jelous of our system. It's coming, no worries</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">Can businesses get involved?</h4>
              <p className="text-lg text-gray-400">F*** yea! Be real in your billings, this isn't you chance to charge $100k for a quick edit on cloned app, but yea... dev service, cloud server/storage providers. If your company gets our vibe, we are happy to have you here, but... we do expect your billing to include a break down of all the wallets involved in the provided service, to ensure they get their fair rewards today and in the future. The "company" may charge a small managment fee as well, but this is for the masses, not the few.</p>
            </li>
            <li>
              <h4 className="text-xl font-medium mb-2">What charities, I heard a humor about helping them?</h4>
              <p className="text-lg text-gray-400">Well it's parcially true, the red cross can eat a dick same with the Clintin Foundation and all the other BS NGOs can eat a dick too. But for small grassroot projects, like an African Orphange or an inovative project will be looked at on a case by case basis. If approved it will be something like a 1:1.1 - 1:2 minting ratio. What ever The DAO decides.</p>
            </li>
          </ul>

        </div>
      </div>
    </section>
  );
}

export default Faqs;
