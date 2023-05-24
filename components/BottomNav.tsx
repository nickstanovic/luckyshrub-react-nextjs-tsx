'use client'

import React, { FC, useState, useEffect } from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PhoneIcon from '@mui/icons-material/Phone'
import PeopleIcon from '@mui/icons-material/People'

const BottomNav: FC = () => {
    const [pathname, setPathname] = useState('/')

    useEffect(() => {
        setPathname(window.location.pathname)
    }, [])

    return (
        <nav className="lg:hidden fixed bottom-0 w-full">
            <BottomNavigation
                sx={{
                    background: '#26877F',
                    paddingTop: `.4rem`
                }}
                className="w-full"
                value={pathname}
            >
                <BottomNavigationAction
                    label="Home"
                    value="/"
                    icon={<HomeIcon sx={{ color: 'white' }} />}
                    href="/"
                    className={pathname === '/' ? 'active' : ''}
                />
                <BottomNavigationAction
                    label="Products"
                    value="/products"
                    icon={<ShoppingCartIcon sx={{ color: 'white' }} />}
                    href="/products"
                    className={pathname === '/products' ? 'active' : ''}
                />
                <BottomNavigationAction
                    label="Contact"
                    value="/contact"
                    icon={<PhoneIcon sx={{ color: 'white' }} />}
                    href="/contact"
                    className={pathname === '/contact' ? 'active' : ''}
                />
                <BottomNavigationAction
                    label="About"
                    value="/about"
                    icon={<PeopleIcon sx={{ color: 'white' }} />}
                    href="/about"
                    className={pathname === '/about' ? 'active' : ''}
                />
            </BottomNavigation>
            <style>{`
        .active .MuiBottomNavigationAction-label {
          color: white;
        }
      `}</style>
        </nav>
    )
}

export default BottomNav
