---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "UBC Community Wiki"
  text: "Guides, tools, and info relevant to UBC"
  tagline: "This is an open and community driven project, with information compiled by the wider UBC community. Thank you ❤️"
  actions:
    - theme: brand
      text: Contribute to the wiki
      link: .#contributing
    - theme: alt
      text: Reddit (r/UBC) 
      link: https://reddit.com/r/UBC
    - theme: alt
      text: Fediverse (UBC@lemmy.ca)
      link: https://lemmy.ca/c/UBC
---

<VitepressCardContainer :cols="2">
  <VitepressCard
    icon="ph:sparkle-fill"
    iconColor="#f9c23c"
    title="Essential Tools & Guides"
    body="Includes guides and community built tools for admissions, course registration, finding textbooks, mental health resources. and more."
  />
  <VitepressCard
    icon="ph:push-pin-fill"
    iconColor="#CA0B4A"
    title="Get around Campus"
    body="Includes guides and navigation tools for places to visit, lost & found, lockers, printers, showers, study/food/nap spots, etc."
  />
</VitepressCardContainer>

<br>

<h2 class="text-with-icon">
    <Icon icon="ci:folders" width="1.2em" height="1.2em" />
    Title
</h2>

<CardContainer>
<Card 
    title="UBC Community Wiki"
    description="Wiki website for UBC community guides & tools."
    link="https://github.com/Community-UBC/wiki"
    :tags="['Vue', 'Components', 'Coordination']"
/>
</CardContainer>



