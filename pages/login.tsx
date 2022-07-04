import { ReactElement } from "react";
import { NextPage } from "next";
import MainLayout from "../components/layout/main";
import { supabase } from "../utils/supabase";
import { Button } from "@pear-ui/core";
import { useRouter } from "next/router";
const Login: NextPage = () => {
  const router = useRouter();
  async function signInWithGithub() {
    const { user, session, error } = await supabase.auth.signIn(
      {
        provider: "github",
      },
      {
        redirectTo: "/",
      }
    );
  }

  return (
    <div>
      <Button
        onClick={() => {
          signInWithGithub();
        }}
      >
        {" "}
        Github
      </Button>
    </div>
  );
};

export default Login;
