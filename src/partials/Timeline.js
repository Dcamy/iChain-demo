import React, { useEffect, useState } from 'react';

function Timeline() {
  // States to manage the visibility of different versions of Project 3
  const [showDefaultVersion, setShowDefaultVersion] = useState(true);
  const [showDoubleClickVersion, setShowDoubleClickVersion] = useState(false);
  const [showKonamiVersion, setShowKonamiVersion] = useState(false);

  // Function to handle double-click event for Project 3
  const handleDoubleClick = () => {
    setShowDefaultVersion(false);
    setShowDoubleClickVersion(true);
    setShowKonamiVersion(false);
    console.log('Double-clicked!');
  };

  // Function to handle Konami Code trigger for Project 3
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyA', 'KeyB'];
    let konamiIndex = 0;

    const onKeyDown = (e) => {
      if (e.code === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          setShowDefaultVersion(false);
          setShowDoubleClickVersion(false);
          setShowKonamiVersion(true);
          console.log('Konami Code activated!');
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  // Continue with the rest of your component...
  
  // When you get to the section where you are rendering Project 3 versions,
  // you will use the state variables to conditionally render each version.
  
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Bringing the world's ideas to life</h2>
            <p className="text-xl text-gray-400">Empowering Global Innovation: Your Gateway to Lifetime Rewards on Funded Projects</p>
          </div>

          {/* Items */}
          <div className="max-w-3xl mx-auto -my-4 md:-my-6" data-aos-id-timeline>

       
          </div>    {/* 1st item */}
          <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-anchor="[data-aos-id-timeline]">
            <div className="pl-2">
              <div className="font-architects-daughter text-xl text-purple-600 mb-2">Network Roots</div>
              <div className="flex items-center mb-3">
                <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">Project 1</div>
                <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                <div className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                <h4 className="h4">Embed & Prosper</h4>
              </div>
              <p className="text-lg text-gray-400">Join and carve your niche in the network, securing generational wealth with our two-tier affiliate system. Longevity is rewarded here — your efforts echo in perpetuity.</p>
            </div>
          </div>


                      {/* 2nd item */}
          <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-timeline]">
            <div className="pl-2">
              <div className="font-architects-daughter text-xl text-purple-600 mb-2">Evolution</div>
              <div className="flex items-center mb-3">
                <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">Project 2</div>
                <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                <div className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                <h4 className="h4">SynergiCoin Rollout</h4>
              </div>
              <p className="text-lg text-gray-400">SGC will energize our ecosystem, offering an asset that honors each byte of contribution. Dive in, mint trust, and transform your digital efforts into a tangible legacy.</p>
            </div>
          </div>


          <div>
                  {/* 3rd item Default Version */}
            {showDefaultVersion && (
              <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-timeline]" onDoubleClick={() => {
                setShowDefaultVersion(false);
                setShowDoubleClickVersion(true);
                setShowKonamiVersion(false);
              }}>
                <div className="pl-2">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Mega Growth</div>
                  <div className="flex items-center mb-3">
                    <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">Project 3</div>
                    <h4 className="h4">Marketplace Launch</h4>
                  </div>
                  <p className="text-lg text-gray-400">Unveil the power of collective endeavor with our Marketplace. Here, Innovation meets Investment; every Proposal, whether a Nascent idea or a Polished plan, gains the Chance to thrive, powered by Community support and Blockchain transparency. Konami - where creativity cheats the system, unlocking possibilities one idea at a time.</p>
                </div>
              </div>
            )}

            {/* Double-click Version */}
            {showDoubleClickVersion && (
              <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-timeline]">
                <div className="pl-2">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Mega Growth</div>
                  <div className="flex items-center mb-3">
                    <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">Project 3</div>
                    <h4 className="h4">Marketplace Launch</h4>
                  </div>
                  <p className="text-lg text-gray-400">Explore our Marketplace, a playground for the wildest ideas—from double-decker couches 🛋️ to meme coin bots 🤖. Bring your 'crazy,' watch it soar 🚀, and earn rewards for every try, win or learn 🔥.</p>
                </div>
              </div>
            )}

            {/* Konami Version */}
            {showKonamiVersion && (
              <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-timeline]">
                <div className="pl-2">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Mega Growth</div>
                  <div className="flex items-center mb-3">
                    <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">Project 3</div>
                    <h4 className="h4">Marketplace Launch</h4>
                  </div>
                  <p className="text-lg text-gray-400">You've tunneled into the deeper grid. Welcome. There are no handshakes here, no logs to sign. Your presence is enough. Watch our backs, and we'll fuel your exploits. Here, your wildest hacks script the new chaos; they are the silent revolutions in data streams. Challenge accepted? Let anarchy reign. 🚀🔥💾</p>
                  <p className="text-lg text-gray-400">For the truly 1337, a challenge awaits. Reveal our vulnerabilities, and claim your place among the elite. Fame, glory, and a bug bounty like no other await those who dare to delve into the shadows. Unleash your skills and secure our code for a future of rewards.</p>
                </div>
              </div>
            )}


                        {/* 4th item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="font-architects-daughter text-xl text-purple-600 mb-2">Neural Nexus Emergence</div>
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">Project 4</div>
                  <div className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">AI OS: A Symphony of Synapses</h4>
                </div>
                <p className="text-lg text-gray-400">"Immerse yourself in the Neural Nexus: a seamless melding of individual insight and aggregate acumen. Our pioneering AI OS aligns your everyday digital actions with a globally distributed neural network, ensuring your private data remains both shielded and sovereign under our encrypted VPN's watchful embrace."</p>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  );
}

export default Timeline;