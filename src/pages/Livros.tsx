// src/pages/livros.tsx
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ResponseLivros } from '../Mocks/livros'
import styles from './CSS/Livros.module.css'
import logo from '../icons/logo.png'
type Livro = {
  ID: number
  NOME: string
  AUTOR: string
  EDITORA: string
  DATA_PUBLICACAO: string
  Star: number
  FL_FAVORITO: boolean
}

export default function Livros() {
  const [livros, setLivros] = useState<Livro[]>([])
  const nav = useNavigate()

  useEffect(() => {
    const res = ResponseLivros()
    if (res.status === 200 && res.data?.lstLivros) {
      setLivros(res.data.lstLivros)
    }
  }, [])

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Biblioteca</h1>
        <img src={logo} className={styles.logo}></img>
        <button className={styles.home} onClick={() => nav('/home')}>
          Home
        </button>
      </header>
      <main className={styles.grid}>
        {livros.map((livro) => (
          <div key={livro.ID} className={styles.card}>
            <h2 className={styles.bookName}>{livro.NOME}</h2>
            <p className={styles.author}>{livro.AUTOR}</p>
            <p className={styles.publisher}>
              <strong>Editora:</strong> {livro.EDITORA}
            </p>
            <p className={styles.pubDate}>
              <strong>Publicado:</strong>{' '}
              {new Date(livro.DATA_PUBLICACAO).toLocaleDateString()}
            </p>
            <p className={styles.rating}>
              <strong>Avaliação:</strong> {livro.Star}★
            </p>
            {livro.FL_FAVORITO && (
              <span className={styles.favorite}>❤️ Favorito</span>
            )}
          </div>
        ))}
      </main>
    </div>
  )
}
