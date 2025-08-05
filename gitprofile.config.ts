const CONFIG = {
  github: {
    username: 'priyankabolem', // ✅ Your GitHub username
  },

  base: '/', // ✅ For GitHub Pages using username.github.io

  projects: {
    github: {
      display: false, // ❌ Hide automatic GitHub projects
      header: '',
      mode: 'manual',
      manual: {
        projects: [],
      },
      automatic: {
        sortBy: 'stars',
        limit: 0,
        exclude: {
          forks: true,
          projects: [],
        },
      },
    },
    external: {
      header: 'Featured Projects',
      projects: [
        {
          title: 'NutriGuide',
          description: 'AI-powered app that analyzes food images and provides nutritional insights using TensorFlow and Hugging Face.',
          imageUrl: 'https://raw.githubusercontent.com/priyankabolem/nutriguide/main/screenshot.png',
          link: 'https://github.com/priyankabolem/nutriguide',
        },
        {
          title: 'NWMSU Chatbot',
          description: 'University chatbot using LangChain, Neo4j, and OpenAI for Retrieval-Augmented Generation.',
          imageUrl: 'https://raw.githubusercontent.com/priyankabolem/nwmsu-chatbot-rag/main/screenshot.png',
          link: 'https://github.com/priyankabolem/nwmsu-chatbot-rag',
        },
        {
          title: 'LendingClub Loan Approval',
          description: 'ML case study predicting loan approval using Scikit-learn, SMOTE, ROC-AUC, and EDA techniques.',
          imageUrl: 'https://raw.githubusercontent.com/priyankabolem/lendingclub-loan-approval-ml/main/screenshot.png',
          link: 'https://github.com/priyankabolem/lendingclub-loan-approval-ml',
        },
      ],
    },
  },

  location: 'Seattle, WA',

  social: {
    linkedin: 'priyanka-bolem-66763041',
    github: 'priyankabolem',
    email: 'priyankabolem@gmail.com',
    website: '',
    x: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    phone: '',
  },

  resume: {
    fileUrl: '', // Optional: Add your resume PDF link
  },

  skills: [
    'Python',
    'TensorFlow',
    'Scikit-learn',
    'Hugging Face',
    'Streamlit',
    'LangChain',
    'Neo4j',
    'React',
    'Java',
    'SQL',
    'AWS',
    'Azure',
  ],

  experiences: [
    {
      company: 'Adisys Corporation',
      position: 'Software Engineer Intern',
      from: 'Jan 2024',
      to: 'May 2024',
      companyLink: 'https://adisys.com',
    },
  ],

  certifications: [],

  educations: [
    {
      institution: 'Northwest Missouri State University',
      degree: 'Master’s in Applied Computer Science',
      from: '2023',
      to: '2025',
    },
  ],

  publications: [],

  blog: {
    source: '', // medium | dev
    username: '',
    limit: 2,
  },

  googleAnalytics: {
    id: '',
  },

  hotjar: {
    id: '',
    snippetVersion: 6,
  },

  themeConfig: {
    defaultTheme: 'aqua',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  footer: `Made with <a 
    class="text-primary" href="https://github.com/arifszn/gitprofile"
    target="_blank"
    rel="noreferrer"
  >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
