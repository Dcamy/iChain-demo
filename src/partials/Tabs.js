import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition.js';

function Tabs() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab-1]) {
      tabs.current.style.height = tabs.current.children[tab-1].offsetHeight + 'px'
    }
  }
  
  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])  

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12" data-aos-id-tabs>
            <h2 className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">Unlimited Opportunities for SGC Reward</h2>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-tabs]">Explore 5 Ways to Earn SGC Rewards — It's up to you and the global community to showcase your contributions to the world. Just remember to submit your billing for it.</p>
          </div>

          {/* Section content */}
          <div>

            {/* Tabs buttons */}
            <div className="flex flex-wrap justify-center -m-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 1 && 'opacity-50'}`}
                onClick={() => setTab(1)}
              >
                <svg className="w-4 h-4 fill-current text-purple-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 5.5c-.311.001-.62.061-.909.177l-2.268-2.268c.116-.29.176-.598.177-.909a2.5 2.5 0 00-5 0c.001.311.061.62.177.909L3.409 5.677A2.473 2.473 0 002.5 5.5a2.5 2.5 0 000 5c.311-.001.62-.061.909-.177l2.268 2.268c-.116.29-.176.598-.177.909a2.5 2.5 0 105 0 2.473 2.473 0 00-.177-.909l2.268-2.268c.29.116.598.176.909.177a2.5 2.5 0 100-5zM8 11c-.311.001-.62.061-.909.177L4.823 8.909a2.423 2.423 0 000-1.818l2.268-2.268a2.423 2.423 0 001.818 0l2.268 2.268a2.423 2.423 0 000 1.818l-2.268 2.268A2.473 2.473 0 008 11z" />
                </svg>
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">Lore</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 2 && 'opacity-50'}`}
                onClick={() => setTab(2)}
              >
                <svg className="w-4 h-4 fill-current text-purple-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.043 6.293S9.79 1.905 6.745 0A5.37 5.37 0 014.72 3.887C3.42 5.03.974 7.6 1 10.34A6.285 6.285 0 004.451 16a3.984 3.984 0 011.394-2.755 3.253 3.253 0 001.246-2.185 5.856 5.856 0 013.1 4.881v.013a5.883 5.883 0 003.428-5.106c.216-2.574-1.194-6.074-2.445-7.218a6.793 6.793 0 01-2.13 2.663z" />
                </svg>
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">Innovation</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 3 && 'opacity-50'}`}
                onClick={() => setTab(3)}
              >
                <svg className="w-4 h-4 fill-current text-purple-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 10c-1.1 0-2-.9-2-2 0-.2 0-.3.1-.5L3.6 5 5 3.6l2.5 2.5c.2-.1.3-.1.5-.1 1.1 0 2 .9 2 2s-.9 2-2 2z" />
                </svg>
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">Commerce</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 4 && 'opacity-50'}`}
                onClick={() => setTab(4)}
              >
                <svg className="w-4 h-4 fill-current text-purple-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 9v6a8 8 0 008-8V1a8 8 0 00-8 8zM0 6v3a6 6 0 006 6v-3a6 6 0 00-6-6z" />
                </svg>
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">Spirit</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 5 && 'opacity-50'}`}
                onClick={() => setTab(5)}
              >
                <svg className="w-4 h-4 fill-current text-purple-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.936 6.007H8.358l1.594-4.685c.3-.997-.897-1.794-1.694-.997L.284 8.3c-.598.598-.199 1.694.698 1.694H7.56l-1.594 4.685c-.3.997.897 1.794 1.694.997L15.633 7.7c.598-.598.2-1.694-.697-1.694z" />
                </svg>
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">Justice</span>
              </button>
            </div>

            {/* Tabs items */}
            <div className="relative flex flex-col mt-16" data-aos="fade-up" ref={tabs}>

              {/* Item 1 */}
              <Transition
                show={tab === 1}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                    <img className="w-full h-full object-cover" src={require('../images/c3533fd1-e633-41d6-ac19-6a6e6817f6b2.webp').default} width="516" height="387" alt="Tabs 01" />
                  </figure>
                  <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                    <h4 className="h4 mb-2">Chronicle the Ages, Weave the Future</h4>
                    <p className="text-lg text-gray-400">Across the globe, every corner has its lore, every elder carries a library of life. As a Local Lore Keeper with us, you are the chronicler of humanity’s unspoken chapters. From the vibrant stories of Africa’s savannas to the ice-whispered legends of Alaskan tribes, your mission is to bring forth the wisdom of the ages. Sit with your elders, listen to the tales of the 'little people', capture the fables intertwined with faith, and share them with the world. No editing, no barriers—just raw, powerful storytelling. Upload your recordings to us; your diligence turns into SGC, turning history into a living, rewarding experience. Today, you don't just find work, you create a legacy.</p>
                    <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" href="#0">
                      <span className="text-sm">Learn more</span>
                      <svg className="w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </article>
              </Transition>

              {/* Item 2 */}
              <Transition
                show={tab === 2}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                    <img className="w-full h-full object-cover" src={require('../images/danny0639_Using_this_image_for_branding_and_style_please_make_i_918c3c93-98e9-46dc-a371-bb5c053dce1d.png').default} width="516" height="387" alt="Tabs 02" />
                  </figure>
                  <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                    <h4 className="h4 mb-2">Code the Future, Pioneer the Dawn of AGI</h4>
                    <p className="text-lg text-gray-400">AI mavens and digital masons, your craft is the key to our collective intelligence. Dive into the neural networks with your coding prowess, rally your online cohorts, and drive the dawn of AGI — a dawn that belongs to us all. Pull Requests are your battle cry; with each submission, declare your stake. We back not just the build but the movement behind it. Join us, bill your genius, and ascend as guardians of a future where AGI amplifies humanity, not overshadows it. Together, let’s shape the intellect that will shepherd us forward.</p>
                    <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" href="#0">
                      <span className="text-sm">Learn more</span>
                      <svg className="w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </article>
              </Transition>

              {/* Item 3 */}
              <Transition
                show={tab === 3}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                    <img className="w-full h-full object-cover" src={require('../images/SocialImpact.webp').default} width="516" height="387" alt="Tabs 01" />
                  </figure>
                  <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                    <h4 className="h4 mb-2">Empower Your Community, Spark a Global Revolution</h4>
                    <p className="text-lg text-gray-400">In a world where every connection counts, your influence can spark a revolution. Assemble the keystones of commerce by bringing SGC to your local cafe or the tech giants alike. Champion our currency in your community, from the pulsing heart of Southeast Asia to the expansive savannas of Africa, and watch small ripples turn into tidal waves. Present your triumph, bill your odyssey, and we will reward the path you pave with SGC—your ledger of success. This is commerce without borders, a call to the hustlers, the dreamers, the doers: bill us for the future you build because with us, your hustle shapes humanity. It’s not just about making a living; it’s about making a difference. It's time to hustle like humanity depends on it—because with us, it does.</p>
                    <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" href="#0">
                      <span className="text-sm">Learn more</span>
                      <svg className="w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </article>
              </Transition>

              {/* Item 4 */}
              <Transition
                show={tab === 4}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                    <img className="w-full h-full object-cover" src={require('../images/Shield2.webp').default} width="516" height="387" alt="Tabs 02" />
                  </figure>
                  <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                    <h4 className="h4 mb-2">Enlighten the World, Ignite Conscious Action</h4>
                    <p className="text-lg text-gray-400">Arise, spiritual activists, the moment for passive contemplation has passed—now is the age of action. Step out of the corporate shadows and into the light of change. Venture to the ashrams of India, the monasteries of the Himalayas, or the sanctuaries within your own soul. Teach, learn, disrupt, and share the revelations of a connected consciousness. With every act of enlightenment, bill us. Every flight ticket, every moment of your journey, every seed of wisdom you plant, is a stroke against the canvas of transformation. Cast off the old ways and draw the blueprint of a new world with your spirit and our support. Your path to awakening is now a path to tangible rewards with SGC. This is your invitation to not just tread lightly upon the Earth, but to shake it to its core.</p>
                    <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" href="#0">
                      <span className="text-sm">Learn more</span>
                      <svg className="w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </article>
              </Transition>

              {/* Item 5 */}
              <Transition
                show={tab === 5}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-500 transform order-first"
                enterStart="opacity-0 scale-98"
                enterEnd="opacity-100 scale-100"
                leave="transition ease-out duration-300 transform absolute"
                leaveStart="opacity-100 scale-100"
                leaveEnd="opacity-0 scale-98"
              >
                <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                    <img className="w-full h-full object-cover" src={require('../images/Screenshot 2024-03-28 081454.png').default} width="516" height="387" alt="Tabs 01" />
                  </figure>
                  <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                    <h4 className="h4 mb-2">Redefine Justice, Shape the Legal Future</h4>
                    <p className="text-lg text-gray-400">Join us in the mission to redefine justice, as we extend a hand to state nationals and sovereign citizens in pursuit of truth. Your task? To scour courthouses for the volumes that chronicle our legal heritage, from the dusty scrolls to the latest rulings. Photograph each document, transcribe each line, and gather transcripts. In this knowledge lies the power to dismantle outdated legal double standards and pave the way for clarity and fairness. For your vigilance and for every piece of legal lore you uncover, we will recompense you with SGC, fueling your journey towards a world where laws are no longer chains, but the very wings of freedom.</p>
                    <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" href="#0">
                      <span className="text-sm">Learn more</span>
                      <svg className="w-3 h-3 fill-current text-purple-400 flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5H0v2h6v4l6-5-6-5z" />
                      </svg>
                    </a>
                  </div>
                </article>
              </Transition>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Tabs;
