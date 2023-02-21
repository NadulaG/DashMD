🌐 Live Demo: http://74.207.236.92/

## Inspiration
When we looked at the inpatient tracking and hospital management systems already in place in hospitals worldwide, we saw that they were very outdated and poorly stylized. This makes it very difficult for hospital staff to properly keep track of patients, nurses, and systems. Our program promises to build on top of these outdated systems, providing new and improved visibility, accessibility, and accuracy. One of the largest and most adopted hospital management service is known as epic, despite that it's not at all user friendly which makes it much easier to make mistakes when typing information in. These are also ran by for-profit companies, which means that obtaining any sort of good server can be prohibitally expensive.

## What it does
Our program provides an interface with which hospital staff can keep track of patient affairs, hospital inventory, shift rotations, and visitation. This ease of use allows hospital staff to break away from the stressful and time-intensive methods of the past and focus on being able to truly help patients. From the waiting room to discharge, the patient is tracked with a smooth and simple interface and their needs are easily identified and met with a centralized biometrics and communications system. Not only does DashMD make patient affairs easier, it helps doctors, nurses, and other hospital staff work efficiently, from note-taking and patient records to shift rotations and room tracking. 

## How we built it
We leveraged SvelteKit / TailwindCSS to build the frontend, and PocketBase for the database. We hopped around different libraries for styling the frontend, first using DaisyUI, but later moving to Skeleton which is what we are using now. Because of the time and estimated scope we used Visual Studio Code Live Share, which is a bit like Google Docs for programming. This allowed us to collaborate in real-time, with the downside of constant reloads (although, that problem was greatly caused by Vite's hot-reload). If we weren't all working on it at the same time and if it were a large project, we would definitely solely utilize Git, but that isn't the case.

## Challenges we ran into
That the biggest challenge we ran into was understanding the scope of project we were able to complete. It's difficult to estimate how much time you will have to put into a project, so it's difficult to plan out what features you want to add far ahead of time. Another challenge we ran into was how to style the website. While we agree now, in the beginning we had a lot of conflicting opinions and ideas on how we wanted to style DashMD. This ended up being a big time sync for us as we restarted the entire project a few hours into the first day.

## Accomplishments that we're proud of
When developing DashMD, one of the major functionalities we wanted was a proper backend, which proved to be quite difficult. While it's relatively easy to hard-code a frontend with a specific set of features you want to show off, this example has a complete frontend *and* backend that can interact with each other. 

## What we learned
One important lesson that we learned is that in order to meet the deadline, we would each have to work "divide and conquer", or in other words, we would have to split up the work and work on different parts of the project at the same time. Another important lesson we learned is that it's important to have a clear vision of what you intend to create before you start working on a project. This allows you to plan out what you want to do and ensures that you do not end up wasting time on features that will not actually be implemented.

## What's next for DashMD
Because this site is actually functional and is made on a good foundation, we may try to expand on it if it's viable and we can obtain the support of NCSSM faculty. The greatest challenge we will likely face is obtaining FDA approval, as that seems to often be a limiting factor. Also running such a program in a development environment requires a lot of maintenance, so we would need to ensure that DashMD could properly be persistently developed. We do believe that this bit of software can actually solve a very real problem, so we'll likely reach out to see how viable production will be.
