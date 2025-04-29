import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../icons/logo.png";
import styles from "./CSS/home.module.css";

export default function Home() {
    const nav = useNavigate();
    const userName = "Teste Capys";
    const userRole = "Desenvolvedor Front-End";

    return (
        <div className={styles.page}>
            <header className={styles.headerFull}>
                {/* Bloco centralizado de 500px */}
                <div className={styles.inner}>
                    {/* Logo + botão Sair */}
                    <img src={logo} alt="Capys" className={styles.logo} />
                    <button
                        type="button"
                        className={styles.logout}
                        onClick={() => nav("/")}
                    >
                        Sair
                    </button>
                </div>
                {/* Saudação fica numa segunda “row” sobre o mesmo fundo */}
                <div className={styles.greetingRow}>
                    <div className={styles.inner}>
                        <h2 className={styles.greetingTitle}>
                            Olá, {userName}
                        </h2>
                        <span className={styles.greetingRole}>{userRole}</span>
                    </div>
                </div>
            </header>

            <main className={styles.mainFull}>
                <div className={styles.inner}>
                    <h3 className={styles.mainTitle}>
                        Que pena! Estamos em desenvolvimento :(
                            
                    </h3>
                    <p className={styles.mainText}>
                        Nossa aplicação está em desenvolvimento, em breve
                        teremos novidades
                    </p>
                </div>
            </main>
        </div>
    );
}
