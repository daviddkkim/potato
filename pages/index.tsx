import { ReactElement, useEffect, useState } from "react";
import MainLayout from "../components/layout/main";
import { supabase } from "../utils/supabase";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    try {
      setLoading(true);
      const user = supabase.auth.user();
      if (user) {
        console.log(user.user_metadata);
        const data = user.user_metadata;
        if (data) {
          setUsername(data.full_name);
          setAvatarUrl(data.avatar_url);
        }
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }
  return <div>{username}</div>;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
