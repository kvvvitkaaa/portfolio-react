const Contacts = () => {
    return (
        <main className="section">
        <div className="container">
            <h1 className="title-1">
                Contacts
            </h1>
            <ul className="list">
                <li className="list-item">
                    <h3 className="title-2">Location</h3>
                    <p>Gdansk, Poland</p>
                </li>
                <li className="list-item">
                    <h3 className="title-2">Telegram/WhatsApp</h3>
                    <a href="tel:+48517302891">+48-517-302-891</a>
                </li>
                <li className="list-item">
                    <h3 className="title-2">Email</h3>
                    <a href="mailto:hage101111@gmail.com">hage101111@gmail.com</a>
                </li>
            </ul>
        </div>
    </main>
    );
}
 
export default Contacts;