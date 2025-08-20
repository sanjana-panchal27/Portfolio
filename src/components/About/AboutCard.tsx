import React from 'react';

// AboutCard component styled with Tailwind CSS to match the screenshot's aesthetic.
const AboutCard = () => {
  return (
    // Main container acting as a card with a dark gradient, rounded corners, and shadow.
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl p-6 md:p-8 text-gray-200">
      {/* Blockquote for the main content to give it a literary feel. */}
      <blockquote className="font-sans">
        <p className="text-xl leading-relaxed mb-4 text-white">
          Hi Everyone, I am{' '}
          <span className="text-purple-400 font-semibold">Sanjana Panchal</span>{' '}
          from{' '}
          <span className="text-purple-400 font-semibold">
            Ahmedabad, Gujarat, India.
          </span>
        </p>
        <p className="text-lg leading-relaxed mb-4 text-gray-300">
          I've completed my Bachelor's degree B.Sc.IT June, 2025.
        </p>

        {/* List of hobbies with a descriptive heading. */}
        <div className="mt-8">
          <p className="text-lg font-medium text-white mb-3">
            Apart from coding, some other activities that I love to do:
          </p>
          <ul className="list-none pl-0">
            {/* List items with inline SVG icons for styling. */}
            <li className="flex items-center mb-2 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 mr-3 text-pink-400 flex-shrink-0"
              >
                <path d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" />
              </svg>
              Reading
            </li>
            <li className="flex items-center mb-2 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 mr-3 text-pink-400 flex-shrink-0"
              >
                <path d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" />
              </svg>
              Drawing
            </li>
            <li className="flex items-center mb-2 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 mr-3 text-pink-400 flex-shrink-0"
              >
                <path d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" />
              </svg>
              Taekwondo
            </li>
          </ul>
        </div>

        {/* Quote section with a distinct style. */}
        <div className="mt-8 text-right">
          <p className="text-xl italic text-yellow-300 font-semibold">
            <q>No one can compete with you on BEING YOU.</q>
          </p>
        </div>
      </blockquote>
    </div>
  );
};

export default AboutCard;
