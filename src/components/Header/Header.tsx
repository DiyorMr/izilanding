import './Header.scss'
const Header = () => {

    return (
        <>
            <header className="header">
                <div className="header_container">
                    <a className="header_container_logo" href="/">
                        <img className="logo" src="/images/logo.svg" alt="Logo" />
                    </a>
                    <nav>
                        <ul className="header_container_list">
                            <li className="header_container_list_item">
                                <a href="#features">Features</a>
                            </li>
                            <li className="header_container_list_item_link">
                                <a href="#pricing">How it works</a>
                            </li>
                            <li className="header_container_list_item_link">
                                <a href="#support">Use Cases</a>
                            </li>
                            <li className="header_container_list_item_link">
                                <a href="#support">Pricing</a>
                            </li>
                            <li className="header_container_list_item_link">
                                <a href="#support">Faq</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header_container_actions">
                        <a href="#" className="login">Log In</a>
                        <a href="#" className="get-started">Get Started</a>
                    </div>
                </div>
            </header>
            <div className='line'></div>
        </>
    )
}

export default Header
