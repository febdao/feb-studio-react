import { Link } from 'react-router'
import { CalendarDaysIcon, HomeIcon } from '@heroicons/react/20/solid'

function Header() {
  return (
    <>
      <div className='header bg-base-100 shadow-sm print:hidden'>
        <div className='lg:container mx-auto'>
          <div className="navbar">
            <div className="flex-1">
              <Link to="/">
                <img className="py-2 w-16" src="/images/logo.png" alt="logo" />
              </Link>
            </div>
            <div className="flex items-center">
              <ul className="menu menu-horizontal px-1">
                <li><Link to="/"><HomeIcon className="h-5 w-5" /><span className='hidden sm:inline-block'> Home</span></Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/policy">Policy</Link></li>
                {/* <li><Link to="/contract">Contract</Link></li> */}
              </ul>
              <Link to="/booking" className="btn btn-success"><CalendarDaysIcon className="h-5 w-5 hidden sm:inline-block" /> Book now</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
