import React from 'react'
import Sectionhead from './SectionHead'
import {FaCrown} from 'react-icons/fa'
import {programs} from '../data'
import Card from './Card'
import "../components/cardy.css"
import {Link} from "react-router-dom"
import {AiFillCaretRight} from 'react-icons/ai'
import {BsCurrencyRupee} from "react-icons/bs"

const Cardw = () => {
  return (
  <section className="programs">
    <div className="container programs_container">
       <Sectionhead icon={<FaCrown />} title = "Projects" />
    
    <div className='program_wrapper'>
        {
            programs.map(({id,image,title,info,path,price}) => {
                return (
          <Card className="programs_program" key={id}>
            <img className='imgy' src = {image} />
            <h4>{title}</h4>
            <small>{info}</small>
          <Link to={path} className='btn sm'><BsCurrencyRupee/>{price}</Link>

        </Card>
                )  
            })
        }
        </div>
        </div>
   </section>

  )
}

export default Cardw
