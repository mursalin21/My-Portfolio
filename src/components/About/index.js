import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animation-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a very ambitious and knowledgeable front-end web developer who
            is looking for a role at a well-reputed company which will push me
            to be the best; and, give me the opportunity to work with the latest
            and greatest technologies to work on challenging projects.{' '}
          </p>
          <p>
            I am confident, curious about things that I have yet to learn.
            Moreover, I am always eager to learn new things!
          </p>
          <p>
            If I am asked about what sets me apart from others, then it would be
            my ability to really connect with people to a deep level. Moreover,
            I also stick to a challenge endlessly until I am able to solve it.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cube-spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} />
            </div>

            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} />
            </div>

            <div className="face3">
              <FontAwesomeIcon icon={faCss3} />
            </div>

            <div className="face5">
              <FontAwesomeIcon icon={faReact} />
            </div>

            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} />
            </div>

            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
