// src/pages/Cadastro.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CSS/Cadastro.module.css";
import logo from "../icons/logo.png";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

type AlertType = "success" | "error";
const SuccessIcon = FaCheckCircle as React.FC<React.SVGProps<SVGSVGElement>>;
const ErrorIcon = FaTimesCircle as React.FC<React.SVGProps<SVGSVGElement>>;

export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmSenha, setConfirmSenha] = useState("");

    const [alerts, setAlerts] = useState<{ type: AlertType; text: string }[]>(
        []
    );
    const nav = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // aqui só pra demo, disparo os dois:
        setAlerts([
            { type: "success", text: "Conta criada com sucesso!" },
            { type: "error", text: "Ops! Algo deu errado" },
        ]);
    };
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={logo} alt="Capys" className={styles.logo} />
                <button
                    type="button"
                    onClick={() => nav("/login")}
                    className={styles.backButton}
                >
                    Voltar
                </button>
            </div>

            <div className={styles.alertContainer}>
                {alerts.map((alert, i) => (
                    <div
                        key={i}
                        className={`${styles.alert} ${
                            alert.type === "success"
                                ? styles.alertSuccess
                                : styles.alertError
                        }`}
                    >
                        {/* ícone antes do texto */}
                        {alert.type === "success" ? (
                            <SuccessIcon className={styles.alertIcon} />
                        ) : (
                            <ErrorIcon className={styles.alertIcon} />
                        )}

                        <span className={styles.alertText}>{alert.text}</span>
                        <button
                            className={styles.alertClose}
                            onClick={() =>
                                setAlerts((cur) =>
                                    cur.filter((_, idx) => idx !== i)
                                )
                            }
                            aria-label="Fechar alerta"
                        >
                            &times;
                        </button>
                        <div className={styles.alertBar} />
                    </div>
                ))}
            </div>

            {/* card com o form */}
            <div className={styles.card}>
                <h1 className={styles.title}>Crie sua conta</h1>
                <p className={styles.subtitle}>Rápido e grátis, vamos nessa</p>

                <form onSubmit={handleSubmit} className={styles.form}>
                    {/* Nome */}
                    <div className={styles.field}>
                        <label className={styles.label}>Nome</label>
                        <input
                            type="text"
                            placeholder="Digite aqui seu nome"
                            className={styles.input}
                            required
                        />
                    </div>

                    {/* E-mail */}
                    <div className={styles.field}>
                        <label className={styles.label}>E-mail</label>
                        <input
                            type="email"
                            placeholder="Digite aqui seu email"
                            className={styles.input}
                            required
                        />
                    </div>

                    {/* Senha */}
                    <div className={styles.field}>
                        <label className={styles.label}>Senha</label>
                        <input
                            type="password"
                            placeholder="Digite aqui sua senha"
                            className={styles.input}
                            required
                        />
                    </div>

                    {/* Confirmar Senha */}
                    <div className={styles.field}>
                        <label className={styles.label}>Confirmar senha</label>
                        <input
                            type="password"
                            placeholder="Digite novamente sua senha"
                            className={styles.input}
                            required
                        />
                    </div>

                    {/* Bio */}
                    <div className={styles.field}>
                        <label className={styles.label}>Bio</label>
                        <input
                            type="text"
                            placeholder="Fala sobre você"
                            className={styles.input}
                            required
                        />
                    </div>
                    {/* Contato */}
                    <div className={styles.field}>
                        <label className={styles.label}>Contato</label>
                        <input
                            type="text"
                            placeholder="Opção de contato"
                            className={styles.input}
                        />
                    </div>

                    {/* Selecionar Cargo */}
                    <div className={styles.field}>
                        <label className={styles.label}>Selecionar Cargo</label>
                        <select className={styles.select}>
                            <option>Desenvolvedor Front-End</option>
                            <option>Desenvolvedor Back-End</option>
                            <option>UX Designer</option>
                            <option>Product Manager</option>
                        </select>
                    </div>
                    {/* resto dos campos… */}
                    <button type="submit" className={styles.button}>
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}
