const projects = [
  {
    id: 1,
    title: "Birthday Organizer",
    description:
      "Platform built with MERN stack for organizing birthdays by groups, and counting down to the dates. It has cool features like authentication, authorization, single-page application, responsive design, full CRUD operations & upload photos",
    tech: [
      "ReactJS",
      "Material-UI",
      "Node.js",
      "MongoDB",
      "Redux",
      "React Router",
      "Express",
      "Bcrypt",
      "Mongoose",
      "Multer",
      "Cloudinary",
      "JWT",
    ],
    img: "../images/birthday-organizer.png",
    links: {
      url: "https://birthday-organizer.herokuapp.com/",
      github: "https://github.com/roei111/Birthday-Countdown",
      youtube: "https://www.youtube.com/watch?v=8yuLlZgGuRs",
    },
  },
  {
    id: 2,
    title: "Infinite Scroll Stock Photos",
    description:
      "An image gallery that fetches data from Unsplash API. It has some awesome features like searching for images, apply filters (sort by, orientation and color) and infinite scrolling in which images keeps on loading as the user scrolls",
    tech: ["ReactJS", "Material-UI"],
    img: "../images/infinite-scroll.png",
    links: {
      url: "https://infinite-scroll-photos.herokuapp.com/",
      github: "https://github.com/roei111/Infinite-Scroll",
      youtube: "https://www.youtube.com/watch?v=WmdbM44LBUU",
    },
  },
  {
    id: 3,
    title: "URL Shortener",
    description:
      "Vanilla Javascript app that shortens a long URL, tracks the number of clicks and has full responsive design",
    tech: ["EJS", "Bootstrap", "Node.js", "Express", "MongoDB", "Mongoose"],
    img: "../images/url-shortener.png",
    links: {
      github: "https://github.com/roei111/Url-Shortener",
      youtube: "https://www.youtube.com/watch?v=iIN-IuodrzM",
    },
  },
];

export default projects;