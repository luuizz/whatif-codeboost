import { Container } from "@/styles/global";
import { FooterStyle } from "./styles";
import LogoCodeboost from '@/assets/logo-codeboost.svg'
import Image from "next/image";

export function Footer() {

    const currentYear = new Date().getFullYear();
    return (
        <FooterStyle>
            <Container>
                <div className="left">
                    <span>©{currentYear} CodeBoost</span>
                    <p>O curso Codeboost foi desenvolvido por William Moreira. As vagas são distribuídas por turmas de forma sazonal. Caso perca alguma oportunidade é só aguardar a próxima turma que normalmente acontece dentro do período de 3 a 4 meses.</p>
                </div>
                <div className="left">
                    <Image
                    src={LogoCodeboost}
                    alt="Logo do Codeboost"
                    title="Codeboost"
                    />
                </div>
            </Container>
        </FooterStyle>
    )
}