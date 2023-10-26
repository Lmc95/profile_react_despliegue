import React from 'react';

function Footer() {
    return (
        <footer className="footer bg-dark text-white text-center py-4">
            &copy; {new Date().getFullYear()} Perfil de Usuario - Todos los derechos reservados
        </footer>
    );
}

export default Footer;