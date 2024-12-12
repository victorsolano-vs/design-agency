
function NavBar() {

    const navLinks = [
        {
            name: 'Home',
            link: '/'
        },{
            name: 'About',
            link: '/'
        },{
            name: 'Projects',
            link: '/'
        },{
            name: 'Contact Us',
            link: '/'
        }
    ]

  return (
    <>
        <nav className="siteNav">
            <div className="logo">
                <a href="">Vixion Design</a>
            </div>
            <ul className="navLinksContainer">
                {navLinks.map( (link, index) => (
                    <li key={index}>
                        <a href={link.link}>{link.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </>
  )
}

export default NavBar