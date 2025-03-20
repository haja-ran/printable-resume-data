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
      label: "Titre",
      value: "Ingénieur Frontend senior"
    },
    {
      label: "Expérience",
      value: "8 ans"
    },
    {
      label: "Stack",
      value:
        "Vue.js (2 & 3), Nuxt.js (2 & 3), WebComponents, React, Next, TailwindCSS, TypeScript, Node.js"
    }
  ],

  profileDescription: [
    "Ingénieur frontend, développeur fullstack, lead développeur, co-fondateur, freelance... Mes huit années d'expérience m'ont permis de contribuer à une grande variété de projets, de créer des applications web avancées (SPA, SSR, API) et de déployer de nombreux sites marketing. 💻",
    "Je m'épanouis dans l'univers du Frontend, où je m'intéresse à l'approche Design Ops, l'UX/UI et les Design Systems. J'aime concevoir des interfaces intuitives et visuellement attrayantes, alliant performance et esthétique. 🎨",
    "J'apprécie particulièrement travailler avec Nuxt comme stack principale, bien que je sois également compétent avec React (Next) et JavaScript natif, avec une spécialisation dans les Web Components et les pratiques web standards.",
    "Je canalise ma curiosité et ma créativité en expérimentant fréquemment sur CodePen et en composant de la musique. 🎶"
  ],

  experiences: {
    label: "Expériences",
    value: [
      {
        tags: ["Freelance"],
        logo:
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' clip-rule='evenodd' viewBox='0 0 20 20'%3E%3Cpath fill='%23fff' fill-rule='nonzero' d='M14.02 0h-2.65L6.13 14.6a.65.65 0 0 1-.57.4H3.33L8.72 0H0v20h20V0h-3.33l-5.24 14.6a.65.65 0 0 1-.57.4H8.63l5.39-15Z'/%3E%3C/svg%3E",
        date: "Juillet 2024 à Janvier 2025",
        company: "Infopro-Digital",
        city: "Paris",
        title: "Ingénieur Frontend",
        tech: ["Vue", "React", "Nuxt", "Next", "TypeScript", "TailwindCSS"],

        description: [
          `Avec plus de 400 sites et 4000 collaborateurs, Infopro-Digital s’impose comme un acteur clé de 
          l’édition de logiciels et services professionnels. J'ai rejoint l’équipe lab pour bâtir 
          un Design System multi-framework unifiant les marques du groupe. Pensé avec une approche Design Ops 
          et un souci d’accessibilité, ce Design System utilise des Web Components (Lit Element), 
          enveloppés dans des composants Vue et React, offrant ainsi flexibilité, robustesse et adaptabilité.
          Au cours de cette mission, j'ai également participé à la mise place d'un microfrontend pour la business unit Red-on-line
          (legaltech) utilisant le nouveau design system Cobalt.
          `
        ],

        role: [
          `Analyse des besoins techniques : Identification des exigences et proposition de solutions adaptées.`,
          `Réalisation de POCs : Prototypage pour validation de la faisabilité technique et des performances.`,
          `Développement de composants : Conception et maintenance de composants natifs, Vue.js et React.js réutilisables.`,
          `Documentation : Automatisation et mise à jour d’une documentation interactive des composants.`,
          `Création d’outils internes : Développement de presets Tailwind, scripts, plugins et autres outils pour le développement.`,
          `Maintenance des librairies : Gestion de la qualité, de la compatibilité et des mises à jour régulières.`,
          `Publication de packages : Gestion du versioning, de la publication et des dépendances via un pipeline CI/CD.`,
          `Optimisation des performances : Garantie de la performance et de la qualité des outils et composants.`,
          `Veille technologique : Surveillance des évolutions pour amélioration des pratiques et outils.`,
          `Support et documentation : Accompagnement des équipes et fourniture de documentations claires.`
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
        date: "Juillet 2021 à Juin 2024",
        company: "AGSI/Free-Work",
        city: "Paris",
        title: "Ingénieur Frontend",
        tech: ["Vue.js", "Nuxt.js", "TailwindCSS", "TypeScript", "Node.js"],
        description: [
          `Dans le cadre de la création de Free-Work (ancien Carriere-info.fr et Freelance-info) j'ai participé à la mise en place d'une architecture frontend en monorepo pour Free-Work (je jobboard) et Turnover-It (la plateforme pour recruteurs).`,
          `Free-Work est un jobboard international (FR et UK) adressé aux travailleurs de l'IT. `,
          `Quelques chiffres : 500k visites par mois, 15k offres d'emploi et de missions par semaine, ~170k utilisateurs actifs sur FW, 1k entreprises clientes de Turnover-It`
        ],

        role: [
          "Mise en place d’une architecture de type monorepo pour les deux applications ainsi que les composants communs",
          "Création d’un Design System partagé entre les deux plateformes Free-Work et Turnover-IT ainsi que d’autres outils internes et outils adressés aux partenaires",
          "Le Design System est conçu avec des Web Components (Lit element) enveloppés par des composants Vue dans un objectif de futureproofing",
          "Implémentation et tracking de +50 events sur Google Tag Manager et GA4. Analyse du comportement des utilisateurs a travers Hotjar. AB testing avec Posthog. Bug tracking et analyse de performance avec Sentry",
          "Travaux d’optimisation des performances SEO, notamment : optimisation des vitesses de chargement, layout shifts, optimisations des feuilles de styles, sitemaps (~150k url), meta tags, contenu SEO etc…",
          "Création d’une messagerie instantanée",
          "Création d’un blog et d’un Forum",
          "Création d’un espace profil pour les candidats (suivi de candidatures, statistiques, contenu du CV)",
          "Création d’un process d’onboarding",
          "Implémentation de multiple pages de datavisualisation avec Apache Echarts",
          "Mise en place d’une internationalisation (i18n)",
          "Création d’un systeme de facturation et génération de devis",
          "Création et implémentation de maquettes UI (Figma)",
          "Mise en place d’un système de notifications",
          "Mise en place d’un système de recherche avancée",
          "Mise en place d’un système de recommandation d’offres",
          "Mise en place d’un système de matching de compétences",
          "Tests unitaires, tests d’intégration et tests end-to-end",
          "Rôle de développeur puis lead dans une équipe de 3 + une dizaine d’offshores"
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
          "Wordpress",
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
        date: "Janvier 2022 à avril 2023 (temps partiel)",
        company: "SOFICA",
        city: "Nice",
        title: "Développeur fullstack",
        tech: ["Vue.js", "Nuxt.js", "TailwindCSS", "TypeScript", "Node.js"],
        description: [
          "Le cabinet SOFICA, situé à Nice et Cagnes-sur-Mer, est un expert-comptable pluridisciplinaire offrant des services en comptabilité, gestion sociale, fiscalité, conseil juridique, gestion de patrimoine, contrôle de gestion, comptabilité immobilière et audit. Il accompagne les entreprises dans la création, la gestion et le développement de leurs activités, avec une spécialisation dans l'immobilier.",
          "Je suis intervenu à la SOFICA dans le cadre de la création d'une plateforme de gestion de comptabilité pour particuliers sous forme de SAAS."
        ],

        role: [
          "Architecture en monorepo",
          "Design system",
          "Processus d’onboarding",
          "Génération d’écritures comptables et de FEC (fichier des écritures comptables)"
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
        date: "Janvier 2021 à Juin 2021",
        company: "Xev",
        city: "Lyon",
        title: "Ingénieur Frontend",
        tech: ["Vue.js", "Nuxt.js", "TailwindCSS", "TypeScript", "Node.js"],
        description: [
          "Xevlabs est une agence de développement sur-mesure accompagnant les startup et grand groupes"
        ],

        role: [
          "Développement et intégration features en étroite collaboration avec le lead développeur et le designer",
          "Conception de composants web avec Vue 2, Typescript  (vue class components)",
          "Développement de sites et applications (SSR et CSR)  basées sur des CMS Headless  (Strapi, Storyblok)",
          "Participation aux décisions techniques et d'architecture",
          "Travaux d’optimisations  SEO : performances des Core Web Vitals, gestion des meta tags, mise en place de systèmes de redirections côté serveur et tracking d’events sur Google Analytics",
          "Implémentation d’animations SVG en vanilla js et CSS",
          "Mise en place de validation de formulaires"
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
          "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xml%3Aspace%3D%22preserve%22%20fill-rule%3D%22evenodd%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%222%22%20clip-rule%3D%22evenodd%22%20viewBox%3D%220%200%2021%2025%22%3E%3Cg%20fill-rule%3D%22nonzero%22%3E%3Cpath%20fill%3D%22%23ffca28%22%20d%3D%22M20.0537%2014.29147c-1.077-1.998-4.533-4.048-8.3-2.503-2.925%201.198-3.643%203.411-3.903%203.846-.355.594-1.009.461-1.009.461.389-1.246.449-2.763.31-3.848-.133-1.16-.131-2.145.02-3.085.089-.55.236-1.098.489-1.595.073-.143.695-1.074.909-.981.765.328%201.436.473%202.491.328.592-.08%201.714-.308%201.919-.441.254-.165.294-.272.294-.272.093-.678-.238-1.119-.238-1.119s1.025-.202%201.329-1.037c.091-.25-.281-.842-.416-1.086-.454-.822-1.122-1.953-1.754-2.493-.309-.266-1.336-.864-2.693-.068-1.973%201.157-4.628%202.438-7.946%2010.437-1.003%202.417-1.521%207.234-1.553%208.607-.038%201.615.274%203.258%204.457%204.056%203.133.598%205.413.667%209.094.667%201.142%200%205.083-.309%206.525-3.035%201.327-2.51.853-5.21-.025-6.839Z%22%2F%3E%3Cpath%20fill%3D%22%23ffb300%22%20d%3D%22M13.2737%206.19947c.072-.535-.115-.918-.199-1.057l-.999.322s-.032.27%200%20.679c.03.409-1.015.771-1.015.771.592-.08%201.714-.308%201.919-.441.254-.165.294-.274.294-.274Z%22%2F%3E%3Cpath%20fill%3D%22%23eda600%22%20d%3D%22M13.5437%203.70447c-.061-.159-1.019-.388-1.281-.515-.274-.141-.489-.405-.61-.639l.01-.026c.002-.008.284-.811.048-.914-.129-.057-.225.107-.249.175-.331.902-1.16%201.287-1.398%202.294l-.413-.314c-.117-.089-.185-.059-.223-.018-.151.165.302.664.308.668.588.638%201.196%201.297%201.862%201.363.309.033%201.003-.175%201.237-.249.042.173.054.64.042.993.713-.23.691-.921.544-1.567%200%200-1.381.483-1.806.245-.401-.191-.778-.372-.937-.646-.088-.153.187-.757.508-1.263.417.216.483.405.457%201.015-.018.151-.061.381.052.383.167.02.264-.26.292-.417.016-.08.105-.306.177-.372.172-.158.343-.107.423-.091.608.107%201.043.145.957-.105Z%22%2F%3E%3Cpath%20fill%3D%22%23ffb300%22%20d%3D%22M7.1537%2012.24547c-.133-1.16-.131-2.145.02-3.085.089-.55.236-1.098.489-1.595.073-.141.681-1.054.901-.983l-.256-.324s-.963.566-1.587%201.641c-.622%201.077-.397%203.031-.538%204.873-.141%201.841-1.53%203.913-1.53%203.913l2.189-.592c.002%200%20.576-1.78.312-3.848Z%22%2F%3E%3C%2Fg%3E%3Cpath%20fill%3D%22%23eda600%22%20fill-rule%3D%22nonzero%22%20d%3D%22M4.2157%2018.14147c-.153.218-.492.051-.413-.205.038-.123.087-.258.147-.405.29-.715.791-1.539%201.553-1.778%201.289-.405%201.341.34%201.341.34-1.237.522-2.076%201.263-2.628%202.048Zm3.79-11.078c-.393-.227-.616-.944-.616-1.395%200-.451.273-.615.398-.222s.419.81.997%201.2l-.779.417Z%22%2F%3E%3C%2Fsvg%3E",
        date: "Juin 2020 à novembre 2020",
        company: "Les Gros Bras",
        city: "Marseille",
        title: "Ingénieur Frontend",
        tech: ["Vue.js", "Nuxt.js", "TailwindCSS", "TypeScript", "Node.js"],
        description: [
          `Les Gros Bras est une agence marseillaise spécialisée dans l’image de marque et le digital. J’ai collaboré avec l’agence dans le cadre de la création de sites web basés sur le CMS WordPress, React et ESNext`
        ],

        role: [
          "Collaboration étroite avec le directeur artistique dans la conception des maquettes et l’optimisation de l’expérience utilisateur",
          "Développement de composants et intégration de features en Vanilla JS (ESNext)",
          "Création de composants pour l’éditeur Gutenberg de Wordpress avec React et PHP",
          "Intégration d’animations et micro animations en Vanilla js pour optimiser l’UX",
          "Configuration de serveurs et déploiements",
          "Mise en place d’un système de backups quotidien",
          "Administration de serveurs et gestion de la sécurité des données",
          "Mise en place de systèmes de tracking et d’analyse de performance",
          "Mise en place de systèmes de redirections côté serveur",
          "Mise en place de systèmes de cache"
        ],

        stack: [
          "Wordpress",
          "React",
          "Sass",
          "ESNext",
          "Nginx",
          "SEO",
          "Google Analytics",
          "PHP",
          "MySQL",
          "Wordpress REST API",
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
        date: "Janvier 2016 à avril 2020",
        company: "Be Creative",
        city: "Marseille",
        title: "Co-fondateur, UI Designer, Développeur web",
        tech: ["Vue.js", "Nuxt.js", "TailwindCSS", "TypeScript", "Node.js"],
        description: [
          `Quelques clients notables :  Orange, EDF, BMW Station 7, Ponant, Maison des Arts de Cabriès, La Fédération du Batiment, HBPC, MEDEF, EMD School of Business, Baticup Méditerranée, Arène Aix, Mars Marketing.`
        ],

        role: [
          "Rôle de CTO",
          "Collaboration avec les clients et souvent d’autres intervenants dans le cadre de la conception des expériences utilisateurs (UX) et des maquettes  (UI)",
          "Développement de composants et intégration de fonctionnalités en Vanilla JS, React  (WordPress Gutenberg), Vue.js / Nuxt",
          "Configuration de serveurs et déploiements",
          "Mise en place d’un système de backups quotidien",
          "Administration de serveurs et gestion de la sécurité des données",
          "Mise en place de systèmes de tracking et d’analyse de performance",
          "Mise en place de systèmes de redirections côté serveur",
          "Mise en place de systèmes de cache",
          "Mise en place d’un système de backups quotidien",
          "Administration de serveurs et gestion de la sécurité des données",
          "Animation de démos clients",
          "Travaux d’optimisations  SEO : performances des Core Web Vitals, gestion des meta tags, mise en place de systèmes de redirections côté serveur et tracking d’events sur Google Analytics",
          "Web scraping (Puppeteer)",
          "Administration de serveurs, déploiements, backups, gestion de la sécurité des données"
        ],

        stack: [
          "Wordpress",
          "React",
          "Sass",
          "ESNext",
          "Nginx",
          "SEO",
          "Google Analytics",
          "PHP",
          "MySQL",
          "Wordpress REST API",
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
        degree: "Master en Management",
        city: "Marseille",

        description: [
          "Parcours Marketing Digital et Entrepreneuriat",
          "TOEIC 830 (Anglais niveau B2)",
          "Création d’entreprise en 2016, mentoré par Renaud de Clermont-Tonnerre (Maire de Plouégat-Guérand, Bretagne et ex. CEO de Havas Media Hebdos)"
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
        description: ["Haja a été pendant 3 ans le développeur Front clef de l'équipe, au moment de la création des produits Free-Work et Turnover-it. Haja maitrise parfaitement sa stack et son écosystème et fait toujours des propositions pertinentes d'UX et UI. Je garde un excellent souvenir de notre collaboration et vous le recommande."]
      },
      {
        title: "Head of Product",
        name: "Jimmy Wild",
        company: "Free-Work",
        description: ["J'ai eu la chance de collaborer avec Haja pendant plus de deux ans sur des projets complexes. Son implication était sans faille, et il a régulièrement proposé des innovations techniques qui ont considérablement amélioré nos produits. En plus de ses compétences techniques, il était très agréable de travailler avec lui grâce à sa communication claire et son esprit d'équipe. Si l'occasion se présente, je serais ravi de retravailler avec lui à l'avenir."]
      },
      {
        title: "CEO",
        name: "Antoine Hervet",
        company: "Xev.",
        description: ["Haja a fait preuve encore une fois de professionnalisme. Il a su se montrer autonome, productif et investi, et a terminé la mission dans les délais prévus. Je recommande fortement."]
      },
      {
        title: "CEO",
        name: "Mathieu Devillard",
        company: "L'Œil de Focus",
        description: ["Merci Haja pour le travail fourni. Il était précieux de travailler avec quelqu'un qui soit capable de saisir d'un seul tenant nos besoins à la fois techniques et graphiques. Cela nous a assuré un résultat d'une grande cohérence, et au plus proche de nos désirs grâce à une qualité d'écoute et une adaptabilité très appréciable."]
      },
      {
        title: "CEO",
        name: "Albane Faures",
        company: "Reso Solution",
        description: ["Haja a travaillé plusieurs mois pour ma société depuis 2017 et je suis ravie de sa capacité à rentrer dans l'ADN d'une entreprise pour en faire ressortir le meilleur lors de la création d'un site internet, ou de divers outils de communication en ligne. Haja tient ses engagements, est disponible pour tout souci ultérieur, j'estime que le service après vente est de grande qualité également. Son calme, sa réactivité et son professionnalisme sont très appréciables."]
      },
      {
        title: "CEO",
        name: "Ludovic Di Dia",
        company: "Les Gros Bras",
        description: [`Haja est un très bon développeur. L'excellence n'existe pas mais on s'en approche quand on travaille avec lui. Il a une analyse précieuse du besoin qu'il combine à une efficacité technique de haute qualité. Humainement, il est sincère, bienveillant et passionné. C'est tout simplement une personne de confiance. Je recommande grandement !`]
      }
    ]
  }
}