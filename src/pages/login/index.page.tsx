import Image from "next/image";
import { Container, Form, FormButtons, FormContainer, FormHeader, ImageContainer } from "./styles";

import coverLoginImagem from "@/assets/coverLogin.png";
import githubIconImage from "@/assets/github-icon.png";
import googleIconImage from "@/assets/google-icon.png";
import rocketLanchImage from "@/assets/RocketLaunch.png";
import { Button } from "@/components/Button";
import { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { buildNextAuthOptions } from "../api/auth/[...nextauth].api";

export default function Login() {
  const router = useRouter();
  const session = useSession();

  function handleNavigateToHome() {
    router.push("/");
  }

  async function handleLogin(provider: "google" | "github") {
    await signIn(provider, {
      callbackUrl: "/",
    });
  }

  useEffect(() => {
    if (session.status === "authenticated") {
      handleNavigateToHome();
    }
  }, []);

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
            <Button onClick={() => handleLogin("google")}>
              <Image src={googleIconImage} alt="" width={32} height={32} />
              Entrar com Google
            </Button>

            <Button onClick={() => handleLogin("github")}>
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

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  return {
    props: {
      session: await getServerSession(req, res, buildNextAuthOptions(req, res)),
    },
  };
};
