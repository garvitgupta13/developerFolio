/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Garvit Gupta",
  title: "Hi all, I'm Garvit",
  subTitle: emoji(
    "A final year undergraduate in Computer Science from IIIT Jabalpur and passionate about Software developement and learning new technologies 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1C9FproMojgTw6DuQ3Ut-oq9nZE3KMyWt/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/garvitgupta13",
  linkedin: "https://www.linkedin.com/in/garvitgupta13/",
  gmail: "garvitgupta2001@gmail.com",
  facebook: "https://www.facebook.com/garvit.gupta.182940/",
  // codeforces: "https://codeforces.com/profile/gupta_garvit",
  // codechef: "https://www.codechef.com/users/gupta_garvit",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section
// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "",
  // "Web Devloper exploring the field of DL and ML. I also regularly practise DSA",
  skills: [
    emoji("⚡ Create interactive websites."),
    emoji("⚡ Explore new libraries and frameworks"),
    emoji("⚡ Explore some deep learning frameworks such as Keras and Pytorch")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mysql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section
// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Indian Institute of Information Technology Jabalpur",
      logo: require("./assets/images/iiitdmjLogo.jpg"),
      subHeader: "B.Tech in Computer Science",
      duration: "July 2019 - June 2023",
      desc: "CPI: 8.6"
    },
    {
      schoolName: "St. John Sr. Sec. School, Kota",
      logo: require("./assets/images/stjohnLogo.png"),
      subHeader: "XI-XII",
      desc: "Scored 88% in 12th boards"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer Intern",
      company: "TranZact",
      companylogo: require("./assets/images/tranzact.webp"),
      date: "May 2022 – Aug 2022",
      descBullets: [
        "Created an auto-login process enabling multi-device login with a single click leading to a reduction in customer acquisition cost by 47%",
        "Added unit tests for important module’s business logic which increased test coverage from 22% to 31%"
      ]
    },
    {
      role: "Academic Procedures Team Lead",
      company: "Fusion - InterCollege Website",
      companylogo: require("./assets/images/iiitdmjLogo.jpg"),
      date: "Jan 2022 – Apr 2022",
      descBullets: [
        "Deployed and optimized the website, which has been used by more than 1500 students and college admin so far",
        "Developed an online registration process for students and admin verification"
      ]
    },
    {
      role: "Software Developer Intern",
      company: "Slotly",
      companylogo: require("./assets/images/slotly.svg"),
      date: "Oct 2021 – Jan 2022",
      descBullets: [
        "Synchronized google calendar and slotly slots via Google Calendar API, utilizes GoogleMeet to generate meeting link after booking slot",
        "Added feature of delivering limited messages at a time to optimize the user experience"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Second runner-up in REIGN hackathon",
      subtitle:
        "Created a banking dashboard in hackathon with 5000 participants organised by Kotak Mahindra Bank Ltd",
      image: require("./assets/images/reign_logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://unstop.com/certificate-preview/8f5511ec-d4ef-481c-b9d2-53d1cd731108"
        }
      ]
    },
    {
      title: "Top performer in GSSOC 21",
      subtitle:
        "Contributed to several open source projects and was at the 38th position among 1300+ participants",
      image: require("./assets/images/gssoc.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1I2N68sEEsdY5WfERxtvviZT4GfQrpfs7/view?usp=sharing"
        },
        {
          name: "LOR",
          url: "https://drive.google.com/file/d/1ZetrnxY9-nzuetP2WX4z1ALPrEJZD4bq/view?usp=sharing"
        }
      ]
    },

    {
      title: "MERN Bootcamp",
      subtitle:
        "Completed Certifcation from LCO for Full Stack Web Development using MERN stack",
      image: require("./assets/images/lco.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://courses.learncodeonline.in/learn/certificate/2455050-50332"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📱"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7424902828",
  email_address: "garvitgupta2001@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
