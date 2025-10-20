"use client"

import Link from "next/link";
import styles from "./register.module.css"
import { useRouter } from "next/navigation"; 
import { useState } from "react";

export default function ResgisterPage() {

  const router = useRouter();

  const [pagina, setPagina] = useState(1);

  const navegarParaHome = () => {
    router.push('/'); 
  };

  const voltar = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
    }
  };

  const continuar = () => {
    if (pagina < 3) {
      setPagina(pagina + 1);
    }
  };

  return (
    <div className={styles.conteiner} >
      <div className={styles.bigBox}>
        <div className={styles.box}>
          <div className={styles.titulo}>
            Resgister
          </div>
          {pagina === 1 && (
            <>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="firstName">First Name</label>
                <input className={styles.input} type="text"  id="firstName" name="firstName" placeholder="Digite o seu nome" />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="lastName">Last Name</label>
                <input className={styles.input} type="text" id="lastName" name="lastName" placeholder="Digite o seu apelido" />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="gender">Gender</label>
                <select className={styles.select} name="gender" id="gender">
                  <option className={styles.option} value="M">Masculino</option>
                  <option className={styles.option} value="F">Femenino</option>
                  <option className={styles.option} value="N">Não Especificar</option>
                </select>
              </div>
            </>
          )}

          {pagina === 2 && (
            <>
              <div className={styles.dataNascimento}>
                <div className={styles.dia}>
                  <label className={styles.label} htmlFor="day">Day</label>
                  <input className={styles.input} min="1" max="31" type="number" id="day" name="day"  placeholder="dia" />
                </div>
                <div className={styles.mes}>
                  <label className={styles.label} htmlFor="month">Month</label>
                  <select className={styles.select} name="month" id="month">
                    <option className={styles.option} value="1">Janeiro</option>
                    <option className={styles.option} value="2">Fevereiro</option>
                    <option className={styles.option} value="3">Março</option>
                    <option className={styles.option} value="4">Abril</option>
                    <option className={styles.option} value="5">Maio</option>
                    <option className={styles.option} value="6">Junho</option>
                    <option className={styles.option} value="7">Julho</option>
                    <option className={styles.option} value="8">Agosto</option>
                    <option className={styles.option} value="9">Setembro</option>
                    <option className={styles.option} value="10">Outubro</option>
                    <option className={styles.option} value="11">Novembro</option>
                    <option className={styles.option} value="12">Dezembro</option>
                  </select>
                </div>
                <div className={styles.ano}>
                  <label className={styles.label} htmlFor="year">Year</label>
                  <input className={styles.input} min="1900" max="2100" type="number" id="year" name="year" placeholder="ano" />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="localidade">localidade</label>
                <input className={styles.input} type="text" id="localidade" name="localidade" placeholder="Digite a sua localidade" />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="nivel">Nivel de Literacia</label>
                <select className={styles.select} name="nivel" id="nivel">
                  <option className={styles.option} value="iniciante">iniciante</option>
                  <option className={styles.option} value="intermediario">intermediario</option>
                  <option className={styles.option} value="avancado">avancado</option>
                </select>
              </div>
            </>
          )}

          {pagina === 3 && (
            <>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input className={styles.input} type="email" id="email" name="email" placeholder="Digite o seu email" />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="password">Password</label>
                <input className={styles.input} type="password" id="password" name="password" placeholder="Digite o seu password" />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="password">Confirmar Password</label>
                <input className={styles.input} type="password" id="password" name="password" placeholder="Digite o seu password" />
              </div>
            </>
          )}

          {/* <div className={styles.rememberSenha}>
            <div><input type="checkbox" /> Remember me</div>
            <div><Link className={styles.link} href={"/"}>Esqueceu a Senha?</Link></div>
          </div> */}

          <div className={styles.butoes}>
            <div style={pagina > 1 ? { display: "flex"} : { visibility: 'hidden' }} className={styles.voltar} onClick={voltar}>voltar</div>
            <div className={styles.continuar} onClick={continuar}>continuar</div>
          </div>

          {/* <div className={styles.register}>
            Não Tem uma conta? <Link className={styles.link} href="/register">Registre-se</Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
