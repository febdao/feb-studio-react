import { Link } from 'react-router'
import { CalendarDaysIcon, HomeIcon, CurrencyDollarIcon } from '@heroicons/react/20/solid'
import CTA from './CTA'

function Header() {
  return (
    <>
      <div className='header bg-base-100 shadow-sm'>
        <div className='lg:container mx-auto'>
          <div className="navbar">
            <div className="flex-1">
              <Link to="/">
                <img className="dock__logo py-2" src="/images/logo.png" alt="logo" />
              </Link>
            </div>
            <div className="flex flext-row items-center">
              <ul className="menu menu-horizontal px-1">
                <li><Link to="/"><HomeIcon className="h-5 w-5" /> Home</Link></li>
                <li><Link to="/pricing"><CurrencyDollarIcon className="h-5 w-5" /> Pricing</Link></li>
              </ul>
              <Link to="/booking" className="btn btn-success"> <CalendarDaysIcon className="h-5 w-5" /> Book now</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header