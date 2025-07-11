import Image from "next/image";
import { Container, Form, FormButtons, FormContainer, FormHeader, ImageContainer } from "./styles";

import coverLoginImagem from "@/assets/coverLogin.png";
import githubIconImage from "@/assets/github-icon.png";
import googleIconImage from "@/assets/google-icon.png";
import rocketLanchImage from "@/assets/RocketLaunch.png";
import { Button } from "@/components/Button";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  function handleNavigateToHome() {
    router.push("/");
  }

  return (
    <Container>
      <ImageContainer>
        <Image src={coverLoginImagem} alt="" />
      </ImageContainer>

      <FormContainer>
        <Form>
          <FormHeader>
            <h1>Boas Vindas!</h1>
            <span>Faça seu Login ou acesso como visitante</span>
          </FormHeader>

          <FormButtons>
            <Button>
              <Image src={googleIconImage} alt="" width={32} height={32} />
              Entrar com Google
            </Button>

            <Button>
              <Image src={githubIconImage} alt="" width={32} height={32} />
              Entrar com Github
            </Button>

            <Button onClick={handleNavigateToHome}>
              <Image src={rocketLanchImage} alt="" width={32} height={32} />
              Acessar como visitante
            </Button>
          </FormButtons>
        </Form>
      </FormContainer>
    </Container>
  );
}
