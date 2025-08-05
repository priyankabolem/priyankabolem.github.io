// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'priyankabolem',
  },
  base: '/',
  projects: {
    github: {
      display: false,
      header: 'GitHub Projects',
      mode: 'manual',
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'Featured Projects',
      projects: [
        {
          title: 'NutriGuide',
          description:
            'AI-powered app that analyzes food images and provides nutritional insights using TensorFlow and Hugging Face.',
          imageUrl:
            'https://user-images.githubusercontent.com/placeholder-nutriguide.png', // Replace with a real image URL if available
          link: 'https://github.com/priyankabolem/nutriguide',
        },
        {
          title: 'NWMSU Chatbot',
          description:
            'University chatbot using LangChain, Neo4j, and OpenAI for Retrieval-Augmented Generation.',
          imageUrl:
            'https://user-images.githubusercontent.com/placeholder-nwmsu.png', // Replace with a real image URL if available
          link: 'https://github.com/priyankabolem/nwmsu-chatbot-rag',
        },
        {
          title: 'LendingClub Loan Approval',
          description:
            'ML case study predicting loan approval using Scikit-learn, SMOTE, ROC-AUC, and EDA techniques.',
          imageUrl:
            'https://user-images.githubusercontent.com/placeholder-lendingclub.png', // Replace with a real image URL if available
          link: 'https://github.com/priyankabolem/lendingclub-loan-approval-ml',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Priyanka Bolem',
    description: 'AI/ML portfolio showcasing projects and skills by Priyanka Bolem.',
    imageURL: '', // Optional: Add social preview image
  },
  social: {
    linkedin: 'priyanka-bolem-66763041',
    github: 'priyankabolem',
    email: 'priyankabolem@gmail.com',
    website: '', // Optional
  },
  resume: {
    fileUrl: '', // Optional: add your uploaded resume link here
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
  experiences: [],
  certifications: [],
  educations: [],
  publications: [],
  blog: {
    source: '', // 'dev' or 'medium' — leave empty to hide blog section
    username: '',
    limit: 0,
  },
  googleAnalytics: {
    id: '', // Optional: add your Google Analytics ID
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'lofi',
      'cupcake',
      'dracula',
      'autumn',
      'night',
      'fantasy',
      'luxury',
    ],
  },
  footer: `Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
