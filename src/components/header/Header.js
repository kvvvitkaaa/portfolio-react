import "./style.css";

const Header = () => {
    return (
        <header className="header">
        <div className="header-container">
          <h1 className="header-title">
            <strong>Hi, my name is <em>Alyona</em></strong><br />
            a frontend developer
          </h1>
          <div className="header-text">
            <p>with passion for learning and creating</p>
          </div>
          <a className="btn" href="https://1drv.ms/w/s!ApBooEO14stPishpsBLNIyRwFA7SFQ?e=M1iq8t" target='_blank' rel="noreferrer">Download CV</a>
        </div>
      </header>
    );
}
 
export default Header;