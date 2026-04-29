import { BookOpen, Laptop, Zap } from 'lucide-react';

const TheLuminaExperience = () => {
  const features = [
    {
      title: 'Curated Quality',
      description:
        'Every book in our collection passes a rigorous formatting and quality check for the best reading experience.',
      icon: <BookOpen className="w-6 h-6 text-primaryColor" />,
      bgColor: 'bg-[#E2DFFF]',
    },
    {
      title: 'Cloud Sync',
      description:
        'Start reading on your laptop and finish on your phone. Your progress and highlights are always in sync.',
      icon: <Laptop className="w-6 h-6 text-[#006172]" />,
      bgColor: 'bg-[#ACEDFF]',
    },
    {
      title: 'Offline Access',
      description:
        'Download your library and read anytime, anywhere, even without an internet connection.',
      icon: <Zap className="w-6 h-6 text-[#7B2F00]" />,
      bgColor: 'bg-[#FFDBCC]',
    },
  ];

  return (
    <section className="py-20 px-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Lumina Experience
          </h2>
          <p className="text-gray-600 text-lg">
            We ve reimagined the digital library for the modern intellectual.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F0ECF9] p-10 rounded-[2rem] flex flex-col items-start transition-transform hover:-translate-y-1 duration-300 cursor-pointer"
            >
              {/* Icon Container */}
              <div className={`p-3 rounded-xl ${feature.bgColor} mb-6`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheLuminaExperience;
