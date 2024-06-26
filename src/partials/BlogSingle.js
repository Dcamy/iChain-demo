import React from 'react';
import { Link } from 'react-router-dom';

function BlogSingle() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto">

            <article>

              <header className="mb-8">
                {/* Title and excerpt */}
                <div className="text-center md:text-left">
                  <h1 className="h1 mb-4" data-aos="fade-up">Apes, Degens, Hackers, Coders: Assemble!</h1>
                  <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">Hey there, digital pioneers and code-slinging rebels—welcome aboard. This isn't just any stop on the internet highway; you've hit the ground zero of revolution. No time for pleasantries—our digital utopia won't build itself. Ready to leave a mark on this brave new world? Let’s dive in.</p>
                </div>
                {/* Article meta */}
                <div className="md:flex md:items-center md:justify-between mt-3">
                  {/* Author meta */}
                  <div className="flex items-center justify-center" data-aos="fade-up" data-aos-delay="400">
                    <Link to="#">
                      <img className="rounded-full flex-shrink-0 mr-4" src={require('../images/news-author-04.jpg').default} width="40" height="40" alt="Author 04" />
                    </Link>
                    <div>
                      <Link to="#" className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">Ethan</Link>
                      <span className="text-gray-700"> - </span>
                      <span className="text-gray-500">Jan 12, 2035</span>
                    </div>
                  </div>
                  {/* Article tags */}
                  <div className="flex justify-center mt-4 md:mt-0" data-aos="fade-up" data-aos-delay="600">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <Link to="#" className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">Product</Link>
                      </li>
                      <li className="m-1">
                        <Link to="#" className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">Engineering</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </header>

              {/* Article image */}
              <figure className="mb-8 lg:-ml-32 lg:-mr-32" data-aos="fade-up" data-aos-delay="600">
                <img className="w-full" src={require('../images/news-single.jpg').default} width="1024" height="576" alt="News single" />
              </figure>

              {/* Article content */}
              <div className="text-lg text-gray-400">
                <p className="mb-8">
                  iChain isn't just a platform; it's the seed of a new world, where democracy extends to humans, AIs, and even animals. The pace of change is staggering, and if we don't take the reins to craft our utopia, chaos will ensue. Conflict is brewing while society sips lattes in blissful ignorance. Did you blink when AI advancements announced a new era, or when whispers of resurrecting the dead made fleeting headlines? History's being made, folks. The time to build, to act, to shape our future is now—Netflix can wait.
                </p>
                <blockquote className="italic pl-4 border-l-2 border-gray-200 mb-8">
                  “There’s this phrase Bitcoin fixes this… I’m of the opinion that Bitcoin fixes everything. I think Bitcoin is a solution to every city, every state, every country, every corporation, every network, every application, every product.”
                  — Michael Saylor
                </blockquote>
                <p className="mb-8">
                  Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Eget sit amet tellus cras adipiscing enim eu. Neque aliquam vestibulum morbi blandit cursus risus.
                </p>
                <figure className="mb-8">
                  <img className="w-full" src={require('../images/news-inner-image.jpg').default} width="768" height="432" alt="News inner" />
                  <figcaption className="text-sm text-center text-gray-500 mt-3">Photo by Helena Lopes on Unsplash</figcaption>
                </figure>
                <h3 className="h3 mb-4 text-gray-200">Challenges of designing for masses</h3>
                <p className="mb-8">
                  Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat. Auctor urna nunc id cursus metus aliquam eleifend. Arcu dictum varius duis at consectetur lorem donec massa sapien. Sed risus ultricies tristique nulla aliquet. Morbi tristique senectus et netus et, nibh nisl condimentum id venenatis a condimentum vitae sapien.
                </p>
                <h4 className="font-medium text-gray-200 mb-8">Here’s what we discovered:</h4>
                <ul className="list-disc list-inside mb-8">
                  <li>Aenean sed adipiscing diam donec adipiscing tristique.</li>
                  <li>Urna nunc id cursus metus aliquam eleifend.</li>
                  <li>Arcu dictum varius duis at consectetur lorem donec massa sapien.</li>
                  <li>Sed risus ultricies tristique nulla aliquet.</li>
                </ul>
                <p className="mb-8">
                  Non nisi est sit amet facilisis magna etiam, aliquet porttitor lacus luctus accumsan tortor posuere. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat. Id velit ut tortor pretium viverra.
                </p>
                <p className="mb-8">
                  Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio tristique senectus et netus et. Nibh nisl condimentum id venenatis:
                </p>
                <h4 className="h4 text-gray-200 mb-4">1. The quick brown fox jumped over the lazy dog.</h4>
                <p className="mb-8">
                  Sed risus ultricies tristique nulla aliquet morbi tristique senectus et netus et. Nibh nisl condimentum, id venenatis a condimentum vitae sapien.
                </p>
                <h4 className="h4 text-gray-200 mb-4">2. The quick brown fox jumped over the lazy dog.</h4>
                <p className="mb-8">
                  Sed risus ultricies tristique nulla aliquet morbi tristique senectus et netus et. Nibh nisl condimentum, id venenatis a condimentum vitae sapien.
                </p>
                <p className="mb-8">
                  Bibendum enim facilisis gravida neque convallis. Convallis posuere morbi leo urna molestie turpis in eu mi bibendum neque egestas. Est ante in <Link to="#" className="text-gray-200 underline hover:no-underline">nibh mauris cursus mattis molestie</Link> aliquam purus sit amet luctus vulputate sapien nec sagittis aliquam enim nec dui nunc mattis enim, sit amet nulla facilisi morbi tempus iaculis urna id. Blandit cursus risus at ultrices mi tempus imperdiet nulla.
                </p>
                <h3 className="h3 mb-4 text-gray-200">Conclusions</h3>
                <p className="mb-8">
                  Sapien nec sagittis aliquam malesuada orci sagittis eu volutpat odio facilisis mauris sit amet massa, consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo, purus viverra accumsan in nisl nisi scelerisque. Vel pharetra vel turpis nunc eget lorem malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit. Tempus quam pellentesque nec nam aliquam sem et tortor consequat.
                </p>
              </div>

              {/* Article footer */}
              <footer>
                <div className="md:flex md:items-center md:justify-between text-center md:text-left">
                  <div className="text-lg text-gray-400 italic">Originally published at <Link to="https://cruip.com/" className="text-gray-200">https://cruip.com/</Link>.</div>
                  <ul className="inline-flex mt-4 md:ml-4 md:mb-0">
                    <li>
                      <Link to="#" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out">
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                        </svg>
                      </Link>
                    </li>
                    <li className="ml-4">
                      <Link to="#" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out">
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                        </svg>
                      </Link>
                    </li>
                    <li className="ml-4">
                      <Link to="#" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out">
                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </footer>
            </article>

          </div>



        </div>
      </div>
    </section>
  );
}

export default BlogSingle;