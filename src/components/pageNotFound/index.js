import Link from "next/link";
import Image from "next/image";
import { StylePageNotFound } from "./styles";
import { Container } from "../../styles/global";
import ImageNotFount from "../../assets/img-404.png"

export function ComponentPageNotFound() {
    return (
        <StylePageNotFound>
            <Container>
                <h1>Whoops, essa página sumiu.</h1>
                <p>OHHH, parece que não conseguimos encontrar a página que você está procurando. Tente voltar à página anterior ou consulte nossa Central de Ajuda para obter mais informações.</p>
                <Link href="/" title="Voltar para home">
                    Voltar para home
                </Link>
                <Image
                src={ImageNotFount}
                alt="Imagem com vários quadrados que formam o número 404"
                title="404"
                />
            </Container>
        </StylePageNotFound>
    )
}