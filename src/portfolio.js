const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://karamissa.github.io',
  title: 'KI.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Karam Issa',
  role: 'Front End Engineer',
  description:
    'I like to work on projects with pleasant user experiences and neat simple designs! You can check out my projects below.',
  resume:
    'https://drive.google.com/uc?id=1CgNTFGqWcRuiXFsBpzkYBII10hypNFBH&export=download',
  social: {
    linkedin: 'https://www.linkedin.com/in/karam-issa-dev/',
    github: 'https://github.com/karamissa',
  },
}

const projects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Etch A Sketch',
    description:
      'A really simple page where you can draw on a canvas of squres and mess around with colors to great abstract art',
    stack: ['HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com/karamissa/etch-a-sketch',
    livePreview: 'https://karamissa.github.io/etch-a-sketch/',
  },
  {
    name: 'Freshr',
    description:
      'A music recommendation app that takes advantage of the Spotify API to search for artists/tracks and fetch recommendations. Especially useful for those without a Spotify subscription',
    stack: ['React', 'Node.js'],
    sourceCode: 'https://github.com/karamissa/freshr',
    livePreview: 'https://freshr-music.herokuapp.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Git',
  'React',
  'Next',
  'Node.js',
  'Restful APIs',
  'SASS',
  'CSS Libraries',
  'SQL',
  'NoSQL Databases',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'karamissa79@gmail.com',
}

export { header, about, projects, skills, contact }
