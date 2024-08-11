---
layout: doc
---

# Registration Information & Tools

Here are some tips and tools that might make registration easier after the transition to Workday. A large number of older tools will no longer work after the transition, and they have been moved accordingly.

As you might expect, this section will change rapidly and often over the next few weeks (or months). Please verify information with the linked pages, and suggest improvements or changes!

> We used to have a message here about how the SSC can make course registration difficult. *Sorry SSC, we miss you.*

## FAQ

::: details Registration Times: When will I know, how is this calculated, and where can I find it?

You will know around **1-2 week(s)** before the registration date. Your registration date will be with other people in your year group, usually in this order:

1. Graduate students
2. Fourth and fifth-year students and diploma programs
3. First-year students
4. Third-year students
5. Second-year students
6. Visiting, Unclassified, and Access Studies students

The method for how UBC calculates your registration day and time has changed very recently. It now likely uses your overall GPA, among over factors. You will get an email with your registration time, and you can confirm the details on Workday. 

See the following links:

- [students.ubc.ca/enrolment/registration/registration-dates](https://students.ubc.ca/enrolment/registration/registration-dates)
- [students.ok.ubc.ca/ws-tutorial/viewing-your-registration-appointment](https://students.ok.ubc.ca/ws-tutorial/viewing-your-registration-appointment/)
:::

::: details How does Workday handle prerequisites?

In the past, some courses were set up with 'soft' prerequisites, where students could register for a course but would receive an email from the department once they check the list. 

This is no longer the case for most courses, and so Workday will NOT let you register if it thinks you do not meet the prerequisites. This can happen if:

- You took the course at another school (INCLUDING UBC Okanagan)
- You have a pre-arranged exemption with the department

**What you should do:** 

Contact your department's advising office as soon as you notice the problem, and send all relevant details about your issue (ex. what course, what prerequisite is being met, and how). If successful, the department may do some (or none!) of the following:

- **before your registration date:** add an override to your account so you can register
- **after your date:** register you, or backdate your waitlist position to an earlier date
:::

::: details If the course section is full, what should I do?

In the past, it was possible to 'jump the waitlist' and register for a course, if you noticed that there was a spot open. Students could use monitoring services to do this more easily. This is no longer the case.

> **Why was this possible?:** In the SSC, "waitlist" sections were actually just regular sections that were titled "waitlist". Someone would need to periodically go in and move students from the waitlist into the actual section.

Workday has an actual waitlist system:

- You will automatically be put in the waitlist if the registration fails.
- When a spot opens up, it will offer it to the first waitlisted student that meets the seat's requirements. Seats that are restricted to a specific group (ex. a certain specialization) will be offered to the next student that meets that requirement.
- After the offer, the student has 24 hours to respond, before it is offered to the next student.

Other important changes:

- You can register for multiple waitlists for the same course or section type
- You can register for a waitlist even if it conflicts with something else
- If a course requires a secondary section (ex. lab, discussion, etc.), you MUST register for one when you register for the lecture section.

Things that are still true:

- If you are near graduation and need a course to graduate, reach out to your department. They may be able to help.
- If you are unable to register and classes are starting, show up to the first few lectures. Sometimes the instructor will have special policies for students on the waitlist, and students that show up generally get priority.
:::


## Important Reminders

1. Update your email address in Workday! Some of the imported email addresses were outdated (ex. from the student's original application), and so students were not receiving Workday emails.
2. You will need to register for term 1 and term 2 separately. Register for term 1 first in order to avoid issues (ex. workday blocking term 1 courses, workday thinking you don't meet prerequisites for term 2, etc.)
3. If your course requires a lab/tutorial/discussion (secondary section), you MUST register for both lecture and secondary section at the same time.




## 1. Pick your courses

Tools that help you pick your courses, find grade distributions, etc.

<CardContainer>
<Card 
    title="UBCGrades.com"
    image="/img/tools-card.jpg"
    description="This site lets you see past grade distributions for courses. You can use it to judge difficulty, or see how grades changed between each sections or year."
    link="https://ubcgrades.com"
    :tags="['Course Difficulty', 'GPA']"
/>
<Card 
    title="RateMyProf"
    image="https://www.ratemyprofessors.com/static/media/meta-no-thumbs.16c7cf81.png"
    description="Some courses will specify who is teaching, and this tool lets you read past reviews."
    link="http://www.ratemyprofessors.com/campusRatings.jsp?sid=1413"
    :tags="['Course Difficulty', 'Instructors']"
/>
<Card 
    title="UBC Profs Search"
    image="/img/tools-card.jpg"
    description="Shows what courses (and UBCGrades links to those courses) that a prof has taught in the past. Useful for finding the past grade distributions or research interests of a certain prof."
    link="https://profsearch.randyzhu.com"
    :tags="['Course Difficulty', 'Instructors']"
/>
<Card 
    title="UBCExplorer.io"
    image="/img/tools-card.jpg"
    description="This tool should let you see all course prereqs/coreqs and dependencies. (unverified)"
    link="https://ubcexplorer.io/"
    :tags="['Planning', 'Prerequisites']"
/>
<Card 
    title="UBC Pair"
    image="/img/tools-card.jpg"
    description="Official UBC grade distribution tool, which is more accurate but harder to use. You will need ot access using your UBC VPN, or use it on campus."
    :tags="['Course Difficulty', 'GPA']"
    disabled=true
/>
</CardContainer>

::: details Outdated / Unavailable Tools
**UBC Pair**

The Pair tool is likely being migrated, and the link on the website is currently broken. This page will be updated when/if the new page becomes accessible.

> Please note: The Grades Distribution Report has moved to Enterprise Data Governance.
> 
> [source](https://pair.ubc.ca/student-data-analytics/performance/)

**Outdated tools**

- Pre-Req Tree
- Slacknotes
- UBC Profs: Offered information on grading variance between profs. (ubc-profs-reborn.herokuapp.com)
:::


## 2. Plan your course timetable

These are tools to help you plan out your course schedule for future terms, once you know what courses you want to take.

<CardContainer>
<Card 
    title="UBCScheduler"
    image="/img/tools-card.jpg"
    description="This is the 'only student-developed app that has permission to access the UBC course database, ensuring the information is accurate and up-to-date'. It includes a schedule generator, drag and drop calendar, schedule type (late start, days off, etc), etc. Funded by the AMS Student Initiatives Fund and UBC eHub."
    link="https://ubcscheduler.ca"
    :tags="['Scheduling']"
/>
<Card 
    title="UBC Schedule Optimizer"
    image="/img/tools-card.jpg"
    description="A website for creating schedules based on walking times, gaps between classes, prof-ratings, and more. After inputting the courses you want to take, the tool will build you a few schedules."
    link="https://ubc-schedule-optimizer.herokuapp.com/"
    :tags="['Scheduling']"
/>
</CardContainer>

::: details Outdated Tools

**Outdated tools**

- ubcscheduler.github.io
- yichen's tool (yichen.dev/UBCScheduler)
- HFaran's tool (github.com/hfaran/ubc-timetabler)
- ChenVictor's tool (github.com/chenvictor/CourseScheduler/releases)

:::

## 3. Survive Workday

These tools make it easier to use Workday.

<CardContainer>
<Card 
    title="Workday-Hide-Average"
    image="/img/tools-card.jpg"
    description="This browser extension will hide your average until you hover over it, so taht you feel more comfortable opening Workday around other people."
    link="https://github.com/tobyL05/Workday-Hide-Average"
    :tags="['Workday']"
/>
<Card 
    title="Workday Calendar Tool"
    image="/img/tools-card.jpg"
    description="This browser extension will let you view how courses fit into your schedule as you browse the course list. It does not create a worklist for you, so be sure to create that separately."
    link="https://github.com/mlool/workday-calendar-extension?tab=readme-ov-file#download"
    :tags="['Workday']"
/>
<Card 
    title="Custom Workday Courselist"
    image="/img/tools-card.jpg"
    description="This extension enhances Workday's messy course search list by compacting and categorizing courses, as well as displaying course descriptions, averages, instructors, and more through an intuitive layout on the same page."
    link="https://github.com/JustintyC/Custom-Workday-Courselist-Extension"
    :tags="['Workday']"
/>
<Card 
    title="Import your schedule to your calendar"
    image="/img/tools-card.jpg"
    description="This tool will let you import your worklists from Workday into your calendar software."
    link="https://workday2ics.pedram.tech"
    :tags="['Workday']"
/>

</CardContainer>

## Outdated Sections

**Transcript Related Tools**

These are tools to help you format, print, and export transcript data. There are currently no working tools for this section. Former tools include:

- Improved UBC Transcripts (arashout.site/posts/improved-ubc-transcript)
- UBC Transcript Formatter - Extension (github.com/mchuahua/ubc-transcript)

**Get into a full course**

Workday has managed waitlists, and as such these tools will no longer help you. Please see the FAQ section above. Former tools include:

- UBCCourseNotify (FREE - ubcnotify.com)
- UBCNotify (paid - ubcnotify.com)
- MyUBCCourseIsFull (paid - myubccourseisfull.com)
