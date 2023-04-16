import { Link } from 'react-router-dom'

/**
 * 
 * @returns HTML footer Node 
 */
export const Footer = () => {
  return (
    <footer>
        <p>Copyright &copy; {new Date().getFullYear()}</p>

        {/* Use Link to prevent page reload during routing on the app */}
        <Link to='about'>About</Link>
        
 </footer>
  )
}
