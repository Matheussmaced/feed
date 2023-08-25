import './global.css';
import styles from './components/App.module.css'

import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

function App() {

  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post photo={'https://github.com/MaykBrito.png'} name='Mayk Brito'/>
          <Post photo={'https://github.com/Matheussmaced.png'} name='Matheus Macedo'/>
        </main>
      </div>
    </>
  )
}

export default App