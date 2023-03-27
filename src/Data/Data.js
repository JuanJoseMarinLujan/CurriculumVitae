import CV from "./Documents/Curriculum_Vitae.pdf";
import Profile from "./Images/Profile.jpg";

/* ---- PORTAFOLIO IMAGENES ---- */
import Conecta2 from "./Images/Conecta2.jpg";
import RYD_Booking from "./Images/RYD_Booking.jpg";
import Store69 from "./Images/69Store.jpg";
import CalculadoraJS from "./Images/CalculadoraJS.jpg";
import Manage from "./Images/Manage.jpg";

export const Data = {
  name: "Juan Jose Marin Lujan",
  img: Profile,
  socialmedia: {
    instagram: "https://www.instagram.com/juanjosemarinlujan",
    linkedin: "https://www.linkedin.com/in/juanjosemarinlujan",
    github: "https://github.com/JuanJoseMarinLujan",
  },
  home: {
    speciality: "Desarrollador Web",
    description: "Frontend, Backend, Base de Datos, Infraestructura y Redes.",
  },
  about: {
    img: Profile,
    expDeveloper: "0 Año",
    expSound: "2+ Año",
    projects: "1+",
    description1:
      "Tecnólogo en Informática Musical, formado integralmente para intervenir la música desde la perspectiva del lenguaje musical, para la creación, producción, procesamiento (análogo y digital) y difusión del sonido, en el contexto de la comunicación artística del espectáculo.",
    description2:
      "Desarrollador tecnológico certificado, graduado de Digital House con conocimientos avanzados en Full Stack, además de demostrar muy buenas habilidades de liderazgo, comunicación y trabajo en equipo, enfocado en asumir nuevos retos que me permitan evolucionar mis habilidades y perfil profesional, fiel apasionado de la tecnología y la música.",
    curriculumvitae: CV,
  },
  skills: [
    {
      title: "Frontend",
      skills: [
        { title: "HTML", level: "Avanzado" },
        { title: "CSS", level: "Avanzado" },
        { title: "Saas", level: "Avanzado" },
        { title: "Tailwind", level: "Avanzado" },
        { title: "JavaScript", level: "Avanzado" },
        { title: "ReactJS", level: "Avanzado" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { title: "Java", level: "Avanzado" },
        { title: "Spring Boot", level: "Intermedio" },
        { title: "NodeJs", level: "Intermedio" },
        { title: "MySQL", level: "Avanzado" },
        { title: "Firebase", level: "Avanzado" },
        { title: "MongoDB", level: "Intermedio" },
        { title: "Postman", level: "Intermedio" },
        { title: "Git", level: "Avanzado" },
      ],
    },
    {
      title: "DevOps",
      skills: [
        { title: "EC2", level: "Intermedio" },
        { title: "S3", level: "Intermedio" },
        { title: "RDS", level: "Intermedio" },
      ],
    },
    {
      title: "Diseño",
      skills: [
        { title: "PhotoShop", level: "Avanzado" },
        { title: "Illustrator", level: "Intermedio" },
        { title: "PremiePro", level: "Avanzado" },
        { title: "AfterEffects", level: "Intermedio" },
      ],
    },
    {
      title: "Metodologías Agiles",
      skills: [
        { title: "Scrum", level: "Avanzado" },
        { title: "Kanban", level: "Avanzado" },
      ],
    },
    {
      title: "Audio",
      skills: [
        { title: "Produccion Musical", level: "Intermedio" },
        { title: "Grabacion", level: "Avanzado" },
        { title: "Mezcla", level: "Intermedio" },
        { title: "Masterizacion", level: "Intermedio" },
        { title: "Sonido en vivo", level: "Avanzado" },
      ],
    },
    {
      title: "Iluminacion",
      skills: [
        { title: "Diseño", level: "Avanzado" },
        { title: "Montaje", level: "Avanzado" },
        { title: "Operacion", level: "Avanzado" },
      ],
    },
    {
      title: "Otras Habilidades",
      skills: [
        { title: "Excel", level: "Avanzado" },
        { title: "Word", level: "Avanzado" },
        { title: "PowerPoint", level: "Avanzado" },
        { title: "SketchUp", level: "Intermedio" },
        { title: "AutoCAD", level: "Intermedio" },
      ],
    },
  ],
  experience: [
    {
      university: "ITM",
      title: "Informatica Musical",
      initialyear: "2016",
      finalyear: "2019",
      city: "Medellin",
      type: "education",
    },
    {
      company: "Teatro Pablo Tobon Uribe",
      role: "Tecnico de Sonido e Iluminacion - Practicas",
      initialyear: "2019",
      finalyear: "2019",
      city: "Medellin",
      type: "labour",
    },
    {
      company: "Casa Teatro El Poblado",
      role: "Tecnico de Sala",
      initialyear: "2021",
      finalyear: "2022",
      city: "Medellin",
      type: "labour",
    },
    {
      university: "Coder House",
      title: "Desarrollo Web Full Stack",
      initialyear: "2022",
      finalyear: "2023",
      city: "Argentina",
      type: "education",
    },
    {
      university: "Digital House",
      title: "Certified Tech Developer",
      initialyear: "2022",
      finalyear: "2023",
      city: "Argentina",
      type: "education",
    },
  ],
  portfolio: {
    categorys: ["Todo", "Frontend", "Backend", "Sonido"],
    projects: [
      {
        title: "Conecta-2",
        url: "https://www.youtube.com/watch?v=Ve-QLiwjmLs",
        category: ["Sonido"],
        tools: "Ableton Live - Native Intruments - Waves",
        img: Conecta2,
      },
      {
        title: "RYD Booking",
        url: "http://frontend-r-y-d.s3-website.us-east-2.amazonaws.com/Home",
        category: ["Frontend", "Backend"],
        tools: "ReactJS - Taildwind - Java - Spring Boot - MySQL",
        img: RYD_Booking,
      },
      {
        title: "69 Store",
        url: "https://juanjosemarinlujan.github.io/69Store",
        category: ["Frontend"],
        tools: "ReactJS - Taildwind - Firebase",
        img: Store69,
      },
      {
        title: "Manage Web",
        url: "https://juanjosemarinlujan.github.io/Manage",
        category: ["Frontend"],
        tools: "Html - Css",
        img: Manage,
      },
      {
        title: "Calculadora Web",
        url: "https://juanjosemarinlujan.github.io/Calculadora1",
        category: ["Frontend"],
        tools: "Html - Saas - Javascript",
        img: CalculadoraJS,
      },
    ],
  },
  contact: {
    whatsapp: {
      phone: "+57 302 435 5354",
      url: "https://api.whatsapp.com/send/?phone=573024355354&text&type=phone_number&app_absent=0",
    },
    messenger: {
      username: "juanjosem.97",
      url: "https://m.me/juanjose.m97",
    },
  },
};
