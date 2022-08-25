import './sass/App.scss';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import {ContactTitle, ProjectsTitle, MainTitle} from './components/section-titles';
import DiamondIcon from './components/diamond-icon';
import ProjectsCarrousel from './components/projects-carrousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  const projects = [
    {
      title: 'Fitness Calculator',
      img: './projects/fit-calc.png',
      description: 'Web app where you can calculate your BFP (Body fat percentage), your ideal weight (Work in progress) and your DCR (Daily calory requirement - Work in progress)',
      technologies: ['JavaScript', 'CSS', 'SASS', 'API', 'Bootstrap', 'HTML'],
      url: 'https://maxg02.github.io/Fitness-Calculator/',
      repository: 'https://github.com/maxg02/Fitness-Calculator'
    },
    {
      title: 'W3schools Homepage Clone',
      img: './projects/w3sch-clone.png',
      description: 'A frontend\'s clone of the W3school\'s homepage',
      technologies: ['JavaScript', 'CSS', 'HTML'],
      url: 'https://maxg02.github.io/W3school-Homepage-Clone/',
      repository: 'https://github.com/maxg02/W3school-Homepage-Clone'
    },
    {
      title: 'Python AddressBook',
      img: './projects/py-addrbook.png',
      description: 'An android-like Address Book made with Python',
      technologies: ['Python', 'Tkinter', 'SQLite'],
      repository: 'https://github.com/maxg02/GUI-AddressBook-Python'
    },
  ]

  const contact = [
    {
      icon: faEnvelope,
      url: 'mailto:maxdanielgs@hotmail.com'
    },
    {
      icon: faGithub,
      url: 'https://github.com/Lithios23'
    },
    {
      icon: faLinkedin,
      url: 'https://www.linkedin.com/in/max-daniel-garcia-sanchez-b9658a224/'
    }
  ]

  const contactIcons = contact.map((contact, pos)=>{
    return (
      <DiamondIcon animated icon={<FontAwesomeIcon icon={contact.icon} size="3x" transform={{rotate: -45}}/>} key={pos} url={contact.url} size='140px'/>
    )
  })
  
  return (
    <div className="App bg-primary vh-100">
      <section id='about' className='vh-100 position-relative d-flex'>
        <MainTitle/>
        <Container fluid className='mt-auto mb-5' style={{height:'60%'}}>
          <Row className='h-100 justify-content-evenly'>
            <Col xs='5' className='d-flex align-items-center justify-content-center flex-column pt-5'>
              <div className='w-100'>
                <div className='d-flex w-100 mb-4'>
                  <Image src='./title-ends/title-end-left.png' style={{maxHeight: '52px'}}/>
                  <h3 className='bg-secondary m-0 pt-1 text-center flex-grow-1' style={{fontSize: '40px'}}>Front-end developer</h3>
                  <Image src='./title-ends/title-end-right.png' style={{maxHeight: '52px'}}/>
                </div>
                <p className='text-white'>Computer enthusiast based in Dominican Republic. Focused on web development especially front-end.</p>
              </div>
            </Col>
            <Col xs='auto' id='profile-img-frame' className='h-100 d-flex p-0'>
              <Image src="./profile-frame.svg" alt="Profile-frame" className='h-100'/>
            </Col>
          </Row>
        </Container>
        <div className='position-absolute projects-title-end d-flex flex-column' style={{transform: 'rotate(180deg)', bottom: 0}}>
          <span className='bg-secondary'></span>
          <img src="./title-ends/title-end-down.png"/>
        </div>
      </section>
      <section id='projects' className='vh-100'>
        <Row className='vh-100 position-relative w-100 m-0'>
          <ProjectsTitle/>
          <Col xs={{span:8, offset:3}} className='px-0 h-100'>
            <ProjectsCarrousel projects={projects}/>
          </Col>
        </Row>
      </section>
      <section id='contact' className='vh-100 py-5 d-flex flex-column position-relative'>
        <div className='position-absolute projects-title-end d-flex flex-column' style={{top: 0}}>
          <span className='bg-secondary'></span>
          <img src="./title-ends/title-end-down.png"/>
        </div>
        <Container fluid className='h-75 p-0 mt-auto d-flex flex-column'>
            <Stack direction='horizontal' gap={6} className='mb-auto d-flex justify-content-center'>
              {contactIcons}
            </Stack>
            <ContactTitle/>
        </Container>
      </section>
    </div>
  );
}

export default App;