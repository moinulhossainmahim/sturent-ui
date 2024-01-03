import { navItems } from '@/constants'
import Link from 'next/link'

interface NavItemsProps {
  isMobile?: boolean;
}

const NavItems = ({ isMobile } : NavItemsProps) => {
  return (
    <ul className={`flex gap-8 ${isMobile ? 'flex-col gap-5' : ''}`}>
      {navItems.map((navItem, index) => (
        <Link href='/' key={index}>
          <li className="hover:text-primary transition-all delay-75">
            {navItem}
          </li>
        </Link>
      ))}
    </ul>
  )
}

export default NavItems
