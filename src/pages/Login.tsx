import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ResponseLogin } from "../Mocks/login";
import styles from "./CSS/Login.module.css";
import logo from "../icons/logo.png";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const nav = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await ResponseLogin({ Email: email, Senha: senha });

            if (res.status == 200) nav("/home");
        } catch {
            alert("Usuário ou senha inválidos");
        }
    };

    return (
        <div className={styles.container}>
            <img src={logo} className={styles.logo}></img>
            <div className={styles.card}>
                <h1 className={styles.title}>Login</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.field}>
                        <label className={styles.label}>E-mail</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seu@exemplo.com"
                            className={styles.input}
                            required
                        />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Senha</label>
                        <input
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="••••••••"
                            className={styles.input}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.button}>
                        Entrar
                    </button>

                    <p className={styles.registerText}>
                        ainda não possui uma conta?
                    </p>
                    <button
                        type="button"
                        onClick={() => nav("/cadastro")}
                        className={styles.btnRegister}
                    >
                        {" "}
                        Cadastra-se
                    </button>
                </form>
            </div>
        </div>
    );
}
