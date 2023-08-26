import './global.css';
import styles from './components/App.module.css'

import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';


// Precisamos de:
// author {avatar_url: '', name: '', role ''}
// plublishedAt: date
// content: String

const posts = [
  {
    id: new Date().getTime(),
    author: {
      avatarUrl: 'https://github.com/MaykBrito.png',
      name: 'Mayk Brito',
      role: 'Web Developer',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},

      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

      {type: 'link', content: '👉 jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-08-24 20:07:30')
  },
  {
    id: new Date().getTime(),
    author: {
      avatarUrl: 'https://github.com/Matheussmaced.png',
      name: 'Matheus Macêdo',
      role: 'Web Developer',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},

      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

      {type: 'link', content: '👉 jane.design/doctorcare '},
    ],
    publishedAt: new Date('2023-08-23 20:07:30')
  },
]

function App() {

  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map(post => {
            return (
              <Post
                author ={post.author}
                content ={post.content}
                publishedAt ={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App