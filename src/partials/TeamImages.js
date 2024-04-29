import React from 'react';

function TeamImages() {
  return (
    <section className="relative -mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative w-full h-0 pb-3/4">
            <figure className="absolute h-auto" style={{ top: '45%', width: '41.67%', maxWidth: '320px' }} data-aos="fade-right">
              <img src={require('../images/SocialImpact.webp').default} width="320" height="240" alt="Team mosaic 02" />
            </figure>
            <figure className="relative mx-auto h-auto" style={{ width: '78.13%', maxWidth: '600px' }} data-aos="fade-down" data-aos-delay="100">
              <img src={require('../images/Screenshot 2024-04-01 202933.png').default} width="600" height="338" alt="Team mosaic 01" />
            </figure>
            <figure className="absolute h-auto" style={{ top: '8.5%', right: '0', width: '32.55%', maxWidth: '250px'}} data-aos="fade-left" data-aos-delay="200">
              <img src={require('../images/danny0639_Using_this_image_for_branding_and_style_please_make_i_085e3ce4-0881-4d4f-9624-eb4e598d3b3a.png').default} width="250" height="188" alt="Team mosaic 03" />
            </figure>
            <figure className="absolute h-auto" style={{ bottom: '0', right: '20%', width: '25.52%', maxWidth: '196px' }} data-aos="fade-up" data-aos-delay="300">
              <img src={require('../images/danny0639_Using_this_image_for_branding_and_style_please_make_i_fd5b2b11-2560-4258-a06f-c5af32be0abb.png').default} width="196" height="196" alt="Team mosaic 04" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamImages;