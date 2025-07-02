// import { FaPlay } from 'react-icons/fa';
import YouTube from 'react-youtube';

const OurStory = () => {
  const cards = [
    {
      title: 'Best Price Guaranteed',
      description: 'Our Price and Developer design experience are combined with expertise to deliver services.',
    },
    {
      title: 'Best Price Guaranteed',
      description: 'Our Price and Developer design experience are combined with expertise to deliver services.',
    },
    {
      title: 'Best Price Guaranteed',
      description: 'Our Price and Developer design experience are combined with expertise to deliver services.',
    },
  ];

  return (
    <section className="bg-white px-4 md:px-20 py-12">
    <div className='flex justify-center w-full h-full -mt-40 items-center flex-col '>
      {/* Header and Description */}
      <p className="text-blue-700 text-3xl font-bold underline mb-7">Our Story</p>
      <h2 className="text-3xl md:text-3xl font-bold mb-7">
        "We don’t sell memberships.<span className="text-blue-700">We build long-term </span> fitness relationships."
      </h2>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <p className="text-gray-700 text-sm leading-relaxed">
              Over time, people came not just for workouts, but for hope, for change, and for a support system. Slowly, our gym became a second home for many. Students, working professionals, homemakers — each with a different goal, but one thing in common: they wanted to become better.        </p>
        <p className="text-gray-700 text-sm leading-relaxed">
          Our trainers don’t just count reps — they understand your struggle. We don’t believe in shortcuts — we believe in consistent effort. That’s why, when you join us, you don’t just join a gym — you join a family that supports you, motivates you, and walks with you every step of the way.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
        {cards.map((card, index) => (
          <a href='#'>
          <div key={index} className="bg-white shadow-md p-6 rounded-md text-center">
            <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-700 flex items-center justify-center rounded-full mb-4 text-xl font-bold">
              iD
            </div>
            <h4 className="font-semibold mb-2">{card.title}</h4>
            <p className="text-sm text-gray-600">{card.description}</p>
          </div>
          </a>
        ))}
      </div>

  {/* Desktop View: */}
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

  <div className="relative w-full h-full">
    <img
      src="/About/dxz.png"
      alt="Team at Work"
      className="rounded-md w-full h-auto object-cover"
    />
    {/* Video overlay on left */}
    <div className='h-full w-full'>
    <div className="hidden md:flex absolute inset-0 items-center justify-end -right-[150%] pr-20 z-10">
      <YouTube videoId="rMA6ezJ0sR0" className="w-3/5 h-auto rounded-md" />
    </div>
    </div>
    <a
      href="#"
      className="absolute top-4 left-4 cursor-pointer z-20 text-blue-700 font-semibold bg-white/80 px-4 py-2 rounded shadow hidden md:inline-block"
    >
      Know More
    </a>
  </div>


  {/* Right: Video below */}
  <div className="md:hidden flex flex-col items-center justify-start w-full">
    <YouTube videoId="rMA6ezJ0sR0" className="w-[70%] max-w-xs rounded-md h-auto" />
    <a
      href="#"
      className="mt-4 cursor-pointer text-blue-700 font-semibold bg-white/80 px-4 py-2 rounded shadow"
    >
      Know More
    </a>
  </div>
</div>





      {/* HR Section */}
      <div className="bg-gray-100 rounded-lg p-8 grid md:grid-cols-2 gap-6 items-center">
        <img
          src="/public/About/h2-about.jpg.png"
          alt="Team Discussion"
          className="rounded-md w-full h-full object-cover"
        />
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            One Stop Solution For All <br />
          </h3>
          <p className="text-sm text-gray-600 font-bold mb-4">
            Our solution is simple: Give you the tools, support, and environment to become the best version of yourself.</p>
          <p className="text-sm text-gray-700 mb-4">
            <strong className="text-blue-700">Our mission</strong> | <strong className="text-blue-700">Our Vision</strong><br />
            We understand that fitness is not one-size-fits-all. Everyone’s body, goals, and challenges are different. That’s why at <span className='text-xl font-bold'>igniis</span>, we focus on customized solutions, not generic plans.
            Whether you're trying to lose weight, gain muscle, improve flexibility, or just feel more energetic — we’ve got a plan for you.          </p>
          <button className="bg-blue-700 text-white px-5 py-2 rounded-md hover:bg-blue-800">
            <a href='#'>Learn More</a>
          </button>
        </div>
      </div>
      </div>
  
    </section>
  );
};

export default OurStory;
