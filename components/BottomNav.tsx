'use client'

import React, {FC} from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PhoneIcon from '@mui/icons-material/Phone'
import PeopleIcon from '@mui/icons-material/People'

const BottomNav: FC = () => {
    const [value, setValue] = React.useState('home')

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue)
    }

    return (
        <nav className="lg:hidden fixed bottom-0 w-full">
            <BottomNavigation
                sx={{
                    background: '#26877F',
                    paddingTop: `.4rem`
                }}
                className="w-full"
                value={value}
                onChange={handleChange}
            >
                <BottomNavigationAction
                    label="Home"
                    value="home"
                    icon={<HomeIcon sx={{color: 'white'}}/>}
                    href="/"
                    sx={{
                        '& .Mui-selected': {
                            color: 'white',
                            textDecoration: 'none',
                        },
                    }}
                />
                <BottomNavigationAction
                    label="Products"
                    value="products"
                    icon={<ShoppingCartIcon sx={{color: 'white'}}/>}
                    href="/products"
                    sx={{
                        '& .Mui-selected': {
                            color: 'white',
                            textDecoration: 'none',
                        },
                    }}
                />
                <BottomNavigationAction
                    label="Contact"
                    value="contact"
                    icon={<PhoneIcon sx={{color: 'white'}}/>}
                    href="/contact"
                    sx={{
                        '& .Mui-selected': {
                            color: 'white',
                            textDecoration: 'none',
                        },
                    }}
                />
                <BottomNavigationAction
                    label="About"
                    value="about"
                    icon={<PeopleIcon sx={{color: 'white'}}/>}
                    href="/about"
                    sx={{
                        '& .Mui-selected': {
                            color: 'white',
                            textDecoration: 'none',
                        },
                    }}
                />
            </BottomNavigation>
        </nav>
    )
}

export default BottomNav
