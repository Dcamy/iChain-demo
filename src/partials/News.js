import React from 'react';

// Function to shuffle an array
const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};

// Dynamically loading project components
const projectFiles = require.context('../projects', false, /\.js$/);
const allProjectComponents = projectFiles.keys().map((filename) => {
  return projectFiles(filename).default;
});

// Shuffle and take the first three components
const randomProjectComponents = shuffleArray([...allProjectComponents]).slice(0, 3);


function News() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2" data-aos="fade-up">Lifetime Rewards for Innovators, Developers, and Funders</h2>
          </div>

          {/*// In your JSX*/}
          <div className="max-w-sm mx-auto md:max-w-none">
            <h4 className="h4 pb-6 mb-10 border-b border-gray-700" data-aos="fade-up">
              Upcoming Projects - Next Up Project SynergyCoin (SGC)
            </h4>
            <section className="relative">
              <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {randomProjectComponents.map((Component, index) => (
                  <Component key={index} />
                ))}
              </div>
            </section>
          </div>

        </div>
      </div>
    </section>
  );
}

export default News;
