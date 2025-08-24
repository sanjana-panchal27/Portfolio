import React from 'react';

const Contact = () => {
  // Use a simplified form submission approach using the native form attributes.
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Get form data
    const form = e.target;
    const formData = new FormData(form);
    
    // Submit form to Formspree endpoint
    try {
      const response = await fetch('https://formspree.io/f/xkgvwrkg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setIsSuccess(true);
        form.reset(); // Clear the form
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('An error occurred during form submission:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Original state and handlers for other sections
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Me',
      subtitle: 'panchalsanjana48@gmail.com',
      description: "Drop me a line and I'll get back to you within 24 hours",
      action: 'Send Email',
      gradient: 'from-blue-500 to-cyan-500',
      href: 'mailto:panchalsanjana48@gmail.com',
    },
    {
      icon: '💬',
      title: 'Upwork',
      subtitle:
        'https://www.upwork.com/freelancers/~01f2f9a4dbf5e0b7a9?mp_source=share',
      description: "Quick questions? Let's have a real-time conversation",
      action: 'Start Chat',
      gradient: 'from-green-500 to-emerald-500',
      href: 'https://www.upwork.com/freelancers/~01f2f9a4dbf5e0b7a9?mp_source=share',
    },
    {
      icon: '🎯',
      title: 'Book a Call',
      subtitle: '15-30 min session',
      description: 'Schedule a free consultation to discuss your project',
      action: 'Book Now',
      gradient: 'from-purple-500 to-pink-500',
      href: '#',
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      subtitle: 'Professional Network',
      description: 'Connect with me for professional opportunities',
      action: 'Connect',
      gradient: 'from-indigo-500 to-blue-500',
      href: 'https://www.linkedin.com/in/sanjana-panchal27/',
    },
  ];

  const skills = [
    'React',
    'Node.js',
    'MongoDB',
    'Express',
    'JavaScript',
    'Python',
    'UI/UX',
  ];

  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">
                Available for new projects
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Let's Create
              </span>
              <br />
              <span className="text-white">Something Amazing</span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? I'm here to help you build
              exceptional digital experiences that make an impact. Let's discuss
              your next project!
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-full text-sm backdrop-blur-sm border border-slate-700/50"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Preferred Way
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            Pick the method that works best for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-6 border border-slate-700/50 transition-all duration-300 cursor-pointer group ${
                hoveredCard === index ? 'transform -translate-y-2' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>
              <div className="relative">
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {method.title}
                </h3>
                <p
                  className={`text-sm font-medium mb-3 bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent`}
                >
                  {method.subtitle}
                </p>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {method.description}
                </p>
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-medium transition-all bg-gradient-to-r ${method.gradient} text-white hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 block text-center`}
                >
                  {method.action}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-slate-600/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Drop Me a{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Message
                </span>
              </h2>
              <p className="text-slate-400 text-lg">
                Tell me about your project and let's make it happen
              </p>
            </div>

            {/* This is the new section for conditional rendering */}
            {isSuccess ? (
              <div className="p-8 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Message Sent!
                </h2>
                <p className="text-slate-300">
                  Thanks for reaching out. I'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="Name"
                      className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm"
                      placeholder="John Doe"
                    />
                  </div>
  
                  <div className="group">
                    <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="Email"
                      className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-slate-300 text-sm font-medium mb-2">
                    Project Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="Subject"
                    className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm"
                    placeholder="Web Development Project"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-2">
                    Tell me about your project *
                  </label>
                  <textarea
                    id="message"
                    name="Message"
                    rows="6"
                    className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm resize-none"
                    placeholder="Describe your project requirements, timeline, and any specific features you need..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-12 py-4 rounded-xl font-bold text-lg transition-all transform ${
                      isSubmitting
                        ? 'bg-slate-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"></div>
                        Sending...
                      </div>
                    ) : (
                      'Send Message 🚀'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            { number: '24h', label: 'Response Time' },
            { number: '50+', label: 'Projects Completed' },
            { number: '100%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-20 pb-20">
          <p className="text-slate-400 text-lg mb-6">
            Ready to start your project? Let's make something incredible
            together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              Schedule a Free Call
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-slate-800 text-white rounded-xl font-medium border border-slate-600 hover:bg-slate-700 transition-all"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
