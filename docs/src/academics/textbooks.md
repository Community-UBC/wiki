---
layout: doc
aside: false
---

# Textbooks


Textbook companies often have business practices that force students to pay large amounts while already on a tight budget. While some courses have switched to more equitable and affordable models, such as open learning materials, some of your classes may still have expensive and/or unethical practices.

Here are some tips for getting textbooks.

<VpvContainerHorizontal>
    <VpvCardHorizontal
        title="1. NEVER buy books ahead of time"
        excerpt="In some classes, the book actually is an invaluable resource. You can see the Hall of Fame section below for some examples. However, with most classes you will find that you don't actually use the textbook. In some cases, the professor will TELL you that you don't need it sometime in the first week. Sometimes you will need to buy a specific version of the book, you will need some special online access, or it might be cheaper buying from a particular source. When in doubt, it's always best to wait for the first week of classes."
        titleLines="2"
        excerptLines="99"
        disableLinks="true"
    />
    <VpvCardHorizontal
        title="2. Find a PDF or EPUB of the textbook"
        excerpt="Even if you ultimately get the physical book, a PDF is super handy for if you don't have your book with you."
        titleLines="2"
        excerptLines="99"
        disableLinks="true"
    />
    <VpvCardHorizontal
        title="3. Try to buy books second hand"
        excerpt="Most students want to get rid of their books once the term is over. Below you can find some places to buy and sell your textbooks."
        titleLines="2"
        excerptLines="99"
        disableLinks="true"
    />
</VpvContainerHorizontal>

## Resources

::: details Places to look for PDFs & EPUBs

<VpvContainerVertical>
    <VpvCardVertical
        title="Anna's Archive"
        excerpt="Somewhat newer source for finding textbooks and research articles."
        url="https://annas-archive.org/"
        image="/img/card-tools.jpg"
        isExternal="true"
      />
      <VpvCardVertical
        title="Mobilism"
        excerpt="Has some books that you might not find on LibGen. You may need to make an account to see the book section."
        url="https://forum.mobilism.org"
        image="/img/card-tools.jpg"
        isExternal="true"
      />
      <VpvCardVertical
        title="Project Gutenberg"
        excerpt="Full texts of books or individual stories in the public domain. All files can be accessed for free under an open format."
        url="https://www.gutenberg.org/"
        image="https://www.gutenberg.org/gutenberg/pg-logo-144x144.png"
        isExternal="true"
      />
</VpvContainerVertical>
:::

If you are looking for research papers, see the [Research Guide](./research.md).

::: details Places to buy/sell textbooks

<VpvContainerVertical>
      <VpvCardVertical
        title="Karrot"
        excerpt="A third party app, used by UBC students."
        url="https://ca.karrotmarket.com/?in=vancouver-11031"
        image="https://karrotmarket.com/_remix/img_og_fallback_ca-I1MYiITt.webp"
        isExternal="true"
      />
      <VpvCardVertical
        title="Facebook Marketplace"
        excerpt="A third party website, used by UBC students. See below for some UBC specific groups."
        url="https://www.facebook.com/marketplace/"
        image="/img/misc/facebook-logo.png"
        isExternal="true"
      />
</VpvContainerVertical>
:::

::: warning
Sometimes a course or publisher will have shady practices that force students to buy new textbooks every term. This can include restructuring, renumbering pages/questions, or unnecessary online components. See TIP 1, even when buying second hand.
:::



::: info UBC Specific Facebook Groups

