"use client";
import React, { useEffect, useState } from "react";
import "./dasboard-page-style.css";
import CoinListTable from "./CoinListTable";

import { initializeApp } from "firebase/app";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";

function DashboardPage() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    initializeFirebase();
  }, []);

  async function initializeFirebase() {
    const firebaseConfig = {
      apiKey: "AIzaSyCGqlhySMeMa9HgUhPeFfJdSu2C85vTviM",
      authDomain: "koindx-demo.firebaseapp.com",
      projectId: "koindx-demo",
      storageBucket: "koindx-demo.appspot.com",
      messagingSenderId: "635198888291",
      appId: "1:635198888291:web:8c31fb12c91c8d3f3cdb56",
      measurementId: "G-L2PQ4MM607",
    };
    const app = initializeApp(firebaseConfig);
    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);
    const coinsListRef = collection(db, "coinsList");

    // Set up real-time listener
    const unsubscribe = onSnapshot(coinsListRef, (querySnapshot) => {
      const dataArray = [];
      querySnapshot.forEach((doc) => {
        dataArray.push({ id: doc.id, ...doc.data() }); // Collect each document's data
      });
      console.log(dataArray);
      setdata(dataArray[0].data); // Update state with the latest data
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }

  return (
    <div className="dashboard-container">
      {/* Heading */}
      <h4>Catch Your Next Trading Opportunity</h4>

      {/* Table */}
      <CoinListTable data={data}></CoinListTable>
    </div>
  );
}

export default DashboardPage;
