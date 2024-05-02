import { GitHub } from '@mui/icons-material';
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', textAlign: 'center' }}>
            <Container>
                <Row>
                    <Col md={4}>
                        <h4>Entre em contato</h4>
                        <p>Telefone: <a href="https://api.whatsapp.com/send/?phone=5547996570396&text&type=phone_number&app_absent=0" style={{ color: '#007bff' }}> (47) 99657-0396</a></p>
                        <p>Email: <a href="mailto:matheusmviana@outlook.com.br" style={{ color: '#007bff' }}>joaophilippe50@gmail.com</a></p>
                        <p>Endereço: www.bytestyle.com, 3000 - localhost</p>
                    </Col>
                    <Col md={4}>
                        <h4>Redes sociais</h4>
                        <br />
                        <a href="https://github.com/Joao-Philippe-Dev" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>
                            <GitHub /> Github
                        </a>
                    </Col>
                    <Col md={4}>
                        <h4>Mapa do site</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li><a href="/inicio" style={{ color: '#007bff' }}>Inicio</a></li>
                            <li><a href="/produtos" style={{ color: '#007bff' }}>Produtos</a></li>
                            <li><a href="/contato" style={{ color: '#007bff' }}>Contato</a></li>
                        </ul>
                    </Col>
                </Row>
                <div className="text-center mt-3">
                    <p>&copy; 2024 ByteStyle. Todos os direitos reservados.</p>
                    <a href="##" style={{ color: '#007bff' }}></a>
                </div>
            </Container>
        </footer>
    );
}
