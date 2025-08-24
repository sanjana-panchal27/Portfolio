import React, { useState } from 'react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with MERN Stack Development',
      excerpt:
        'Learn how to build full-stack applications using MongoDB, Express.js, React, and Node.js. This comprehensive guide covers everything from setup to deployment.',
      date: 'Aug 20, 2024',
      readTime: '8 min read',
      category: 'Web Development',
      image:
        'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&h=300&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    },
    {
      id: 2,
      title: 'Modern CSS Techniques for Better UI Design',
      excerpt:
        'Explore advanced CSS features like Grid, Flexbox, and CSS Variables to create stunning and responsive user interfaces that work across all devices.',
      date: 'Aug 15, 2024',
      readTime: '6 min read',
      category: 'Frontend',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
      tags: ['CSS', 'UI/UX', 'Responsive Design'],
    },
    {
      id: 3,
      title: 'Building RESTful APIs with Node.js and Express',
      excerpt:
        'A detailed walkthrough of creating robust and scalable REST APIs. Learn about routing, middleware, authentication, and best practices.',
      date: 'Aug 10, 2024',
      readTime: '12 min read',
      category: 'Backend',
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop',
      tags: ['Node.js', 'Express', 'API', 'Backend'],
    },
    {
      id: 4,
      title: 'State Management in React: Redux vs Context API',
      excerpt:
        'Compare different state management solutions in React applications. When to use Redux, Context API, or simple component state.',
      date: 'Aug 5, 2024',
      readTime: '10 min read',
      category: 'React',
      image:
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop',
      tags: ['React', 'Redux', 'State Management'],
    },
    {
      id: 5,
      title: 'Database Design Best Practices with MongoDB',
      excerpt:
        'Learn how to design efficient and scalable database schemas in MongoDB. Cover indexing, relationships, and performance optimization.',
      date: 'Jul 30, 2024',
      readTime: '9 min read',
      category: 'Database',
      image:
        'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=500&h=300&fit=crop',
      tags: ['MongoDB', 'Database', 'NoSQL'],
    },
    {
      id: 6,
      title: 'Deploying Full-Stack Applications to the Cloud',
      excerpt:
        'Step-by-step guide to deploy your MERN applications to cloud platforms like Heroku, Netlify, and AWS. Including CI/CD setup.',
      date: 'Jul 25, 2024',
      readTime: '15 min read',
      category: 'DevOps',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop',
      tags: ['Deployment', 'Cloud', 'DevOps', 'AWS'],
    },
  ];

  const categories = [
    'All',
    'Web Development',
    'Frontend',
    'Backend',
    'React',
    'Database',
    'DevOps',
  ];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text max-w-3xl mx-auto">
            Explore Build Create
          </h1>
        </div>

        <div className="mb-12">
          <div className="max-w-md mx-auto mb-8">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>

        <div className="text-center mt-16">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-medium transition-all border border-slate-700 hover:border-slate-600 cursor-pointer">
            Load More Articles
          </button>
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Stay Updated with My Latest Posts
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Subscribe to get notified when I publish new articles about web
            development, programming tips, and tech insights.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
