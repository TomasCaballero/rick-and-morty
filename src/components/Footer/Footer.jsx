
const Footer = () => {
    return (
        <div className="layout__footer">
            <div className="footer__top">
                <div className="footer__left">
                    <a href="https://www.hbomax.com/ar/es" target="_blank" rel="noopener noreferrer">
                        <img src="https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png" alt="" className="footer__left-img" />
                    </a>
                    <div className="left__content">
                        <h4>Watch the series!</h4>
                        <p>All 6 seasons of Rick and Morty are available on HBO Max.</p>
                    </div>
                </div>
                <div className="footer__right">
                    <img src="https://www.pngall.com/wp-content/uploads/4/Rick-And-Morty-PNG-Free-Download.png" alt="" className="footer__img" />
                    <div className="footer__content">
                        <div className="footer__contact">
                            <h4 className="contact__title">Contact</h4>
                            <ul className="contact__list">
                                <li><a href="https://github.com/TomasCaballero" target="_blank" rel="noopener noreferrer"><box-icon name='github' type='logo' color='#ffffff' ></box-icon><p>TomasCaballero</p></a></li>
                                <li><a href="https://www.linkedin.com/in/tomás-bautista-caballero/" target="_blank" rel="noopener noreferrer"><box-icon type='logo' name='linkedin' color='#ffffff' ></box-icon><p>Tomás Bautista Caballero</p></a></li>
                                <li><a href="https://www.linkedin.com/in/tomás-bautista-caballero/" target="_blank" rel="noopener noreferrer"><box-icon name='world' color='#ffffff' ></box-icon><p>Tomás Bautista Caballero</p></a></li>
                                <li><a href="https://www.instagram.com/tomicaballero/" target="_blank" rel="noopener noreferrer"><box-icon name='instagram' type='logo' color='#ffffff'></box-icon><p>TomiCaballero</p></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <p>2023 &copy; <a href="https://tomas-caballero.netlify.app" target="_blank" rel="noopener noreferrer">Tomás Bautista Caballero</a></p>
            </div>
        </div>
    )
}

export default Footer