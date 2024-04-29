import React, { useState } from 'react';

function Newsletter() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const toggleEasterEgg = () => {
    setShowEasterEgg(!showEasterEgg);
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative bg-purple-600 py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">
          <div className="absolute right-0 top-0 -ml-40 w-full h-full bg-black bg-opacity-50 pointer-events-none" aria-hidden="true"
            style={{
              backgroundImage: `url(${require('../images/NewsletterCTA.png').default})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-black mb-2">Stay in the loop</h3>
              <p className="text-black text-lg">Join our newsletter to get top news before anyone else.</p>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <button className="btn text-white bg-purple-600 hover:text-purple-600 hover:bg-white shadow px-4 py-3 mb-2 sm:mb-0 sm:mr-2" onClick={toggleEasterEgg}>
                  {showEasterEgg ? (
                    <span>
                      🖱️👇🔍🖍️✨
                    </span>
                  ) : (
                    "Subscribe"
                  )}
                </button>


              </div>
              {showEasterEgg && (
                <p className="font-bold text-center lg:text-left mt-2 text-transparent hover:text-purple-200 transition-colors duration-300">
                  WOW Who do you think we are, the NSA? Your data is your data and we don't need your email.
                  But we do sometimes send emails to our holders via-
                  <a href="https://linktoethmail.something" className="underline text-transparent hover:text-white hover:bg-purple-500 hover:shadow-outline">Ethmail</a>.
                  We apologize for even needing your wallet address, but it's better than stealing all your stuff and then selling it! 😏 🤷
                </p>



              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
