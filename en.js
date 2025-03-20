import {
  Mail,
  Linkedin,
  Github,
  Codepen,
  PhoneCall,
} from "https://cdn.jsdelivr.net/npm/lucide-vue-next@0.483.0/+esm";

export default {
  portrait:
    "https://res.cloudinary.com/dhpaysqxb/image/upload/v1742396377/1731673737-9242a08cb0e5c60ec9b0d29df1d1103b-1-EDIT_1_t2n5s8.jpg",

  city: "Marseille",

  links: [
    {
      label: "hello@hajar.dev",
      href: "mailto:hello@hajar.dev",
      icon: Mail
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hrandriakoto/",
      icon: Linkedin
    },
    {
      label: "Codepen",
      href: "https://www.linkedin.com/in/hrandriakoto/",
      icon: Codepen
    },
    {
      label: "GitHub",
      href: "https://github.com/haja-ran",
      icon: Github
    },
    {
      label: "+33 7 77 00 28 33",
      href: "tel:+33777002833",
      icon: PhoneCall
    }
  ],

  header: [
    {
      label: "Title",
      value: "Senior Frontend Engineer"
    },
    {
      label: "Experience",
      value: "8 years"
    },
    {
      label: "Stack",
      value:
        "Vue.js (2 & 3), Nuxt.js (2 & 3), WebComponents, React, Next, TailwindCSS, TypeScript, Node.js"
    }
  ],

  profileDescription: [
    "Frontend Engineer, full-stack developer, lead developer, co-founder, freelancer... My eight years of experience have allowed me to contribute to a wide variety of projects, create advanced web applications (SPA, SSR, API), and deploy numerous marketing websites. 💻",
    "I thrive in the world of Frontend, where I take an interest in Design Ops, UX/UI, and Design Systems. I love designing intuitive and visually appealing interfaces that combine performance and aesthetics. 🎨",
    "I particularly enjoy working with Nuxt as my main stack, although I am also proficient with React (Next) and native JavaScript, with a specialization in Web Components and standard web practices.",
    "I channel my curiosity and creativity by frequently experimenting on CodePen and composing music. 🎶"
  ],

  experiences: {
    label: "Expériences",
    value: [
      {
        tags: ["Freelance"],
        logo:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' clip-rule='evenodd' viewBox='0 0 20 20'%3E%3Cpath fill='%23fff' fill-rule='nonzero' d='M14.02 0h-2.65L6.13 14.6a.65.65 0 0 1-.57.4H3.33L8.72 0H0v20h20V0h-3.33l-5.24 14.6a.65.65 0 0 1-.57.4H8.63l5.39-15Z'/%3E%3C/svg%3E",
        date: "July 2024 to January 2025",
        company: "Infopro-Digital",
        city: "Paris",
        title: "Frontend Engineer",
        tech: ["Vue", "React", "Nuxt", "Next", "TypeScript", "TailwindCSS"],

        description: [
          `With over 400 websites and 4,000 employees, Infopro-Digital stands as a key player in software publishing and professional services. I joined the lab team to build a multi-framework Design System unifying the group's brands. Designed with a Design Ops approach and accessibility in mind, this Design System uses Web Components (Lit Element), wrapped in Vue and React components, offering flexibility, robustness, and adaptability.
              During this project, I also contributed to the implementation of a microfrontend for the Red-on-line business unit (legaltech) using the new Cobalt design system.`
        ],

        role: [
          "Technical requirements analysis: Identifying needs and proposing suitable solutions.",
          "Proof of Concept (PoC) development: Prototyping to validate technical feasibility and performance.",
          "Component development: Designing and maintaining reusable native, Vue.js, and React.js components.",
          "Documentation: Automating and updating interactive component documentation.",
          "Internal tool development: Creating Tailwind presets, scripts, plugins, and other development tools.",
          "Library maintenance: Ensuring quality, compatibility, and regular updates.",
          "Package publishing: Managing versioning, releases, and dependencies via a CI/CD pipeline.",
          "Performance optimization: Ensuring the performance and quality of tools and components.",
          "Technology watch: Monitoring industry trends to improve practices and tools.",
          "Support and documentation: Assisting teams and providing clear documentation."
        ],

        links: [
          {
            label: "Infopro-Digital",
            href: "https://infopro-digital.com/"
          }
        ]
      },
      {
        tags: ["Freelance"],
        logo:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' clip-rule='evenodd' viewBox='0 0 24 13'%3E%3Cg fill-rule='nonzero'%3E%3Cpath fill='%23fe6b00' d='M19.78 12.57h-3.64l-1.9-7.36-1.9 7.36H8.72L5.46 0h3.18l1.94 8.43L12.62 0h3.29l2.04 8.44L19.9 0h3.13l-3.24 12.57Z'/%3E%3Cpath fill='%2300c98d' d='M8.24 8H3.4v4.57H0V0h8.69v3.03H3.4v1.93h4.83V8Z'/%3E%3C/g%3E%3C/svg%3E",
        date: "July 2021 to June 2024",
        company: "AGSI/Free-Work",
        city: "Paris",
        title: "Frontend Engineer",
        tech: ["Vue.js", "Nuxt.js", "TailwindCSS", "TypeScript", "Node.js"],
        description: [
          `As part of the creation of Free-Work (formerly Carriere-info.fr and Freelance-info), I contributed to setting up a monorepo frontend architecture for Free-Work (the job board) and Turnover-It (the recruiter platform).`,
          `Free-Work is an international job board (FR and UK) aimed at IT professionals.`,
          `Some key figures: 500k visits per month, 15k job and mission offers per week, ~170k active users on FW, 1k client companies on Turnover-It.`
        ],

        role: [
          "Set up a monorepo architecture for both applications and shared components.",
          "Created a shared Design System for Free-Work and Turnover-IT, as well as other internal and partner tools.",
          "The Design System was built with Web Components (Lit Element) wrapped in Vue components for future-proofing.",
          "Implemented and tracked over 50 events on Google Tag Manager and GA4. Analyzed user behavior with Hotjar. A/B testing with Posthog. Bug tracking and performance analysis with Sentry.",
          "SEO performance optimization, including page load speed, layout shifts, stylesheets optimization, sitemaps (~150k URLs), meta tags, and SEO content.",
          "Developed an instant messaging system.",
          "Built a blog and a forum.",
          "Developed a candidate profile space (application tracking, statistics, CV content).",
          "Created an onboarding process.",
          "Implemented multiple data visualization pages with Apache Echarts.",
          "Set up internationalization (i18n).",
          "Developed a billing system and invoice generation.",
          "Designed and implemented UI mockups (Figma).",
          "Set up a notification system.",
          "Built an advanced search system.",
          "Developed a job recommendation system.",
          "Implemented a skill-matching system.",
          "Wrote unit tests, integration tests, and end-to-end tests.",
          "Started as a developer and later took on a lead role in a team of 3 developers + a dozen offshore contributors."
        ],

        stack: [
          "Vue.js",
          "Nuxt.js",
          "TailwindCSS",
          "TypeScript",
          "Node.js",
          "Pinia",
          "Lit Element",
          "Web Components",
          "Google Tag Manager",
          "GA4",
          "Hotjar",
          "Posthog",
          "Sentry",
          "SEO",
          "Echarts",
          "i18n",
          "Figma",
          "Prismic",
          "WordPress",
          "Vue Testing Library",
          "Playwright",
          "Vitest"
        ],

        links: [
          {
            label: "Free-Work",
            href: "https://www.free-work.com"
          },
          {
            label: "Turnover-It",
            href: "https://www.turnover-it.com"
          }
        ]
      },

      {
        tags: ["Freelance"],
        logo:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAgVBMVEUAM34AKHcAFWkALnsANoEAEmUAHG/HOpf99vr///8BOIMAIXMBEV8AGGy8L4/N1uXc4e3v8/d7lbwSRYtddqvUQ5youNI8Xptmg7EhT5EuWZdEaaLtWqudss7HPJexxdqHmsH56/WeqsrFMJGTosbCy95ReqvzX6/jUaYsS5AACEDN23QfAAABo0lEQVQ4y3WT2ZaiQAyGUyvUkgYE2bTRVrGbef8HnCBFzeAwucrJ+U6WPwnck9WO5/Px/kGW/Jy/f45L8A7JV7qYMXU1SZAA5VQ9MvMKfiUwmGBZrzVjqDg6ppE9l+gASbp4n4qDRHFq20Y6C2hf0TRZgZE7KbHJZ7/oUeLpDeiUBVeGarWXvNoCmQMAdQhAIVjwI/BQAFI91oZPHOstcFA0Hj5X4NNj/g6QAMJlsUZoJwI3ThmkFpFI34DcCUphtbuZjf0Zs6ExAaxTzbgP5E5bmDehdJXvAeaiiJgR4XW7B5gL8/MqCWLejjuAyU+KyxdiMei0BWgHk9JybkQ6Ne4BpEfp2dwKLb7YBUhTh/PA0h/+A5hMoqUiWG6BK69XogBHrTJZbID+V1wlXR/1ySDfAJaXEciZ+CdDxoSOS8hmQHebHmoEdf2rBE3RboCrAmzWJq0juZeTisCTS8GWkxxLGlP4t6PtSEDBu/bQ9khCoW/jLpbXu/RCO6GVUlqQ10VRhvC8lPlaTbPEAFN1S034aHre+/r79PEfLyP3OAxDeP/fNIkpJq3Hn+cAAAAASUVORK5CYII=",
        date: "January 2022 to April 2023 (part-time)",
        company: "SOFICA",
        city: "Nice",
        title: "Full-Stack Developer",
        tech: ["Vue.js", "Nuxt.js", "TailwindCSS", "TypeScript", "Node.js"],
        description: [
          "SOFICA, located in Nice and Cagnes-sur-Mer, is a multidisciplinary accounting firm offering services in accounting, payroll management, taxation, legal consulting, wealth management, financial control, real estate accounting, and auditing. It assists businesses in the creation, management, and development of their activities, with a specialization in real estate.",
          "I worked at SOFICA as part of the development of an accounting management platform for individuals, provided as a SaaS solution."
        ],

        role: [
          "Monorepo architecture",
          "Design system",
          "Onboarding process",
          "Generation of accounting entries and FEC (Fichier des Écritures Comptables)"
        ],

        stack: [
          "Vue.js",
          "Nuxt.js",
          "TailwindCSS",
          "TypeScript",
          "Node.js",
          "Strapi",
          "PostgreSQL",
          "Playwright",
          "Vitest",
          "Supertest",
          "CI/CD",
          "DDD",
          "Monorepo",
          "Design System"
        ],

        links: [
          {
            label: "Balance ton LMNP",
            href: "https://balancetonlmnp.com/"
          }
        ]
      },

      {
        tags: ["Freelance"],
        logo:
          "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xml%3Aspace%3D%22preserve%22%20fill-rule%3D%22evenodd%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%222%22%20clip-rule%3D%22evenodd%22%20viewBox%3D%220%200%2032%2010%22%3E%3Cpath%20fill%3D%22%23fff%22%20fill-rule%3D%22nonzero%22%20d%3D%22M6%204.63%209.34.1H7L4.82%203.11l-2.16-3H.25l3.3%204.52L0%209.4h2.33l2.41-3.3%202.4%203.3h2.43L6%204.64Zm13.08-.21C19.01%201.69%2017.31%200%2014.65%200c-1.29%200-2.4.46-3.21%201.33a4.94%204.94%200%200%200-1.22%203.43c0%202.84%201.86%204.75%204.62%204.75a4.02%204.02%200%200%200%204.07-3.2h-1.95c-.3.92-1.12%201.45-2.22%201.45-1.46%200-2.45-.97-2.54-2.48h6.83c.03-.16.05-.65.05-.86Zm-2.04-.56h-4.72a2.44%202.44%200%200%201%202.35-2.13c1.29%200%202.22.8%202.37%202.13ZM26.85.1l-2.53%206.87L21.78.1h-2.15l3.5%209.3h2.34l3.5-9.3h-2.12Zm2.85%209.41c.72%200%201.3-.57%201.3-1.27%200-.71-.58-1.28-1.3-1.28-.71%200-1.29.57-1.29%201.28%200%20.7.58%201.27%201.3%201.27Z%22%2F%3E%3C%2Fsvg%3E",
        date: "January 2021 to June 2021",
        company: "Xev",
        city: "Lyon",
        title: "Frontend Engineer",
        tech: ["Vue.js", "Nuxt.js", "TailwindCSS", "TypeScript", "Node.js"],
        description: [
          "Xevlabs is a custom development agency supporting startups and large companies"
        ],

        role: [
          "Developing and integrating features in close collaboration with the lead developer and designer",
          "Designing web components using Vue 2, TypeScript (Vue class components)",
          "Developing websites and applications (SSR and CSR) based on Headless CMS (Strapi, Storyblok)",
          "Participating in technical and architectural decisions",
          "SEO optimization work: improving Core Web Vitals performance, managing meta tags, implementing server-side redirects, and tracking events in Google Analytics",
          "Implementing SVG animations using vanilla JS and CSS",
          "Setting up form validation"
        ],

        stack: [
          "Vue.js",
          "Nuxt.js",
          "TailwindCSS",
          "TypeScript",
          "Node.js",
          "Strapi",
          "Storyblok",
          "SEO",
          "Google Analytics"
        ],

        links: [
          {
            label: "Xev",
            href: "https://xev.agency/"
          }
        ]
      },

      {
        tags: ["Freelance"],
        logo:
          "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xml%3Aspace%3D%22preserve%22%20fill-rule%3D%22evenodd%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%222%22%20clip-rule%3D%22evenodd%22%20viewBox%3D%220%200%2021%2025%22%3E%3Cg%20fill-rule%3D%22nonzero%22%3E%3Cpath%20fill%3D%22%23ffca28%22%20d%3D%22M20.0537%2014.29147c-1.077-1.998-4.533-4.048-8.3-2.503-2.925%201.198-3.643%203.411-3.903%203.846-.355.594-1.009.461-1.009.461.389-1.246.449-2.763.31-3.848-.133-1.16-.131-2.145.02-3.085.089-.55.236-1.098.489-1.595.073-.143.695-1.074.909-.981.765.328%201.436.473%202.491.328.592-.08%201.714-.308%201.919-.441.254-.165.294-.272.294-.272.093-.678-.238-1.119-.238-1.119s1.025-.202%201.329-1.037c.091-.25-.281-.842-.416-1.086-.454-.822-1.122-1.953-1.754-2.493-.309-.266-1.336-.864-2.693-.068-1.973%201.157-4.628%202.438-7.946%2010.437-1.003%202.417-1.521%207.234-1.553%208.607-.038%201.615.274%203.258%204.457%204.056%203.133.598%205.413.667%209.094.667%201.142%200%205.083-.309%206.525-3.035%201.327-2.51.853-5.21-.025-6.839Z%22%2F%3E%3C%2Fg%3E",
        date: "June 2020 to November 2020",
        company: "Les Gros Bras",
        city: "Marseille",
        title: "Frontend Engineer",
        tech: ["Vue.js", "Nuxt.js", "TailwindCSS", "TypeScript", "Node.js"],
        description: [
          "Les Gros Bras is a Marseille-based agency specializing in branding and digital. I collaborated with the agency in the creation of websites based on the WordPress CMS, React, and ESNext."
        ],

        role: [
          "Close collaboration with the artistic director in designing mockups and optimizing the user experience",
          "Development of components and integration of features using Vanilla JS (ESNext)",
          "Creation of components for the Gutenberg editor in WordPress using React and PHP",
          "Integration of animations and micro-animations in Vanilla JS to enhance UX",
          "Server configuration and deployments",
          "Implementation of a daily backup system",
          "Server administration and data security management",
          "Implementation of tracking and performance analysis systems",
          "Implementation of server-side redirection systems",
          "Implementation of caching systems"
        ],

        stack: [
          "WordPress",
          "React",
          "Sass",
          "ESNext",
          "Nginx",
          "SEO",
          "Google Analytics",
          "PHP",
          "MySQL",
          "WordPress REST API",
          "Linux"
        ],

        links: [
          {
            label: "Xev",
            href: "https://xev.agency/"
          }
        ]
      },

      {
        tags: ["Co-founder"],
        logo:
          "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xml%3Aspace%3D%22preserve%22%20fill-rule%3D%22evenodd%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%222%22%20clip-rule%3D%22evenodd%22%20viewBox%3D%220%200%2026%2026%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%2220%22%20fill%3D%22none%22%20transform%3D%22rotate(.144)%20scale(.63256)%22%2F%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M13.55888.05157c2.16729.18996%204.01024.79114%205.77034%201.88236.92956.57794%202.1875%201.6338%202.38957%202.00158.19703.36374.18187.68404-.04749%201.04778-.15459.24148-.40719.38799-.71232.41527-.38698.03536-.56582-.05153-1.05182-.50217-2.70987-2.52395-6.34424-3.44947-9.9675-2.54315-2.2946.5739-4.39418%201.9935-5.8734%203.9668-1.0407%201.3812-1.74898%203.1524-2.00562%204.98829-.09093.66787-.09093%202.00461.00404%202.68561.1738%201.28522.486%202.31784%201.03666%203.40502C4.3906%2019.9704%206.59325%2021.877%209.32636%2022.77423c1.13972.37587%201.93792.4951%203.30296.49105.85782%200%201.12356-.01616%201.59743-.09093%201.93894-.29706%203.55253-1.0205%205.14591-2.2946%201.21045-.96896%201.848-1.93793%202.12485-3.2191.1061-.49913.09801-1.66916-.01616-2.12788-.36778-1.46002-1.35291-2.62297-2.70987-3.1999-.69211-.29706-1.63279-.43953-2.36128-.36072-1.05586.11519-1.84295.47085-2.74826%201.24581-.39607.3405-.64867.4476-.9619.40416-.44254-.05961-.79416-.41123-.86185-.86287-.0475-.30009.05557-.5537.37182-.9326.4668-.56177.64463-1.03665.64059-1.72877%200-.47488-.06669-.75577-.2809-1.16296-.70828-1.34887-2.40068-1.78435-3.67074-.93764-.15358.10306-.43042.34454-.61634.54157-.99321%201.05687-1.57418%202.42493-1.6338%203.85262-.09902%202.32996%201.1468%204.4932%203.19587%205.5531%201.69644.88207%203.61517.92552%205.33587.11923.43446-.20612%201.12355-.66888%201.52265-1.02858.36779-.32838.55774-.4274.8265-.43144.28897%200%20.48701.07578.69616.26573.31625.2809.41527.69616.2617%201.09123-.07175.19399-.54663.67999-.99322%201.02049-1.16296.89015-2.60277%201.46405-4.0739%201.62168-.57794.0596-1.53073.02424-2.15617-.08286-3.29488-.56986-5.8451-3.07764-6.47053-6.3604-.1263-.66787-.17379-1.8672-.09498-2.53507.13438-1.15488.56178-2.29055%201.2539-3.34237%201.25793-1.89852%202.72097-2.76847%204.54069-2.70178.69211.02425%201.16296.14246%201.7803.43952%201.47517.71131%202.41282%202.06422%202.55831%203.69802.02425.2728.04749.50217.05153.51025.00404.00404.20208-.03536.43952-.0869%201.15892-.26168%202.40069-.2334%203.47675.07478%201.33675.38799%202.68158%201.32967%203.54748%202.48859%201.15892%201.54993%201.55095%203.82836%201.0013%205.86127-.41931%201.55499-1.46406%202.9463-3.18475%204.24364-2.30975%201.74494-5.4854%202.68258-8.32561%202.4603-3.35046-.26068-6.0674-1.5267-8.34583-3.88798-.94875-.9811-1.62167-1.92985-2.19557-3.09685-.75072-1.51862-1.11446-2.8877-1.26905-4.7458-.05557-.67696-.02425-2.03695.06264-2.66642C.2965%209.37747.77543%207.93059%201.4827%206.65649c1.0609-1.90256%202.72603-3.67883%204.44268-4.74681C7.45612.96092%209.31423.31629%2011.05513.13038c.30009-.03132.68808-.07477.86187-.09497.49105-.05153.89015-.0475%201.64188.01616Z%22%2F%3E%3C%2Fsvg%3E",
        date: "January 2016 to April 2020",
        company: "Be Creative",
        city: "Marseille",
        title: "Co-founder, UI Designer, Web Developer",
        tech: ["Vue.js", "Nuxt.js", "TailwindCSS", "TypeScript", "Node.js"],
        description: [
          `Some notable clients: Orange, EDF, BMW Station 7, Ponant, Maison des Arts de Cabriès, La Fédération du Bâtiment, HBPC, MEDEF, EMD School of Business, Baticup Méditerranée, Arène Aix, Mars Marketing.`
        ],
        role: [
          "CTO role",
          "Collaboration with clients and often other stakeholders in designing user experiences (UX) and mockups (UI)",
          "Development of components and integration of features in Vanilla JS, React (WordPress Gutenberg), Vue.js / Nuxt",
          "Server configuration and deployments",
          "Implementation of a daily backup system",
          "Server administration and data security management",
          "Implementation of tracking and performance analysis systems",
          "Implementation of server-side redirection systems",
          "Implementation of caching systems",
          "Client demo presentations",
          "SEO optimization: Core Web Vitals performance, meta tag management, server-side redirections, and event tracking on Google Analytics",
          "Web scraping (Puppeteer)"
        ],
        stack: [
          "WordPress",
          "React",
          "Sass",
          "ESNext",
          "Nginx",
          "SEO",
          "Google Analytics",
          "PHP",
          "MySQL",
          "WordPress REST API",
          "Linux",
          "Bootstrap"
        ]
      }
    ]
  },

  education: {
    label: "Education",
    value: [
      {
        date: "2012 - 2017",
        school: "EMD Business School",
        degree: "Master's in Management",
        city: "Marseille",

        description: [
          "Digital Marketing and Entrepreneurship program",
          "TOEIC 830 (English level B2)",
          "Founded a company in 2016, mentored by Renaud de Clermont-Tonnerre (Mayor of Plouégat-Guérand, Brittany and former CEO of Havas Media Hebdos)"
        ]
      }
    ]
  },

  referals: {
    label: "Recommendations",
    value: [
      {
        title: "CTO",
        name: "Jean-Marc Leglise",
        company: "Free-Work",
        description: [
          "Haja was the key Front-end developer of the team for 3 years during the creation of the Free-Work and Turnover-it products. Haja has perfect command of his stack and ecosystem, and always makes relevant UX and UI suggestions. I have great memories of our collaboration and highly recommend him."
        ]
      },
      {
        title: "Head of Product",
        name: "Jimmy Wild",
        company: "Free-Work",
        description: [
          "I had the chance to collaborate with Haja for over two years on complex projects. His involvement was flawless, and he regularly suggested technical innovations that significantly improved our products. In addition to his technical skills, he was a pleasure to work with due to his clear communication and team spirit. If the opportunity arises, I would be delighted to work with him again in the future."
        ]
      },
      {
        title: "CEO",
        name: "Antoine Hervet",
        company: "Xev.",
        description: [
          "Once again, Haja showed professionalism. He was able to be autonomous, productive, and committed, and completed the task within the expected deadlines. I highly recommend him."
        ]
      },
      {
        title: "CEO",
        name: "Mathieu Devillard",
        company: "L'Œil de Focus",
        description: [
          "Thank you, Haja, for the work provided. It was valuable to work with someone who could grasp both our technical and graphic needs in one go. This ensured a very coherent result, as close as possible to our desires, thanks to his listening skills and highly appreciated adaptability."
        ]
      },
      {
        title: "CEO",
        name: "Albane Faures",
        company: "Reso Solution",
        description: [
          "Haja worked for several months for my company since 2017, and I am delighted with his ability to adapt to a company's DNA and bring out the best when creating a website or various online communication tools. Haja keeps his commitments, is available for any further concerns, and I believe his after-sales service is of great quality as well. His calmness, responsiveness, and professionalism are very much appreciated."
        ]
      },
      {
        title: "CEO",
        name: "Ludovic Di Dia",
        company: "Les Gros Bras",
        description: [
          "Haja is a very good developer. Excellence may not exist, but we get close to it when working with him. He has a valuable understanding of the needs, which he combines with high-quality technical efficiency. As a person, he is sincere, kind-hearted, and passionate. He is simply a trustworthy person. I highly recommend him!"
        ]
      }
    ]
  }
}