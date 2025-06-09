import React from 'react'
import { useState } from 'react'
import logo from '../image/download.png'
import search from '../image/search.webp'
import educate from '../image/education.webp'
import person from '../image/fancugirl.png'
import java from '../image/java.png'
import python from '../image/python.png'
import csharp from '../image/csharp.png'
import adobe from '../image/adobe-xd.png'
import figma from '../image/figma.png'
import mongodb from '../image/mongodb.png'
import oracal from '../image/oracal.png'

import './Header.css'



function Header() {
    const [courseview, setcourseview] = useState(false)
    const [Programing, setprograming] = useState('')
    // const [fullstack, setfullstack] = useState(false)
    // const [uiux, setuiux] = useState(false)
    // const [database, setdatabase] = useState(false)

    return (
        <>
            <nav className='header'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                <div className="search">
                    <button onClick={() => { setcourseview(!courseview) }}>Course</button>
                    <input type="text" placeholder='Search' />
                </div>

                <div className="pages">
                    <a href="">All Courses</a>
                    <a href="">Student Zone</a>
                    <a href="">Review</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                </div>

            </nav>

            <div className="body">
                <div className="right">
                    <h1>Getin technolgies in virudhunagar</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, libero. Hic voluptas aperiam corrupti aliquam, natus harum aliquid facilis in saepe necessitatibus maxime rem error aut doloribus provident, iste esse </p>
                    <div>
                        <button>Button</button>
                    </div>
                </div>
                <div className="left">
                    <img src={person} alt="" />
                </div>

            </div>
            <div className="Course" style={{ display: courseview ? 'block' : 'none' }}>
                <div className="CourseHead">
                    <h3>Courses </h3><span onClick={() => { setcourseview(false) }}>X</span>
                </div>
                <div className="CourseBody">
                    <div className="CourseName">
                        <ul>
                            <li onClick={() => { setprograming('pro') }}>Programming <span className="arrow">›</span></li>
                            <li onClick={() => { setprograming('fullstack') }}>Fullstack<span className="arrow">›</span></li>
                            <li>Digital Marketing<span className="arrow">›</span></li>
                            <li onClick={() => { setprograming('uiux') }}>UI/UX Desining<span className="arrow">›</span></li>
                            <li onClick={() => { setprograming('database') }}>Data Base Deceloper<span className="arrow">›</span></li>
                        </ul>
                    </div>

                    <div className="CourseVisibleBox" >
                        {Programing === 'pro' && (

                            <div className="programing"  >
                                <div>
                                    <img src={java} alt="" />
                                    <p>java</p>
                                </div>
                                <div><img src={python} alt="" />
                                    <p>python</p></div>
                                <div><img src={csharp} alt="" />
                                    <p>csharp</p></div>

                            </div>
                        )}
                        {Programing === 'fullstack' && (<div className="fullstack" >
                            <div><img src={java} alt="" />
                                <p>java fulstack evelopment course</p></div>
                            <div>  <img src={python} alt="" />
                                <p>python fulstack evelopment course</p></div>

                        </div>
                        )}
                        {Programing === 'uiux' && (<div className="uiux" >
                            <div><img src={adobe} alt="" />
                                <p>adobe x</p></div>
                            <div><img src={figma} alt="" />
                                <p>figma</p></div>

                        </div>)}
                        {Programing === 'database' && (<div className="database" >
                            <div><img src={oracal} alt="" />
                                <p>java data base</p></div>
                            <div> <img src={mongodb} alt="" />
                                <p>python data base</p></div>

                        </div>)}
                    </div>
                </div>
            </div>

        </>

    )
}

export default Header