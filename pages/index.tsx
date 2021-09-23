import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import type { NextPage } from "next";
import axios from "axios";
import styles from "../styles/Home.module.css";
import { Interval } from "../types/intervals";
import Client from "../components/Client";
import moment from "moment";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import SidebarCard from "../components/SidebarCard";
import { hotjar } from "react-hotjar";

const Home: NextPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState<number>(0);
  const [userIntervals, setUserIntervals] = useState<
    (Interval | undefined)[][]
  >([]);

  useEffect(() => {
    (async () => {
      const result = await axios.get("api/intervals");
      setUserIntervals(result.data);

      hotjar.initialize(2617961, 6);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Eight Sleep</title>
        <meta
          name="description"
          content="The #1 Smart Mattress, designed to help you fall asleep faster and stay asleep. After only 30 days, people sleeping on the Pod Pro Pro improve their rest significantly and wake up more refreshed. Try it at home for 100 nights, risk-free."
        />
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={undefined}
        />
        {/* eslint-disable-next-line */}
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.header}>
            <IoIosMenu
              color="#FFF"
              style={{ fontSize: 32 }}
              className={styles.menuIcon}
              onClick={() => setIsSidebarOpen(true)}
            />
            <div className={styles.logoContainer}>
              <a href="https://eightsleep.com/">
                <Image
                  src="/eight-logo.svg"
                  alt="Eight Sleep"
                  width={72}
                  height={64}
                />
              </a>
            </div>
            <div className={styles.tabs}>
              {userIntervals[selectedDate] &&
                userIntervals[selectedDate]
                  // @ts-ignore
                  .sort((a, b) => new Date(a?.ts) - new Date(b?.ts))
                  .map((interval, index) => (
                    <div
                      key={index}
                      className={styles.tab}
                      onClick={() => setSelectedDate(index)}
                      style={
                        selectedDate === index
                          ? { borderBottom: "2px solid #ffffff" }
                          : {}
                      }
                    >
                      <h3 className={styles.tabPrimary}>
                        {interval && moment(interval.ts).format("DD")}
                      </h3>
                      <p className={styles.tabSecondary}>
                        {interval && moment(interval.ts).format("MMM")}
                      </p>
                    </div>
                  ))}
            </div>
          </div>

          <div className={styles.body}>
            <div className={styles.sidebar}>
              {userIntervals.map((u, i) => (
                <SidebarCard
                  key={i}
                  index={i}
                  selectedUser={selectedUser}
                  onClick={() => setSelectedUser(i)}
                />
              ))}
            </div>

            <div className={styles.content}>
              {userIntervals[selectedUser] && (
                <Client
                  interval={userIntervals[selectedUser][selectedDate]}
                  selectedDate={selectedDate}
                  selectedUser={selectedUser}
                />
              )}
            </div>
          </div>

          {userIntervals.length > 0 && (
            <footer className={styles.footer}>
              <a href="https://eightsleep.com/">
                <Image
                  src="/eight-logo.svg"
                  alt="Eight Sleep"
                  width={72}
                  height={64}
                />
              </a>
            </footer>
          )}
        </main>

        <div
          className={styles.sideMenu}
          style={{
            transform: isSidebarOpen ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          <IoIosClose
            size={32}
            color="#fff"
            className={styles.closeIcon}
            onClick={() => setIsSidebarOpen(false)}
          />
          {userIntervals.map((u, i) => (
            <SidebarCard
              key={i}
              index={i}
              selectedUser={selectedUser}
              onClick={() => {
                setSelectedUser(i);
                setIsSidebarOpen(false);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