- [Buy and Sell - UBC Textbooks](https://www.facebook.com/groups/234720869933130/)
- [UBC TEXTBOOKS SALE](https://www.facebook.com/groups/150847275006201/)
- [UBC Used Textbooks](https://www.facebook.com/groups/ubc.textbook.4.sale/)
:::

::: info The following resources are no longer available

- Discount Bookstore
- [UBC Bookstore buyback program](https://bookstore.ubc.ca/faq/)
:::


## Good Textbook Examples

Here are some courses that are a great model for afforable and ethical learning materials. These are textbooks that are affordable, open source, and/or closely tie in with the content in the course. You should still wait before buying these books, since this section is intended to show off some amazing courses and teaching teams at UBC.

<VpvTableJSON 
  title="Course Hall of Fame"
  :columns="[
    { key: 'course', title: 'Course', format: 'text' },
    { key: 'textbook', title: 'Textbook', format: 'text' },
    { key: 'link', title: 'Link', format: 'link', options: { target: '_blank' } },
    { key: 'reason', title: 'Reason', format: 'text' },
    { 
      key: 'tags', 
      title: 'Tags', 
      format: 'tags',
      options: {
        tagColors: {
          'Custom': 'brand',
          'Free': '#10b981',
          'Open Source': '#059669',
          'Relevant': '#3b82f6',
          'Long Term Value': '#1d4ed8',
          'Accessible': '#0ea5e9'
        }
      }
    }
  ]"
  :jsonDataProp="[
    {
      course: 'CAPS 391',
      textbook: 'M & M Essential Anatomy',
      link: '',
      tags: ['Custom', 'Relevant', 'Long Term Value']
    },
    {
      course: 'CHEM 121',
      textbook: 'CHIRP',
      link: '',
      reason: '',
      tags: ['Custom', 'Relevant']
    },
    {
      course: 'DSCI 100',
      textbook: 'Data Science: A First Introduction',
      link: 'https://ubc-dsci.github.io/dsci-100-student/README.html',
      reason: 'Beautiful textbook that\'s really nicely organized',
      tags: ['Free', 'Open Source']
    },
    {
      course: 'PHIL 220',
      textbook: 'forall x: UBC edition',
      link: 'https://github.com/jonathanichikawa/for-all-x',
      reason: '',
      tags: ['Free', 'Open Source', 'Relevant', 'Long Term Value', 'Accessible']
    },
    {
      course: 'PHIL 320',
      textbook: 'Sets, Logic, Computation',
      link: 'https://slc.openlogicproject.org/',
      reason: '',
      tags: ['Free', 'Open Source', 'Relevant', 'Long Term Value', 'Accessible']
    },
    {
      course: 'PHIL 322',
      textbook: 'Boxes and Diamonds',
      link: 'https://bd.openlogicproject.org/',
      reason: '',
      tags: ['Free', 'Open Source', 'Relevant', 'Long Term Value', 'Accessible']
    },
    {
      course: 'PHIL 323',
      textbook: 'An Introduction to Non-Classical Logic: From If to Is',
      link: '',
      reason: 'Free through the UBC library',
      tags: ['Free', 'Relevant', 'Long Term Value', 'Accessible']
    },
    {
      course: 'STAT 201',
      textbook: 'ModernDive',
      link: 'https://moderndive.com/',
      reason: '',
      tags: ['Free', 'Open Source']
    }
  ]"
/>

## Bad Textbook Examples

<VpvTableJSON 
  title="Course Hall of Shame"
  :columns="[
    { key: 'course', title: 'Course', format: 'text' },
    { key: 'textbook', title: 'Textbook', format: 'text' },
    { key: 'link', title: 'Link', format: 'link', options: { target: '_blank' } },
    { key: 'reason', title: 'Reason', format: 'text' },
    { 
      key: 'tags', 
      title: 'Tags', 
      format: 'tags',
      options: {
        tagColors: {
          'Expensive': 'red',
          'Not Helpful': 'orange',
          'Mandatory Online': '#dc2626',
          'Unethical': '#b91c1c',
        }
      }
    }
  ]"
  :jsonDataProp="[
    {
      course: 'BIOL 300',
      textbook: 'The Analysis of Biological Data',
      link: 'https://www.reddit.com/r/UBC/comments/15xmmmz/booklist/jx7wwq6/?context=3',
      reason: 'Expensive and mandatory textbook written by prof. In class problems could only be submitted using newest edition of textbook.',
      tags: ['Expensive', 'Not Helpful', 'Unethical']
    },
    {
      course: 'CHEM 111',
      textbook: 'unknown',
      link: 'https://www.reddit.com/r/UBC/16oub7s',
      reason: 'Could not find that book online anywhere free or paid, nor could I find any used ones for sale. Practice problems from the textbook are part of your grade and change every year',
      tags: ['Expensive', 'Mandatory Online', 'Unethical']
    },
    {
      course: 'ECON 101',
      textbook: 'unknown',
      link: 'https://www.reddit.com/r/UBC/16oub7s',
      reason: 'Had to buy an expensive textbook for a good chunk of your grade because you had to do the online quizzes that came with it',
      tags: ['Expensive', 'Mandatory Online']
    },
    {
      course: 'PSYC 101',
      textbook: 'unknown',
      link: 'https://www.reddit.com/r/UBC/16oub7s',
      reason: 'Had to buy an online textbook to submit homework that was worth 19% of your grade, and that homework was just clicking buttons repeatedly',
      tags: ['Expensive', 'Mandatory Online']
    }
  ]"
/>

::: info References

**Sources:**

- https://www.reddit.com/r/UBC/16oub7s

<VpvTableJSON 
  title="Tag Reference"
  :columns="[
    { 
      key: 'tag', 
      title: 'Tag', 
      format: 'tags',
      options: {
        tagColors: {
          'Custom': 'brand',
          'Free': '#10b981',
          'Open Source': '#059669',
          'Relevant': '#3b82f6',
          'Long Term Value': '#1d4ed8',
          'Accessible': '#0ea5e9',
          'Expensive': '#dc2626',
          'Not Helpful': '#ea580c',
          'Mandatory Online': '#dc2626',
          'Unethical': '#b91c1c'
        }
      }
    },
    { key: 'description', title: 'Description', format: 'text' }
  ]"
  :jsonDataProp="[
    {
      tag: ['Free'],
      description: 'Does not cost any money'
    },
    {
      tag: ['Open Source'],
      description: 'The source code is available for anyone to view, modify, etc.'
    },
    {
      tag: ['Relevant'],
      description: 'Closely tied to the course content'
    },
    {
      tag: ['Long Term Value'],
      description: 'Long term value (even after course is completed)'
    },
    {
      tag: ['Accessible'],
      description: 'Accessible formats (ex. available online)'
    },
    {
      tag: ['Custom'],
      description: 'Created or customized for the course'
    },
    {
      tag: ['Expensive'],
      description: 'Expensive resource'
    },
    {
      tag: ['Not Helpful'],
      description: 'Irrelevant / Not helpful / Barely used'
    },
    {
      tag: ['Mandatory Online'],
      description: 'Mandatory Online Component / Unnecessary bundling'
    },
    {
      tag: ['Unethical'],
      description: 'Unethical practices (ex. small edits each year to force new purchases)'
    },
  ]"
/>
:::
