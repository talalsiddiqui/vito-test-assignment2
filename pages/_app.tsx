import { ConfigProvider, Layout } from "antd";
import { Roboto } from "next/font/google";
import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import "../styles/globals.css";

// import client from "../apolloClient";
import client from "@/utils/apollo";
import HeaderElements from "@/Components/header";

const { Header, Content } = Layout;

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <ApolloProvider client={client}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#00000",
            },
          }}
        >
          <Layout>
            <Header className="header">
              <HeaderElements />
            </Header>
            <Layout>
              <Content>
                <Component {...pageProps} />
              </Content>
            </Layout>
          </Layout>
        </ConfigProvider>
      </ApolloProvider>
    </>
  );
}
