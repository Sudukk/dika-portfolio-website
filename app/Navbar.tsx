import React from 'react'

interface NavItems{
    label: string,
    page: string
}

const NAV_ITEMS : Array<NavItems> = [
    {
        label: "Home",
        page: "home",
    },
    {
        label: "Content",
        page: "content",
    },
    {
        label: "Projects",
        page: "projects",
    },
]

const Navbar = () => {
  return (
    <header>
        <div>
            
        </div>
    </header>
  )
}

export default Navbar