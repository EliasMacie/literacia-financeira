"use client"

import Link from "next/link";
import styles from "./login.module.css"
import { useRouter } from "next/navigation"; 

export default function LoginPage() {

  const router = useRouter();

  const navegarParaHome = () => {
    router.push('/'); 
  };

  return (
    <div className={styles.conteiner} >
      <div className={styles.box}>
        <div className={styles.titulo}>
          login
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input className={styles.input} type="email" id="email" name="email" placeholder="Digite seu email" />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="senha">Senha</label>
          <input className={styles.input} type="password" id="senha" name="senha" placeholder="Digite sua senha" />
        </div>

        <div className={styles.rememberSenha}>
          <div><input type="checkbox" /> Remember me</div>
          <div><Link className={styles.link} href={"/"}>Esqueceu a Senha?</Link></div>
        </div>

        <div className={styles.submit} onClick={navegarParaHome}>Entrar</div>

        <div className={styles.register}>
          Não Tem uma conta? <Link className={styles.link} href="/register">Registre-se</Link>
        </div>
      </div>
    </div>
  );
}
