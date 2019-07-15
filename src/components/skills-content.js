import React from 'react'

//Components
import Skill from './skill'

//Styling
import '../css/skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJsSquare, faReact, faNodeJs, faBootstrap, faGit } from '@fortawesome/free-brands-svg-icons'
import { faStore, faDatabase, faGem, faRetweet, faDollarSign} from '@fortawesome/free-solid-svg-icons'

const SkillsContent = (props) => (
  <div className="skills-content">
  <Skill faIcon={<FontAwesomeIcon icon={faHtml5}/>} skill={"HTML"} describe={"The language that defines the structure of the web."}/>
  <Skill faIcon={<FontAwesomeIcon icon={faJsSquare}/>} skill={"Javascript"} describe={"Allows us to govern how different pages elements interact."}/>
  <Skill faIcon={<FontAwesomeIcon icon={faReact}/>} skill={"React"} describe={"Used to build amazing user interfaces."}/>
  <Skill faIcon={<FontAwesomeIcon icon={faGem}/>} skill={"Rails"} describe={"Used to build amazing end to end websites."}/>
  <Skill faIcon={<FontAwesomeIcon icon={faStore}/>} skill={"Redux"} describe={"Helps us to maintain the state on the client side."}/>
  <Skill faIcon={<FontAwesomeIcon icon={faGem}/>} skill={"Ruby"} describe={"A dynamic high level open source general purpose language"}/>
  <Skill faIcon={<FontAwesomeIcon icon={faNodeJs}/>} skill={"Node.js"} describe={"Employs push technology over websockets for real time web applications."}/>
  <Skill faIcon={<FontAwesomeIcon icon={faDatabase}/>} skill={"PostgreSQL"} describe={"World's most advanced open source database."}/>
  <Skill faIcon={<FontAwesomeIcon icon={faDatabase}/>} skill={"SQLite"} describe={"A relational database management system."}/>
  <Skill faIcon={<FontAwesomeIcon icon={faRetweet}/>} skill={"AJAX"} describe={"Used to create better, faster, and more interactive web applications."}/>
  <Skill faIcon={<FontAwesomeIcon icon={faDollarSign}/>} skill={"jQuery"} describe={"Helps with adding javascript to web sites."}/>
  <Skill faIcon={<FontAwesomeIcon icon={faCss3}/>} skill={"CSS"} describe={"Governs how HTML elements are displayed."}/>
  <Skill faIcon={<FontAwesomeIcon icon={faGit}/>} skill={"Git"} describe={"The most popular version control system today."}/>
  </div>
);

export default SkillsContent
