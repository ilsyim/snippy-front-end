import styles from './Landing.module.css'

//ALL VIDEOS SHOW HERE

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'Snippy'}</h1>
    </main>
  )
}

export default Landing
