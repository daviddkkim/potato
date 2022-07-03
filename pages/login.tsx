import { ReactElement } from "react";
import { NextPage } from "next";
import MainLayout from "../components/layout/main";
import { supabase } from "../utils/supabase";
import { Button } from "@pear-ui/core";

const Login: NextPage = () => {
  async function signInWithGithub() {
    const { user, session, error } = await supabase.auth.signIn(
      {
        provider: "github",
      },
      {
        redirectTo: "/home",
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
