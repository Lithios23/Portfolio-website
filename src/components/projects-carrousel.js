import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp , faChevronDown , faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Style from '../sass/project-carrousel.module.scss'
import Stack from 'react-bootstrap/Stack'
import DiamondIcon from './diamond-icon'

let scrollLevel = 0;

function ProjectsInfo(projects) {
  
  const projectsDivs = projects.map(({title,description,technologies}, pos) => {

    const projectTechnologies = technologies.map((technology, pos) => <span key={pos} className={Style.projectTechnologies}>{technology}</span>)

    return (
      <Container fluid className={`p-0 align-items-center d-flex m-0 h-100 h-sm-50 ${Style.projectInfo}`} key={pos}>
        <Container fluid className='p-0 d-flex flex-column justify-content-center'>
          <Row style={{height:'15%'}} className='m-0'>
            <Col xs='auto' className='p-0 h-100'>
              <Image src='./title-ends/title-end-left.png' className='h-100'/>
            </Col>
            <Col className='p-0 bg-secondary d-flex align-items-center justify-content-center'>  
              <h3 align='center' className={`m-0 text-break lh-1 ${Style.projectTitle}`}>{title}</h3>
            </Col>
            <Col xs='auto' className='p-0 h-100 d-block d-sm-none'>
              <Image src='./title-ends/title-end-right.png' className='h-100'/>
            </Col>
          </Row>
          <div className='d-flex py-2' style={{maxHeight:'75%'}}>
            <p className={`bg-white p-2 bg-opacity-25 my-auto text-white lh-sm m-0 w-100 ${Style.projectDescription}`}>{description}</p>
          </div>
          <Stack direction='horizontal' gap={3} className='justify-content-center w-100' style={{height:'10%'}}>
            {projectTechnologies}
          </Stack>
        </Container>
      </Container>
    )
  })
  
  return (
    <Container fluid className='h-100 p-0 d-flex flex-column justify-content-around'>
      {projectsDivs}      
    </Container>
  )
}

export default function ProjectsCarrousel({projects}) {
  
  const [visibleProjects, setVisibleProjects] = useState([projects[scrollLevel], projects[scrollLevel+1]]);

  const proCont = React.createRef();
  let projectsContainer;

  useEffect(() => {
    projectsContainer = proCont.current;
    projectsContainer.addEventListener("wheel", e => {
      e.preventDefault();

      if (e.deltaY > 0) {
        ScrollDown();
      }
      else {
        ScrollUp();
      }
    });
  })

  const ScrollUp = () => {
    if (scrollLevel > 0){
      scrollLevel--;
      projectsContainer.scrollBy(0, -200);
      setVisibleProjects([projects[scrollLevel], projects[scrollLevel+1]]);
    }
  }
  
  const ScrollDown = () => {
    
    if (scrollLevel < projects.length-2){
      scrollLevel++;
      projectsContainer.scrollBy(0, 200);
      setVisibleProjects([projects[scrollLevel], projects[scrollLevel+1]]);
    }
  }
  
  const projectsCards = projects.map((project, pos) => {
    return (
      <div className='w-100 d-flex align-items-center h-100 h-sm-50' key={pos}>
        <div className='w-100 border-0 rounded d-flex justify-content-center position-relative overflow-hidden h-100 h-sm-90'>
          <img src={project.img}/>
          <Stack direction='horizontal' gap={5} className='justify-content-center w-100 h-100 opacity-0 position-absolute start-0'>
            <DiamondIcon animated icon={<FontAwesomeIcon icon={faGithub} size="3x" transform={{rotate: -45}}/>} url={project.repository} size='80px'/>
            {project.hasOwnProperty('url') ? <DiamondIcon animated icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="3x" transform={{rotate: -45}}/>} url={project.url} size='80px'/> : null}
          </Stack> 
        </div>
      </div>
    )
  })
  
  return (
    <Container fluid className="py-3 py-md-0 h-100">
      <Row className='w-100 m-0 h-100 flex-column'>
        <Col sm={{span:6,order:1}} className={`col-12 px-0 h-sm-100 h-50 order-2 ${Style.projectInfoContainer}`}>
          {ProjectsInfo(visibleProjects)}
        </Col>
        <Col sm={{span:6,order:2}} className='col-12 p-0 h-sm-100 h-50 order-1 d-flex flex-column'>
          <button onClick={()=>ScrollUp()} className='border-0 bg-primary text-white mx-auto'>
            {<FontAwesomeIcon icon={faChevronUp} size="2x"/>}
          </button>
          <div id={Style.container} className='w-100 flex-grow-1' ref={proCont}>
            {projectsCards}
          </div>
          <button onClick={()=>ScrollDown()} className='border-0 bg-primary text-white mx-auto'>
            {<FontAwesomeIcon icon={faChevronDown} size="2x"/>}
          </button>
        </Col>
      </Row> 
    </Container>
  )
}
