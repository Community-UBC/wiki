import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "UBC Community Wiki",
  description: "Guides, tools, and info relevant to UBC",
  head: [
    ['link', { rel: 'icon', href: '/bookshelf.svg' }]
  ],
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '✨ Tools & Guides', link: '/tools/overview.md' },
      { text: '📌 Navigate campus', link: 'campus/general-guide/' }
    ],

    sidebar: {
      // Tools & Guides
      '/tools/': [
        {
          text: 'Essential Tools & Guides',
          items: [
            { text: 'Helpful Tools', link: '/tools/overview.md' },
            { text: 'Admissions Guide', link: '/tools/admissions/guide.md' },
            { text: 'Housing Guide', link: '/tools/housing/guide.md' },
            { text: 'Course Registration & Tools', link: '/tools/course-planning/registration.md' },
            { text: 'Academic Support',
              items: [
                { text: 'Textbooks Guide', link: '/tools/academics/classes/textbooks.md' },
                { text: 'Research Guide', link: '/tools/academics/research.md' },
                { text: 'GPA Boosters & Recommended Courses', link: '/tools/course-planning/recommended-courses.md' },
              ]
            },
            { text: 'Student Wellbeing',
              items: [
                { text: 'Mental Health Resources', link: '/tools/wellbeing/mental-health.md' }
              ]
            }
          ]
        }
      ]
    },


    socialLinks: [
      { icon: 'github', link: 'https://github.com/community-ubc/wiki' }
    ]
  }
})



// - ✨ Essential Tools & Guides: 
// - ⭐ Helpful Tools: tools.md
// - 📬 Admissions Guide: admissions/guide.md
//   # - BC Domestic: 
//   # - International: 
//   # - Transfer: 
// - 🏠 Housing Guide: housing/guide.md
// - 📅 Course Registraion & Tools: course-planning/registration.md
// - Academic Support:
//   - 📕 Textbooks Guide: academics/classes/textbooks.md
//   - 📜 Research Guide: academics/research.md
//   - 🤫 GPA Boosters & Recommended Courses: course-planning/recommended-courses.md
// - Student Wellbeing:
//   - 🧠 Mental Health Resources: wellbeing/mental-health.md    

// - 📌 Get around Campus:
// - General Guide: campus/general-guide.md 
// - Places to Visit: campus/ubc-sights.md


// - Lost & Found: campus/lost-and-found.md
// - Locations:
//   - 📖 Study spots: campus/study-spots.md
//   - 🍴 Food spots: campus/food.md
// - Amenities:
//   - 🛅 Lockers: campus/lockers.md
//   - 🍿 Microwaves: campus/microwaves.md
//   - 🛏️ Naps / Sleeping: campus/sleep.md
//   - 🖨️ Printers/Scanners/etc.: campus/printers.md
//   - 🚿 Showers: campus/showers.md
//   - 🚰 Water Fountains: campus/water-fountains.md