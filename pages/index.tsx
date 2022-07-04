import { Button } from "@pear-ui/core";
import { User } from "@supabase/supabase-js";
import { GetServerSideProps } from "next";
import { ReactElement, useEffect, useState } from "react";
import MainLayout from "../components/layout/main";
import { supabase } from "../utils/supabase";
import { useRouter } from "next/router";

interface IndexProps {
  user: User;
}

const Home = ({ user }: IndexProps) => {
  const { user_name, avatar_url } = user.user_metadata;
  const [username, setUsername] = useState(user_name);
  const [avatarUrl, setAvatarUrl] = useState(avatar_url);
  const router = useRouter();
  const handleSignout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) router.push("/login");
  };

  return (
    <div>
      {username}
      <Button
        onClick={() => {
          handleSignout();
        }}
      >
        Sign out{" "}
      </Button>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = await supabase.auth.api.getUserByCookie(context.req);
  console.log(user);
  if (!user) {
    // If no user, redirect to index.
    return { props: {}, redirect: { destination: "/login", permanent: false } };
  }

  // If there is a user, return it.
  return { props: { user } };
};
