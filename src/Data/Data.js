import CV from "./Documents/Curriculum_Vitae.pdf";
import Profile from "./Images/Profile.jpg";

/* ---- PORTAFOLIO IMAGENES ---- */
import Conecta2 from "./Images/Portfolio/Conecta2.jpg";
import RYD_Booking from "./Images/Portfolio/RYD_Booking.jpg";
import Store69 from "./Images/Portfolio/69Store.jpg";
import CalculadoraJS from "./Images/Portfolio/CalculadoraJS.jpg";
import Manage from "./Images/Portfolio/Manage.jpg";

/* ---- ACHIEVEMENTS IMAGENES ---- */
import DP from "./Images/Achievements/DesarrolladorProfesional.jpg";
import RJS from "./Images/Achievements/ReactJS.jpg";
import JS from "./Images/Achievements/JavaScript.jpg";
import OSS from "./Images/Achievements/OptimizacionSistemasDeSonido.jpg";
import RX from "./Images/Achievements/IzotopeRX.jpg";
import IM from "./Images/Achievements/TecnicasIngenierosMonitores.jpg";
import MO from "./Images/Achievements/MezclaOnline.jpg";
import GTR from "./Images/Achievements/GrabacionProduccionDeGuitarras.jpg";
import MD from "./Images/Achievements/MarketingDigital.jpg";


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
    description1:
      "Tecnólogo en Informática Musical, formado integralmente para intervenir la música desde la perspectiva del lenguaje musical, para la creación, producción, procesamiento (análogo y digital) y difusión del sonido, en el contexto de la comunicación artística del espectáculo.",
    description2:
      "Desarrollador tecnológico certificado, graduado de Digital House con conocimientos avanzados en Full Stack, además de demostrar muy buenas habilidades de liderazgo, comunicación y trabajo en equipo, enfocado en asumir nuevos retos que me permitan evolucionar mis habilidades y perfil profesional, fiel apasionado de la tecnología y la música.",
    curriculumvitae:
      "https://firebasestorage.googleapis.com/v0/b/curriculumvitae-jjml.appspot.com/o/Curr%C3%ADculum%20Vitae.pdf?alt=media&token=6d61bc4c-9745-4d6a-859c-9996b784f4eb",
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
      university: "Digital House",
      title: "Certified Tech Developer",
      initialyear: "2022",
      finalyear: "2023",
      city: "Argentina",
      type: "education",
    },
  ],
  achievements: {
    categorys: ["Desarrollo", "Sonido"],
    items: [
      {
        title: "Desarrollador Profesional",
        university: "Digital House",
        issued: "Marzo - 2023",
        image: DP,
        credential: "https://firebasestorage.googleapis.com/v0/b/curriculumvitae-jjml.appspot.com/o/Achievements%2FDesarrolladorProfesional.pdf?alt=media&token=3cd4b8e4-eb61-4cb2-b43f-098e6dd8be94",
      },
      {
        title: "Curso ReactJS",
        university: "Coder House",
        issued: "Enero - 2023",
        image: RJS,
        credential: "https://firebasestorage.googleapis.com/v0/b/curriculumvitae-jjml.appspot.com/o/Achievements%2FReactJS.pdf?alt=media&token=73cf3f5e-6a62-4693-a94e-53d452e2f1c2",
      },
      {
        title: "Curso JavaScript",
        university: "Coder House",
        issued: "Octubre - 2022",
        image: JS,
        credential: "https://firebasestorage.googleapis.com/v0/b/curriculumvitae-jjml.appspot.com/o/Achievements%2FJavaScript.pdf?alt=media&token=248fdbdc-a46c-47b8-9f9b-448ecd96f59c",
      },
      {
        title: "Optimisación de Sistemas de Sonido",
        university: "Instituto Ene Audio",
        issued: "Abril - 2020",
        image: OSS,
        credential: "https://firebasestorage.googleapis.com/v0/b/curriculumvitae-jjml.appspot.com/o/Achievements%2FOptimizacionSistemasDeSonido.pdf?alt=media&token=f3a5f902-5235-4cac-8c65-20509019c4b8",
      },
      {
        title: "Limpieza de Audio en Izotope RX",
        university: "Instituto Ene Audio",
        issued: "Abril - 2020",
        image: RX,
        credential: "https://firebasestorage.googleapis.com/v0/b/curriculumvitae-jjml.appspot.com/o/Achievements%2FIzotopeRX.pdf?alt=media&token=e68831f4-dabf-44e6-b0d3-3070908796f0",
      },
      {
        title: "Tecnicas Aplicadas para Ingenieros de Monitores",
        university: "Instituto Ene Audio",
        issued: "Abril - 2020",
        image: IM,
        credential: "https://firebasestorage.googleapis.com/v0/b/curriculumvitae-jjml.appspot.com/o/Achievements%2FTecnicasDeMonitores.pdf?alt=media&token=f8f2f85d-4f03-4ae1-b616-9b7c0a25e8fe",
      },
      {
        title: "Clase Magistral de Mezcla Online",
        university: "Instituto Ene Audio",
        issued: "Mayo - 2020",
        image: MO,
        credential: "https://firebasestorage.googleapis.com/v0/b/curriculumvitae-jjml.appspot.com/o/Achievements%2FMezclaOnline.pdf?alt=media&token=1ba18bbc-3c1c-4f4d-a1e2-be1f91a2bda1",
      },
      {
        title: "Clase Magistral de Grabación y Producción de Guitarras",
        university: "Instituto Ene Audio",
        issued: "Mayo - 2020",
        image: GTR,
        credential: "https://firebasestorage.googleapis.com/v0/b/curriculumvitae-jjml.appspot.com/o/Achievements%2FGrabacionProduccionGuitarras.pdf?alt=media&token=7e60e715-7543-4456-a469-ba57b445598a",
      },
      {
        title: "Marketing Digital",
        university: "MDALatam",
        issued: "Diciembre - 2021",
        image: MD,
        credential: "https://firebasestorage.googleapis.com/v0/b/curriculumvitae-jjml.appspot.com/o/Achievements%2FMarketing%20Digital.pdf?alt=media&token=1d1da8cf-7200-4d1a-88c7-46e8e3040f26",
      },
    ],
  },
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
