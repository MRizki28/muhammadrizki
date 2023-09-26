
import NavBar from '../components/Navbar'
import HeroBase from '../components/Hero'
import AboutBase from '../components/About'
import PageUpButton from '../components/componentslist/Floating'
import TechBase from '../components/Tech'
import Education from '../components/Education'
import Project from '../components/Project'


export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <HeroBase></HeroBase>
      <AboutBase></AboutBase>
      <PageUpButton></PageUpButton>
      <TechBase></TechBase>
      <Education></Education>
      <Project></Project>
    </>

  )
}
