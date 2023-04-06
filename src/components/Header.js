import headerImage from "../images/Mesto.svg"

function Header() {
  return (
    <header className="header">
      <img src={headerImage} className="header__image" alt="Логотип Место" />
    </header>
  )
}

export default Header