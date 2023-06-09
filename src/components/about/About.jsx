import React from 'react'
import "./about.css"
import Info from './Info'
import DP from "../../assets/3d-img.png"
import Resume from "../../assets/resume.pdf"

const About = () => {
  return (
   <section className="about section" id="about">
    <h3 className="section__title">About Me</h3>
    <span className="section__subtitle">My Introduction</span>
      <div className="about__container container grid">
        <img className="about__img" src={DP}/>
        <div className="about__data">
            <Info/>
            <p className="about__description">
                FullStack (Mern Developer), I create web apps with UI/UX interface, I have 2 years of experience in frontend development and a year 
                of experience in full stack development.
            </p>
            <a download="Resume" href={Resume} className="button button--flex">
                Download CV
                <svg width="32px" height="32px" fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 480 480" xmlSpace="preserve">
<g>
	<g>
		<path d="M413.648,74.336L341.664,2.352C340.216,0.896,338.216,0,336,0H104C81.944,0,64,17.944,64,40v344c0,22.056,17.944,40,40,40
			h88v56h16v-56h120c4.416,0,8-3.576,8-8v-40c0-14.88,10.216-27.432,24-30.984V416v64h16v-56c22.056,0,40-17.944,40-40V80
			C416,77.784,415.104,75.784,413.648,74.336z M344,27.312L388.688,72H344V27.312z M400,384c0,13.232-10.768,24-24,24v-72
			c0-4.424-3.584-8-8-8c-26.472,0-48,21.528-48,48v32H104c-13.232,0-24-10.768-24-24V40c0-13.232,10.768-24,24-24h224v64
			c0,4.424,3.584,8,8,8h64V384z" fill='var(--container-color)'/>
	</g>
</g>
<g>
	<g>
		<path d="M224,48H112c-4.416,0-8,3.576-8,8v112c0,4.424,3.584,8,8,8h32h48h32c4.416,0,8-3.576,8-8V56C232,51.576,228.416,48,224,48
			z M184,160h-32v-16c0-8.824,7.176-16,16-16c8.824,0,16,7.176,16,16V160z M160,104c0-4.416,3.592-8,8-8s8,3.584,8,8s-3.592,8-8,8
			S160,108.416,160,104z M216,160h-16v-16c0-10.488-5.136-19.72-12.952-25.56c3.064-4.032,4.952-9,4.952-14.44
			c0-13.232-10.768-24-24-24s-24,10.768-24,24c0,5.44,1.888,10.408,4.952,14.44C141.136,124.28,136,133.512,136,144v16h-16V64h96
			V160z" fill='var(--container-color)'/>
	</g>
</g>
<g>
	<g>
		<rect x="248" y="72" width="40" height="16" fill='var(--container-color)'/>
	</g>
</g>
<g>
	<g>
		<rect x="248" y="104" width="48" height="16"fill='var(--container-color)'/>
	</g>
</g>
<g>
	<g>
		<rect x="312" y="104" width="40" height="16"fill='var(--container-color)'/>
	</g>
</g>
<g>
	<g>
		<rect x="248" y="136" width="104" height="16"fill='var(--container-color)'/>
	</g>
</g>
<g>
	<g>
		<rect x="144" y="200" width="64" height="16"fill='var(--container-color)'/>
	</g>
</g>
<g>
	<g>
		<rect x="224" y="200" width="48" height="16"fill='var(--container-color)'/>
	</g>
</g>
<g>
	<g>
		<rect x="288" y="200" width="80" height="16"fill='var(--container-color)'/>
	</g>
</g>
<g>
	<g>
		<rect x="112" y="232" width="64" height="16"fill='var(--container-color)'/>
	</g>
</g>
<g>
	<g>
		<rect x="192" y="232" width="128" height="16"fill='var(--container-color)'/>
	</g>
</g>
<g>
	<g>
		<rect x="336" y="232" width="32" height="16"fill='var(--container-color)'/>
	</g>
</g>
<g>
	<g>
		<rect x="112" y="264" width="32" height="16"fill='var(--container-color)'/>
	</g>
</g>
<g>
	<g>
		<rect x="160" y="264" width="96" height="16"fill='var(--container-color)'/>
	</g>
</g>
<g>
	<g>
		<rect x="272" y="264" width="96" height="16"fill='var(--container-color)'/>
	</g>
</g>
<g>
	<g>
		<rect x="112" y="296" width="32" height="16"fill='var(--container-color)'/>
	</g>
</g>
<g>
	<g>
		<rect x="160" y="296" width="96" height="16"fill='var(--container-color)'/>
	</g>
</g>
<g>
	<g>
		<rect x="272" y="296" width="96" height="16"fill='var(--container-color)'/>
	</g>
</g>
<g>
	<g>
		<rect x="112" y="328" width="72" height="16"fill='var(--container-color)'/>
	</g>
</g>
<g>
	<g>
		<rect x="200" y="328" width="112" height="16"fill='var(--container-color)'/>
	</g>
</g>
<g>
	<g>
		<rect x="112" y="360" width="32" height="16"fill='var(--container-color)'/>
	</g>
</g>
<g>
	<g>
		<rect x="160" y="360" width="136" height="16"fill='var(--container-color)'/>
	</g>
</g>
                </svg>
            </a>
        </div>
      </div>
   </section>
  )
}

export default About