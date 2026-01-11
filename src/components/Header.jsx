import { Link } from 'react-router'
import { CalendarDaysIcon, HomeIcon, CurrencyDollarIcon } from '@heroicons/react/20/solid'
import CTA from './CTA'

function Header() {
  return (
    <>
      <div className='header bg-base-100 shadow-sm'>
        <div className='container mx-auto'>
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  <li><Link className='p-2' to="/"><HomeIcon className="h-5 w-5" /> Home</Link></li>
                  <li><Link className='p-2' to="/pricing"><CurrencyDollarIcon className="h-5 w-5" /> Pricing</Link></li>
                </ul>
              </div>
              <Link className="hidden lg:block" to="/">
                <img className="dock__logo py-2" src="/images/logo.png" alt="logo" />
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li><Link to="/"><HomeIcon className="h-5 w-5" /> Home</Link></li>
                <li><Link to="/pricing"><CurrencyDollarIcon className="h-5 w-5" /> Pricing</Link></li>
              </ul>
            </div>
            <div className="navbar-center flex lg:hidden">
              <Link to="/">
                <img className="dock__logo py-2" src="/images/logo.png" alt="logo" />
              </Link>
            </div>
            <div className="navbar-end">
              <Link to="/booking" className="btn btn-success"> <CalendarDaysIcon className="h-5 w-5" /> Book now</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header