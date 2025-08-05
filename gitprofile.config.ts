// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'priyankabolem',
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'manual',
      manual: {
        projects: [
          'priyankabolem/RAG-Chatbot-1',
          'priyankabolem/lendingclub-loan-approval-ml',
          'priyankabolem/PlantDiseasesDetection',
          'priyankabolem/PatternsSpringbootproject',
        ],
      },
    },
    external: {
      header: 'Featured Projects',
      projects: [
        {
          title: '🤖 NWMSU RAG Chatbot',
          description:
            'AI-powered university chatbot using LangChain, Neo4j, and OpenAI GPT-3.5. Features graph-based knowledge retrieval and is live deployed on Streamlit Cloud.',
          imageUrl:
            'https://img.freepik.com/free-vector/chatbot-conversation-vectorart_78370-4107.jpg',
          link: 'https://github.com/priyankabolem/RAG-Chatbot-1',
        },
        {
          title: '💰 LendingClub Loan Prediction',
          description:
            'ML model achieving 84% accuracy in loan default prediction. Implemented using XGBoost, SMOTE for imbalanced data, and comprehensive EDA with business insights.',
          imageUrl:
            'https://img.freepik.com/free-vector/finance-leaders-concept-illustration_114360-8775.jpg',
          link: 'https://github.com/priyankabolem/lendingclub-loan-approval-ml',
        },
        {
          title: '🌱 Plant Disease Detection',
          description:
            'Computer vision system for agricultural AI using deep learning. Identifies plant diseases from images to help farmers protect crops and improve yields.',
          imageUrl:
            'https://img.freepik.com/free-vector/smart-farming-technology-background-vector-agriculture-digital-transformation_53876-175407.jpg',
          link: 'https://github.com/priyankabolem/PlantDiseasesDetection',
        },
        {
          title: '☕ Spring Boot Design Patterns',
          description:
            'Enterprise-grade Spring Boot application demonstrating design patterns, REST APIs, and Docker containerization. Showcases clean architecture and Java best practices.',
          imageUrl:
            'https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg',
          link: 'https://github.com/priyankabolem/PatternsSpringbootproject',
        },
        {
          title: '🧠 TensorFlow Contributions',
          description:
            "Contributing to the world's leading machine learning framework. Learning from and engaging with Google's open-source ML ecosystem.",
          imageUrl:
            'https://img.freepik.com/free-vector/artificial-intelligence-ai-robot-gives-recommendation_107791-4592.jpg',
          link: 'https://github.com/tensorflow/tensorflow',
        },
        {
          title: '🏥 AI Medical Research Copilot',
          description:
            'Collaborative AI tool for medical research analysis. Leverages NLP to assist researchers in literature review and data extraction from medical papers.',
          imageUrl:
            'https://img.freepik.com/free-vector/medical-technology-science-background-vector-blue-with-blank-space_53876-117739.jpg',
          link: 'https://github.com/priyankabolem/AI-Copilot-for-Medical-Research',
        },
        {
          title: '✨ Gen-AI Project',
          description:
            "Collaborative generative AI project exploring cutting-edge LLM applications. Team contribution under Supriya Rajagopalan's leadership.",
          imageUrl:
            'https://img.freepik.com/free-vector/artificial-intelligence-ai-robot-gives-recommendation_107791-4592.jpg',
          link: 'https://github.com/SupriyaRajaiahgari/GenAi',
        },
        {
          title: '📱 AttendanceBuddy',
          description:
            "Smart attendance management system with face recognition and automated tracking. Collaborated with Bhargav Vermasaji's team.",
          imageUrl:
            'https://img.freepik.com/free-vector/time-management-concept-illustration_114360-1013.jpg',
          link: 'https://github.com/bhargavvarmasagi/Attendance-Buddy',
        },
        {
          title: '🏆 GDP Fall 2024 - Group 5',
          description:
            'Graduate Directed Project for Fall 2024. Collaborative development project with team led by SriKanth, showcasing agile development practices.',
          imageUrl:
            'https://img.freepik.com/free-vector/hackathon-concept-illustration_114360-5892.jpg',
          link: 'https://github.com/5r1kanth/GDPFall24-Group05',
        },
      ],
    },
  },
  seo: {
    title: 'Priyanka Bolem - Machine Learning Engineer',
    description:
      'Aspiring ML Engineer with expertise in AI/ML, NLP, Computer Vision, and Full-Stack Development. Passionate about building innovative solutions using cutting-edge technology.',
    imageURL: 'https://avatars.githubusercontent.com/u/166872320?v=4',
  },
  social: {
    linkedin: 'priyanka-bolem-66763041',
    github: 'priyankabolem',
    email: 'priyankabolem@gmail.com',
    website: 'https://priyankabolem.github.io',
  },
  resume: {
    fileUrl: 'https://drive.google.com/file/d/YOUR_RESUME_ID/view',
  },
  skills: [
    'Python',
    'TensorFlow',
    'PyTorch',
    'Scikit-learn',
    'XGBoost',
    'Pandas',
    'NumPy',
    'Matplotlib',
    'Seaborn',
    'OpenCV',
    'Hugging Face',
    'LangChain',
    'Streamlit',
    'Neo4j',
    'SQL',
    'MongoDB',
    'React',
    'TypeScript',
    'JavaScript',
    'Node.js',
    'Java',
    'Git',
    'Docker',
    'AWS',
    'Azure',
    'Jupyter',
    'VS Code',
    'REST APIs',
    'GraphQL',
    'Machine Learning',
    'Deep Learning',
    'Natural Language Processing',
    'Computer Vision',
    'Data Analysis',
    'Statistical Modeling',
  ],
  experiences: [
    {
      company: 'Personal Projects',
      position: 'Machine Learning Developer',
      from: 'January 2023',
      to: 'Present',
      companyLink: 'https://github.com/priyankabolem',
    },
  ],
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
  footer: `Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
