
import "./Index.scss"
import { Link } from 'react-router-dom'

function Nav() {
  return (

    <>
    <div className="nav">
    <div className="basliq">
    <h2>StartBootStrap</h2>
      </div>
      <div className="link">

    <Link  to={"/"}>Home</Link>
    <Link  to={"about"}>About</Link>
    <Link  to={"contact"}>Contact</Link>
    <Link  to={"samplehost"}>Samplehost</Link>
      </div>
    </div>
    
    
    
    </>
  )
}

export default Nav