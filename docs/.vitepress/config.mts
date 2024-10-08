import { defineConfig } from 'vitepress'

const sidebarGuidesTools = [
  {
    text: 'Essential Guides & Tools',
    items: [
      { text: 'Helpful Tools', link: '/tools.md' },
      { text: 'Admissions Guide', link: '/admissions/index.md' },
      { text: 'Housing Guide', link: '/housing/index.md' },
      { text: 'Course Registration & Tools', link: '/course-planning/registration.md' },
      { text: 'Academic Support', 
        items: [
          { text: 'Textbooks Guide', link: '/academics/textbooks.md' },
          { text: 'Research Guide', link: '/academics/research.md' },
          { text: 'GPA Boosters & Recommended Courses', link: '/course-planning/recommended-courses.md' }
        ]
      },
      { text: 'Student Wellbeing',
        items: [
          { text: 'Mental Health Resources', link: '/wellbeing/mental-health.md' }
        ]
      }
    ]
  }
];

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "UBC Community Wiki",
  description: "Guides, tools, and info relevant to UBC",
  srcDir: './src',
  head: [
    ['link', { rel: 'icon', href: '/bookshelf.svg' }]
  ],
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/meta/index.md' },
      { text: '✨ Guides & Tools', link: '/tools' },
      { text: '📌 Navigate campus', link: 'campus/overview' }
    ],

    sidebar: {
      // Guides & Tools
      '/tools.md':          sidebarGuidesTools,
      '/admissions/':       sidebarGuidesTools,
      '/housing/':          sidebarGuidesTools,
      '/course-planning/':  sidebarGuidesTools,
      '/academics/':        sidebarGuidesTools,
      '/wellbeing/':        sidebarGuidesTools,
      '/campus/': [
        { text: 'Get around Campus',
          items: [
            { text: 'General Guide', link: '/campus/overview.md' },
            { text: 'Places to Visit', link: '/campus/ubc-sights.md' },
            { text: 'Lost & Found', link: '/campus/lost-and-found.md' },
            { text: 'Transit & U-Pass', link: '/campus/transit.md' },
          ]
        },
        { text: 'Locations', 
          items: [
            { text: 'Study spots', link: '/campus/study.md' },
            { text: 'Food spots', link: '/campus/food.md' },
          ]
        },
        { text: 'Amenities',
          items: [
            { text: 'Lockers', link: '/campus/lockers.md' },
            { text: 'Microwaves', link: '/campus/microwaves.md' },
            { text: 'Naps / Sleeping', link: '/campus/sleep.md' },
            { text: 'Printers/Scanners/etc.', link: '/campus/printers.md' },
            { text: 'Showers', link: '/campus/showers.md' },
            { text: 'Water Fountains', link: '/campus/water-fountains.md' }
          ]
        }
      ],
      '/meta/': [
        { text: 'Overview', link: '/meta/index.md' },
        { text: 'About Us',
          items: [
            { text: 'History & Best Of Posts', link: '/meta/community.md' },
            { text: 'Community Guidelines', link: '/meta/guidelines.md' },
            { text: 'Census Results',
              collapsed: true,
              items: [
                { text: '2018', link: '/meta/census/2018.md' },
                { text: '2017', link: '/meta/census/2017.md' },
              ]
            },
          ]
        },
        { text: 'Technical Details', 
          items: [
            { text: 'Installation Guide', link: '/meta/project.md' },
            { text: 'Old Installation Guides', link: '/meta/project-old.md' },
            { text: 'Changelog', link: '/meta/changelog.md' },
          ]
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/community-ubc/wiki' }
    ]
  }
})
