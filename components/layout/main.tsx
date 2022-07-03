import { styled } from "@pear-ui/core";
import Head from "next/head";

type MainProps = {
  children: JSX.Element;
};

const MainContainer = styled("main", {
  overflow: "scroll",
  display: "flex",
  height: "100vh",
  backgroundColor: "$background-secondary-neutral",
  columnGap: "$3",
  padding: "0 $3",
});

const Nav = styled("nav", {
  boxSizing: "border-box",
  width: "240px",
  margin: "$3 0",
  padding: "$3",
});

const ContentContainer = styled("div", {
  backgroundColor: "$background-primary-neutral",
  display: "flex",
  width: "100%",
  margin: "$3 0",
  boxShadow: "1px 1px 10px $colors$shadow-default",
  borderRadius: "$2",

});
export default function MainLayout({ children }: MainProps) {
  return (
    <div>
      <Head>
        <title>Potato</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <Nav> Potato</Nav>
        <ContentContainer>{children}</ContentContainer>
      </MainContainer>
    </div>
  );
}