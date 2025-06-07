"use client"
import React from "react";
import styles from "./eduburner.module.scss"
import EduBurner from "../(creations)/eduburner/eduburner";
import NavBar from "@/components/navbar/navbar";

export default function Portfolio() {

    return (
        <div className={styles.wraper}>
            <div className={styles.container}>
                <NavBar />
                <EduBurner />
            </div>
        </div>

    )
}
