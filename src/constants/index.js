import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
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
      title: "Artist",
      icon: web,
    },
    {
      title: "Illustrator",
      icon: mobile,
    },
    {
      title: "Graphic Designer",
      icon: backend,
    },
    {
      title: "Photographer",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
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
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Illustrator",
      company_name: "Freelancer",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2021 - current",
      points: [
        "Customized acrylic paintings and digital art.",
        "Illustrating compelling narratives into visually appealing illustrations.",
        "A blend of colours that evoke emotions.",
        "Curating ideas based on client requirements",
        
      ],
    },
    {
      title: "Assistant Art Curator",
      company_name: "St. Joseph's University",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Aug 2023",
      points: [
        "Curated 4 exhibitions as a part of the Association of Art and Animation.",
        "Collaborated with creative people across college including artists, photographers, and visitors who were keen about art, to make the exhibitions meaningful.",
        "Conveyed meaningful narratives with curated artworks based on themes.",
      ],
    },
    {
      title: "Book Cover Designer",
      company_name: "Intertwined: The World That Was",
      icon: shopify,
      iconBg: "#383E56",
      date: "May 2023 - May 2023",
      points: [
        "Illustrated the book cover.",
        "Did the graphic design",
        "Did the proof reading of the book and edited it",
      ],
    },
    {
      title: "Graphic Designer",
      company_name: "SportsCentric",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Mar 2024 - Apr 2024",
      points: [
        "Designed banners for a football event held for the IT professionals.",
        "Designed Social Media posts",
      ],
    },
    {
      title: "Branding and Logo Designer",
      company_name: "TruBlend Ventures",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Mar 2024 - May 2024",
      points: [
        "Designed the logo for their honey brand",
        "Designed the brand identity",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "From the initial brainstorming session to the final delivery, she demonstrated an incredible ability to interpret my ideas and transform them into beautiful illustrations.",
      name: "Tara",
      designation: "Managing Director",
      company: "Zine",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Her meticulous attention to detail and understanding of our goals made the entire process seamless. We felt heard and valued at every step. If you’re looking for someone who can elevate your project with creativity and precision, look no further!",
      name: "Revathy",
      designation: "CEO",
      company: "Bytsey",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Her creativity knows no bounds, and they brought our vision to life in a way we never imagined possible. The attention to detail in every piece is stunning, and they truly listen to our needs. Every revision felt like a natural evolution of the concept, and the final result exceeded all our expectations.",
      name: "Ira",
      designation: "CTO",
      company: "Artsy",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Intertwined:The World That Was",
      description:
        "Book Cover Design for a science fiction novel",
      tags: [
        {
          name: "illustration",
          color: "blue-text-gradient",
        },
        {
          name: "scifinovel",
          color: "green-text-gradient",
        },
        {
          name: "autodesksketchbook",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://www.behance.net/gallery/179022025/Book-Cover-Design-for-Intertwined-The-World-That-Was",
    },
    {
      name: "Whispers of the Sea",
      description:
        "A graphic novel made as a part of college project",
      tags: [
        {
          name: "graphicnovel",
          color: "blue-text-gradient",
        },
        {
          name: "illustrations",
          color: "green-text-gradient",
        },
        {
          name: "autodesksketchbook",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://www.behance.net/gallery/179020667/Whispers-of-the-Sea-a-graphic-novel?tracking_source=project_owner_other_projects",
    },
    {
      name: "Bytsey: A honey brand",
      description:
        "Designed the logo and brand identity for TruBlend Ventures' honey brand: Bytsey",
      tags: [
        {
          name: "logodesign",
          color: "blue-text-gradient",
        },
        {
          name: "branding",
          color: "green-text-gradient",
        },
        {
          name: "adobeillustrator",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://www.behance.net/gallery/196974995/Packaging-Design-for-Bytsey",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };