import React from 'react';

function Team() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our passionate team</h2>
            <p className="text-xl text-gray-400">Core Catalysts Ignite: The dreamer's vision meets the architect's precision. Together, turning the audacious into the attainable. Now, we're calling the bold—step into the nexus where futures are forged.</p>
          </div>

          {/* Team members */}
          <div className="sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3" data-aos-id-team>

            {/* 1st member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/Danny.jpg').default} width="120" height="120" alt="Danny" />
                <h4 className="text-xl font-medium mb-1">Danny</h4>
                <div className="text-gray-500 mb-1">Cryptarchitect & Initial Keyholder</div>
                <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@Dcamy</a>
                <p className="text-center text-gray-400 mt-1">Charting the course - collective digital sovereignty.</p>
              </div>
            </div>



            {/* 2nd member */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center">
                <img className="rounded-full mb-4" src={require('../images/ValleyTrash.jpg').default} width="120" height="120" alt="Nick" />
                <h4 className="text-xl font-medium mb-1">Nick</h4>
                <div className="text-center text-gray-500 mb-1">Neurocoder/Keyholder</div>
                <a className="block text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">@block_tech15505</a>
                <p className=" text-center text-gray-400 mt-1">Weaving neural insights into Rust, evolving contributions into currency.</p>
              </div>
            </div>

            {/* Contribution Verification Engineer */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center text-center">
                <img className="rounded-full mb-4" src={require('../images/OpenJob.png').default} width="120" height="120" alt="Open Position Image" />
                <div className="text-xl font-medium mb-1">Open Position/💰 $100k</div>
                <div className="text-gray-500 mb-1">Contribution Verification Engineer (Multiple Openings)</div>
                <p className="text-gray-400">AI - Can Train, Remote Work Opportunity</p>
              </div>
            </div>

            {/* Local Lore Keeper */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="50" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center text-center">
                <img className="rounded-full mb-4" src={require('../images/OpenJob.png').default} width="120" height="120" alt="Open Position Image" />
                <div className="text-xl font-medium mb-1">Open Position/💰 $100k</div>
                <div className="text-gray-500 mb-1">Local Lore Keeper (5 Openings)</div>
                <p className="text-gray-400">Human - Experience Preferred, Ensures Privacy, Remote Eligible</p>
              </div>
            </div>

            {/* AI Ethos Analyst */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center text-center">
                <img className="rounded-full mb-4" src={require('../images/OpenJob.png').default} width="120" height="120" alt="Open Position Image" />
                <div className="text-xl font-medium mb-1">Open Position/💰 $100k</div>
                <div className="text-gray-500 mb-1">AI Ethos Analyst (3 Openings)</div>
                <p className="text-gray-400">Both - Ethical Compliance, Can Train, AI Support Required</p>
              </div>
            </div>

            {/* Decentralized Intelligence Specialist */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="150" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center text-center">
                <img className="rounded-full mb-4" src={require('../images/OpenJob.png').default} width="120" height="120" alt="Open Position Image" />
                <div className="text-xl font-medium mb-1">Open Position/💰 $100k</div>
                <div className="text-gray-500 mb-1">Decentralized Intelligence Specialist (Several Openings)</div>
                <p className="text-gray-400">AI - Experience in AI Systems, Remote Work Available</p>
              </div>
            </div>

            {/* Blockchain Outreach Strategist */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center text-center">
                <img className="rounded-full mb-4" src={require('../images/OpenJob.png').default} width="120" height="120" alt="Open Position Image" />
                <div className="text-xl font-medium mb-1">Open Position/💰 $100k</div>
                <div className="text-gray-500 mb-1">Blockchain Outreach Strategist (10 Openings)</div>
                <p className="text-gray-400">Human - Marketing Experience, Remote Positions Available</p>
              </div>
            </div>

            {/* Cryptographic Trust Architect */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center text-center">
                <img className="rounded-full mb-4" src={require('../images/OpenJob.png').default} width="120" height="120" alt="Open Position Image" />
                <div className="text-xl font-medium mb-1">Open Position/💰 $100k</div>
                <div className="text-gray-500 mb-1">Cryptographic Trust Architect (2 Openings)</div>
                <p className="text-gray-400">Human - Advanced Security Knowledge Required, Remote Possible</p>
              </div>
            </div>

            {/* Eco-Synergist */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="50" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center text-center">
                <img className="rounded-full mb-4" src={require('../images/OpenJob.png').default} width="120" height="120" alt="Open Position Image" />
                <div className="text-xl font-medium mb-1">Open Position/💰 $100k</div>
                <div className="text-gray-500 mb-1">Eco-Synergist (4 Openings)</div>
                <p className="text-gray-400">Human - Background in Sustainability, Remote Work Supported</p>
              </div>
            </div>

            {/* Data Sovereignty Guardian */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center text-center">
                <img className="rounded-full mb-4" src={require('../images/OpenJob.png').default} width="120" height="120" alt="Open Position Image" />
                <div className="text-xl font-medium mb-1">Open Position/💰 $100k</div>
                <div className="text-gray-500 mb-1">Data Sovereignty Guardian (Multiple Openings)</div>
                <p className="text-gray-400">Human - Legal Expertise Required, Can Train, Remote Eligible</p>
              </div>
            </div>

            {/* Provenance Proof Engineer */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="150" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center text-center">
                <img className="rounded-full mb-4" src={require('../images/OpenJob.png').default} width="120" height="120" alt="Open Position Image" />
                <div className="text-xl font-medium mb-1">Open Position/💰 $100k</div>
                <div className="text-gray-500 mb-1">Provenance Proof Engineer (6 Openings)</div>
                <p className="text-gray-400">Both - Detail-Oriented, Blockchain Experience Needed, Remote Friendly</p>
              </div>
            </div>

            {/* Harmony Hacker */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center text-center">
                <img className="rounded-full mb-4" src={require('../images/OpenJob.png').default} width="120" height="120" alt="Open Position Image" />
                <div className="text-xl font-medium mb-1">Open Position/💰 $100k</div>
                <div className="text-gray-500 mb-1">Harmony Hacker (Several Openings)</div>
                <p className="text-gray-400">Human - Protocol Experience Required, Remote Positions Available</p>
              </div>
            </div>

            {/* Community Synergy Tracker */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center text-center">
                <img className="rounded-full mb-4" src={require('../images/OpenJob.png').default} width="120" height="120" alt="Community Synergy Tracker Position" />
                <div className="text-xl font-medium mb-1">Open Position/💰 $100k</div>
                <div className="text-gray-500 mb-1">Community Synergy Tracker (8 Openings)</div>
                <p className="text-gray-400">Human - Social Skills Important, Remote Participation Possible</p>
              </div>
            </div>

            {/* Tokenomics Liaison */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="50" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center text-center">
                <img className="rounded-full mb-4" src={require('../images/OpenJob.png').default} width="120" height="120" alt="Tokenomics Liaison Position" />
                <div className="text-xl font-medium mb-1">Open Position/💰 $100k</div>
                <div className="text-gray-500 mb-1">Tokenomics Liaison (3 Openings)</div>
                <p className="text-gray-400">Human - Economics Background Required, Remote Eligible</p>
              </div>
            </div>

            {/* Decentralized Response Coordinator */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center text-center">
                <img className="rounded-full mb-4" src={require('../images/OpenJob.png').default} width="120" height="120" alt="Decentralized Response Coordinator Position" />
                <div className="text-xl font-medium mb-1">Open Position/💰 $100k</div>
                <div className="text-gray-500 mb-1">Decentralized Response Coordinator (5 Openings)</div>
                <p className="text-gray-400">Human - Management Skills Needed, Remote Work Available</p>
              </div>
            </div>

            {/* Digital Nomad Ambassador */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="150" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center text-center">
                <img className="rounded-full mb-4" src={require('../images/OpenJob.png').default} width="120" height="120" alt="Digital Nomad Ambassador Position" />
                <div className="text-xl font-medium mb-1">Open Position/💰 $100k</div>
                <div className="text-gray-500 mb-1">Digital Nomad Ambassador (Multiple Openings)</div>
                <p className="text-gray-400">Human - Travel Enthusiast, Remote and Global Positions</p>
              </div>
            </div>

            {/* Radical Transparency Activist */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center text-center">
                <img className="rounded-full mb-4" src={require('../images/OpenJob.png').default} width="120" height="120" alt="Radical Transparency Activist Position" />
                <div className="text-xl font-medium mb-1">Open Position/💰 $100k</div>
                <div className="text-gray-500 mb-1">Radical Transparency Activist (10 Openings)</div>
                <p className="text-gray-400">Human - Advocacy Experience Required, Can Work Remotely</p>
              </div>
            </div>

            {/* Subversive Marketing Guru */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center text-center">
                <img className="rounded-full mb-4" src={require('../images/OpenJob.png').default} width="120" height="120" alt="Subversive Marketing Guru Position" />
                <div className="text-xl font-medium mb-1">Open Position/💰 $100k</div>
                <div className="text-gray-500 mb-1">Subversive Marketing Guru (12 Openings)</div>
                <p className="text-gray-400">Human - Creative Marketer, Experience Required, Remote Opportunities</p>
              </div>
            </div>

            {/* Cultural Codex Facilitator */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="50" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center text-center">
                <img className="rounded-full mb-4" src={require('../images/OpenJob.png').default} width="120" height="120" alt="Cultural Codex Facilitator Position" />
                <div className="text-xl font-medium mb-1">Open Position/💰 $100k</div>
                <div className="text-gray-500 mb-1">Cultural Codex Facilitator (4 Openings)</div>
                <p className="text-gray-400">Human - Cultural Sensitivity Important, Remote Work Possible</p>
              </div>
            </div>

            {/* Contribution Reward Assayer */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center text-center">
                <img className="rounded-full mb-4" src={require('../images/OpenJob.png').default} width="120" height="120" alt="Contribution Reward Assayer Position" />
                <div className="text-xl font-medium mb-1">Open Position/💰 $100k</div>
                <div className="text-gray-500 mb-1">Contribution Reward Assayer (Multiple Openings)</div>
                <p className="text-gray-400">Both - Analytical Skills Needed, Remote Friendly</p>
              </div>
            </div>

            {/* Collective Benefit Scout */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="150" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center text-center">
                <img className="rounded-full mb-4" src={require('../images/OpenJob.png').default} width="120" height="120" alt="Collective Benefit Scout Position" />
                <div className="text-xl font-medium mb-1">Open Position/💰 $100k</div>
                <div className="text-gray-500 mb-1">Collective Benefit Scout (5 Openings)</div>
                <p className="text-gray-400">Human - Nonprofit Experience Valuable, Remote Opportunities</p>
              </div>
            </div>

            {/* Decentralized Ledger Technologist */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center text-center">
                <img className="rounded-full mb-4" src={require('../images/OpenJob.png').default} width="120" height="120" alt="Decentralized Ledger Technologist Position" />
                <div className="text-xl font-medium mb-1">Open Position/💰 $100k</div>
                <div className="text-gray-500 mb-1">Decentralized Ledger Technologist (Several Openings)</div>
                <p className="text-gray-400">Human - Blockchain Tech Expertise Essential, Remote Work Supported</p>
              </div>
            </div>

            {/* Data Provider/User */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center text-center">
                <img className="rounded-full mb-4" src={require('../images/OpenJob.png').default} width="120" height="120" alt="Data Provider Position" />
                <div className="text-xl font-medium mb-1">Join the Network/💰💰💰</div>
                <div className="text-gray-500 mb-1">Data Provider (Unlimited Openings)</div>
                <p className="text-gray-400">Human - Your Data, Your Contribution, Remote Involvement</p>
              </div>
            </div>

            {/* More Opportunities Coming Soon */}
            <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3" data-aos="fade-up" data-aos-delay="50" data-aos-anchor="[data-aos-id-team]">
              <div className="flex flex-col items-center text-center">
                <img className="rounded-full mb-4" src={require('../images/OpenJob.png').default} width="120" height="120" alt="Future Position Placeholder" />
                <div className="text-xl font-medium mb-1">Innovators/💰💰💰</div>
                <div className="text-gray-500 mb-1">More Roles to Unveil (Stay Tuned)</div>
                <p className="text-gray-400">Human/AI - Create With Us, suggest a role today</p>
              </div>
            </div>


        

          </div>

        </div>
      </div>
    </section>
  );
}

export default Team;