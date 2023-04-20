import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "@/Components/banner";
import { useQuery } from "@apollo/client";
import { GET_CHECK_INS } from "@/utils/graphql/queries";
import { Col, Row } from "antd";
import GridItem from "@/Components/gridItem";
import { CheckInData } from "@/types/types";

export default function Home() {
  const { loading, error, data } = useQuery(GET_CHECK_INS);

  return (
    <>
      <Head>
        <title>Test Assignment 2</title>
        <meta name="description" content="Test Assignment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner />

        <Row
          gutter={[16, 16]}
          style={{
            backgroundColor: "#F0F0F0",
            paddingLeft: "5rem",
            paddingRight: "5rem",
            paddingTop: "2rem",
            paddingBottom: "2rem",
          }}
        >
          {loading == false &&
            data?.check_in.map((checkin: CheckInData, i: number) => {
              return (
                <Col span={8} key={i}>
                  <GridItem data={checkin} />
                </Col>
              );
            })}
        </Row>
      </main>
    </>
  );
}
