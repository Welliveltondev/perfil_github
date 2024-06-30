import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState()

    useEffect(()=> {
        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)//passa o endereço do site com o usuario
        .then(res => res.json())
        .then(resJson => {
            setTimeout(() => {
                setRepos(resJson);
                setEstaCarregando(false);
            }, 3000);
        })
    }, [nomeUsuario]);

    return (
        <div className="container">
        {estaCarregando ? (
            <h1>Carregando...</h1>
        ) : (
        <ul className={styles.list}>
            {repos.map(repositorio => (
                <li className={styles.listItem}key={repositorio.id}>
                    <div className={styles.itemName}>
                        <b>Nome</b> 
                        {repositorio.name}
                    </div>
                    <div className={styles.itemLanguage}>
                        <b>Linguagem</b> 
                        {repositorio.language}
                    </div>
                    <a className={styles.itemLink} target="_blank" href={repositorio.html_url}>Visitar no Github</a>
                </li>
            ))}
            <li>Repositorio</li>
        </ul>
        )}
        </div>
    )
}

export default ReposList;