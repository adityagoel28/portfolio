import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    python,
    django,
    aws,
    html,
    css,
    reactjs,
    tailwind,
    mongodb,
    git,
    airflow,
    // sql,
    docker,
    anastrat,
    ibm,
    alastor,
    homepage,
    videoCaptioning,
    vid2text,
    leetcodeStats,
    qLearning,
    blockchainMarketplace,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Engineer",
      icon: backend,
    },
    {
      title: "Cloud Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Airflow",
      icon: airflow,
    },
    // {
    //   name: "SQL",
    //   icon: sql,
    // },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Backend Developer Intern",
      company_name: "Anastrat",
      icon: anastrat,
      iconBg: "#383E56",
      date: "Dec 2022 - April 2023",
      points: [
        "Developed workflows with Apache Airflow to process data from multiple sources like AWS which increased data processing speed and worked on managing different dependent and independent cron jobs using Apache Airflow",
        "Scheduled and monitored workflows to ensure that all processes are running smoothly and on time.",
      ],
    },
    {
      title: "Open-Source Developer",
      company_name: "IBM",
      icon: ibm,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Feb 2023",
      points: [
        "Conducted blackbox testing on 10 APIs using EvoMaster, exposing different potential vulnerabilities.",
        "Performed comparative analysis between testing tools and identified areas for improvement to optimize reliability and enhance stability",
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "Alastor Infosec Private Limited",
      icon: alastor,
      iconBg: "#383E56",
      date: "March 2022 - April 2022",
      points: [
        "Developed a full-stack website using Django as the Backend for Cyber asset attack surface management.",
        "Created different visualization charts, including line graphs, pie charts and more, on the dashboard for the users to better understand the data",
        "Created a user authentication system that includes registration, login, logout, and password reset functionality.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Vaccine Registration Website",
      description:
        "Full-stack web application using Django featuring a 3D globe homepage with a login system allowing users to browse vaccination centers and available slots, as well as filter by pin code. Users can also download their vaccination certificate.",
      tags: [
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "threejs",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: homepage,
      source_code_link: "https://github.com/Web-Dev-Grp-Projects/DBMS/",
    },
    {
      name: "Leetcode Stats API",
      description:
        "This API allows us to easily access statistical data about users on Leetcode. It is built using Python and GrpahQL and uses the Leetcode API to fetch data. The API will return an image object containing our Leetcode statistics which we can add anywhere.",
      tags: [
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "graphql",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
      ],
      image: leetcodeStats,
      source_code_link: "https://github.com/adityagoel28/leetcode-stats-API/",
    },
    {
      name: "Video Captioning",
      description:
        "A model for automated collection of natural language phrases that explains the contents of video frames with the help of MSVD dataset. Extracted visual features from consecutive video frames and generated natural language captions to describe the video content effectively.",
      tags: [
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Deep Learning",
          color: "blue-text-gradient",
        },
        {
          name: "NLP",
          color: "pink-text-gradient",
        },
      ],
      image: videoCaptioning,
      source_code_link: "https://github.com/adityagoel28/Video-Captioning/",
    },
    {
      name: "Vid2Text",
      description:
        "Automatically transcribed video and audio files with 98% accuracy, saving companies and organisations loads of time using the innovative and creative solution of Vid2Text. this project also has easy keyword search through Text and the export audio in text format.",
      tags: [
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        }
      ],
      image: vid2text,
      source_code_link: "https://devpost.com/software/vid2text/",
    },
    {
      name: "Blockchain-based eCommerce warranty system using NFTs",
      description:
        "Blockchain-based eCommerce warranty system is a web portal is to replace the physical warranty and have blockchain based warranty using NFT which will ensure authenticity and security.",
      tags: [
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "Solidity",
          color: "blue-text-gradient",
        },
        {
          name: "reactjs",
          color: "pink-text-gradient",
        },
      ],
      image: blockchainMarketplace,
      source_code_link: "https://github.com/adityagoel28/Team-Reflex-Flipkart-Grid-4.0/",
    },
    {
      name: "RL-Q-Learning",
      description:
        "Q-Learning is a basic form of Reinforcement Learning which uses Q-values (also called action values) to iteratively improve the behavior of the learning agent. Q-Learning is used to train a robot/agent to find path in a strange environment to get maximum rewards while reaching its destination location.",
      tags: [
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Reinforcement Learning",
          color: "blue-text-gradient",
        },
        {
          name: "Q-Learning",
          color: "pink-text-gradient",
        },
      ],
      image: qLearning,
      source_code_link: "https://github.com/adityagoel28/RL-Q-Learning/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };