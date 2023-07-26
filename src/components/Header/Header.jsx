
const Header = ({pageNumber, setPageNumber}) => {

    const obtenerPageNumber = (e) => {
        e.preventDefault();
        const number = parseInt(e.target.number.value);
        console.log(number)
        if(number >=1 && number <= 42){
            setPageNumber(number);
        }else{
            alert(`No existen personajes en página ${number}`);
        }
    }

    return (
        <header className="layout__header">
            <img src="src/assets/img/Rick_and_Morty.png" alt="" className="header__logo" />
            {/* <h1 className="header__title"><samp className="title__rick">R</samp>ick&<samp className="title__morty">M</samp>orty</h1> */}
            <form className="header__form" onSubmit={obtenerPageNumber}>
                <input type="number" name="number" id="" placeholder={`Page number ${pageNumber}`} className="header__input"/>
                <input type="submit" value="Search" className="btn__buscar"/>
            </form>
        </header>
    )
}

export default Header