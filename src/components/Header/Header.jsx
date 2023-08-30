
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
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png" alt="" className="header__logo" />
            <form className="header__form" onSubmit={obtenerPageNumber}>
                <input type="number" name="number" id="" placeholder={`Page number ${pageNumber}`} className="header__input"/>
                <input type="submit" value="Search" className="btn__buscar"/>
            </form>
        </header>
    )
}

export default Header