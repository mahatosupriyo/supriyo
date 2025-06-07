"use client"
import React from "react";
import styles from "./embers.module.scss"
import Embers from "../(creations)/embers/embers";
import NavBar from "@/components/navbar/navbar";

export default function Portfolio() {

    return (
        <div className={styles.wraper}>
            <div className={styles.container}>
                <NavBar />
                <Embers />
            </div>
        </div>

    )
}
