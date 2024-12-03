import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mehedi Hassan",
  initials: "MH",
  url: "https://mehedi-dev.io",
  location: "Dhaka, Bangladesh",
  locationLink: "https://maps.app.goo.gl/UPurpixc7uXop6yU8",
  description:
    "Software Developer with a knack for crafting innovative solutions and turning ideas into reality. Passionate about problem-solving, constantly exploring new technologies, and sharing insights.",
  summary:
    "A software developer by profession and a storyteller at heart. [I graduated in Computer Science and Engineering from AIUB in 2022](#education), and since then, my journey has been all about crafting digital experiences and solving problems with code. My career kicked off at [ProCorp as a Jr. Fullstack Developer](#work), where I honed my skills across the tech stack. A year later, I joined [Acote Group, as a Jr. Software Developer](#work), where I contributed to production-ready web applications diving deeper into web development. While I’m skilled in both frontend and backend, building stunning, intuitive interfaces is where I feel most at home. When I’m not coding, you’ll probably find me riding my bike through the streets of Dhaka, penning down reviews of the latest movies or series, or immersing myself in the world of anime and manga. I believe every line of code, like every good story, has the power to inspire and connect.",
  avatarUrl: "/me2.png",
  skills: [
    "JavaScript",
    "React.js",
    "Next.js",
    "Typescript",
    "Node.js",
    "MongoDB",
    "TailwindCSS",
    "SCSS",
    "Redux",
    "Chart.js",
    "Tanstack Query",
    "Docker",
    "Git",
    "Framer Motion",
    "Vue.js",
    "Vite",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mehedihypernova@gmail.com",
    tel: "+880186923766",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hassanmehedi1",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hassanmehedi1/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/hassan_mehedi1",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Acote Group",
      href: "https://acotegroup.com",
      badges: [],
      location: "On-Site",
      title: "Software Developer",
      logoUrl: "/acote.jpg",
      start: "December 2024",
      end: "Present",
      description:
        "I was recently promoted to Software Developer at Acote Group, marking a significant milestone in my career. This promotion reflects my growth, contributions to successful projects, and dedication to delivering high-quality solutions. I look forward to taking on more responsibilities and continuing to excel in my role.",
    },
    {
      company: "Acote Group",
      href: "https://acotegroup.com",
      badges: [],
      location: "On-Site",
      title: "Jr. Software Developer",
      logoUrl: "/acote.jpg",
      start: "September 2023",
      end: "November 2024",
      description:
        "As a Junior Software Developer at Acote Group, I’ve been contributing to the development of production-ready web applications, including e-commerce platforms, ERP solutions, CMS, admin dashboards, HRM systems, and more, for over a year. Collaborating with experienced mentors, I’ve enhanced my expertise in building scalable frontend and backend systems while learning advanced development practices. Additionally, I’ve taken on the responsibility of guiding junior developers, fostering teamwork, and ensuring high-quality deliverables. This role has sharpened my technical and leadership skills, making me a more confident and versatile developer.",
    },
    {
      company: "ProCorp",
      badges: [],
      href: "https://procorp.com",
      location: "Remote",
      title: "Jr. Fullstack Developer",
      logoUrl: "/procorp.jpg",
      start: "October 2022",
      end: "August 2023",
      description:
        "As a Junior Fullstack Developer at ProCorp, I worked remotely on developing and maintaining web applications, handling both frontend and backend tasks. I extensively used GitHub for team collaboration, streamlining workflows and version control. During this time, I also gained hands-on experience with unit testing and enhanced my ability to deliver robust, high-quality code. This role sharpened my technical skills and taught me the dynamics of effective remote teamwork.",
    },
  ],
  education: [
    {
      school: "American International University-Bangladesh (AIUB)",
      href: "https://www.aiub.edu/",
      degree: "Bachelor of Computer Science and Engineering (CSE)",
      logoUrl: "/aiub.jpg",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Acote AI | Company Profile",
      href: "https://ai.acotegroup.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "I developed and deployed a responsive company profile website called Company Dept. Profile, highlighting the organization’s brand and services. Using Next.js for high performance and SEO, I crafted an intuitive UI with Tailwind CSS and Material UI, ensuring both functionality and aesthetic appeal. Engaging animations, powered by Framer Motion, enhance the user experience, adding a modern touch to the design.",
      technologies: [
        "Next.js",
        "Typescript",
        "Framer Motion",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://ai.acotegroup.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/hassanmehedi1/acote-ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ai2.jpg",
      video: "",
    },
    {
      title: "Opochoynoy",
      href: "https://opochoynoy.com",
      dates: "October 2023 - Jan 2024",
      active: true,
      description:
        "Developed a Full-Stack marketplace for trading construction materials. Platform enables efficient material trading with robust security and scalability. Features include: Real-time search with multi-parameter filtering,English/Bangla language support, Secure payment processing, Comprehensive user dashboards for buyers/sellers. Implemented performance optimization with lazy loading and CDN integration.",
      technologies: [
        "Next.js",
        "Typescript",
        "Node.js",
        "MongoDB",
        "TailwindCSS",
        "SSLCommerz",
        "Shadcn UI",
        "Redux",
      ],
      links: [
        {
          type: "Website",
          href: "https://opochoynoy.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/opochoy.jpg",
      video: "",
    },
    {
      title: "K-Village (LMS)",
      href: "https://kvillagebd.com",
      dates: "Jan 2024 - June 2024",
      active: true,
      description:
        "KVillage is an interactive LMS platform designed for immersive Korean language learning, tailored for users seeking structured and engaging language instruction. The application features real-time communication, data visualization, and progress tracking to enhance user engagement and learning outcomes. Interactive animations, integrated assessments, and performance charts make learning dynamic and engaging.",
      technologies: [
        "React.js",
        "Typescript",
        "Node.js",
        "MongoDB",
        "TailwindCSS",
        "Socket.io",
        "Material UI",
        "SSLCommerz",
        "AWS",
      ],
      links: [
        {
          type: "Website",
          href: "https://kvillagebd.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/kvillage.png",
      video: "",
    },
    {
      title: "PMIS - Integrated Management System for KEC",
      href: "https://pmisbd.com",
      dates: "July 2024 - February 2025",
      active: true,
      description:
        "PMIS (Project Management Information System) is a comprehensive solution developed for KEC, a leader in expressway management and toll collections. This system integrates various management modules, including ITS, HR, toll, road, and traffic management, to streamline operations and improve efficiency. As part of a development team, I contributed to both the frontend and backend, implementing real-time data, analytics, and interactive dashboards for data-driven decision-making.",
      technologies: [
        "React.js",
        "Typescript",
        "Node.js",
        "MongoDB",
        "TailwindCSS",
        "Shadcn UI",
        "AWS",
        "Cloudflare",
      ],
      links: [
        {
          type: "Website",
          href: "https://pmisbd.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/pmis.jpg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
