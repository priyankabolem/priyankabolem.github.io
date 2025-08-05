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
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/priyankabolem/NutriGuide',
        },
        {
          title: 'NWMSU Chatbot',
          description:
            'University chatbot using LangChain, Neo4j, and OpenAI for Retrieval-Augmented Generation.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/priyankabolem/NWMSU-RAG-Chatbot',
        },
        {
          title: 'LendingClub Loan Approval',
          description:
            'ML case study predicting loan approval using Scikit-learn, SMOTE, ROC-AUC, and EDA techniques.',
          imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/priyankabolem/LendingClub-Loan-Approval',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Priyanka Bolem',
    description: 'Aspiring Machine Learning Engineer | AI Portfolio',
    imageURL: '',
  },
  social: {
    linkedin: 'priyanka-bolem-66763041',
    github: 'priyankabolem',
    email: 'priyankabolem@gmail.com',
    website: '',
  },
  resume: {
    fileUrl: '',
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
  educations: [
    {
      institution: 'Northwest Missouri State University',
      degree: "Master's in Applied Computer Science",
      from: '2023',
      to: '2025',
    },
  ],
  publications: [],
  blog: {
    source: '',
    username: '',
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave',
      'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua',
      'lofi', 'pastel', 'fantasy', 'wireframe', 'black', 'luxury', 'dracula',
      'cmyk', 'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee',
      'winter', 'dim', 'nord', 'sunset', 'caramellatte', 'abyss', 'silk', 'procyon',
    ],
  },
  footer: `Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
