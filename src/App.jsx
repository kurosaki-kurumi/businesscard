import { useState, useMemo } from 'react'
import cardData from './data/cards.json'
import logo from './assets/rogo.png'
import './index.css'

function App() {
  const [selectedGenre, setSelectedGenre] = useState('All')
  const [copiedId, setCopiedId] = useState(null)

  const handleCopy = (userId) => {
    navigator.clipboard.writeText(userId)
    setCopiedId(userId)
    setTimeout(() => setCopiedId(null), 2000)
  }

  // ジャンルの一覧を取得（重複排除）
  const genres = useMemo(() => {
    const allGenres = cardData.map(card => card.genre)
    return ['All', ...new Set(allGenres)]
  }, [])

  // 選択されたジャンルでフィルタリング
  const filteredCards = useMemo(() => {
    if (selectedGenre === 'All') return cardData
    return cardData.filter(card => card.genre === selectedGenre)
  }, [selectedGenre])

  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="学マス名刺発表会" className="site-logo" />
      </header>

      <nav className="filter-container">
        {genres.map(genre => (
          <button
            key={genre}
            className={`filter-btn ${selectedGenre === genre ? 'active' : ''}`}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </nav>

      <main className="card-grid">
        {filteredCards.map(card => (
          <article key={card.id} className="card">
            <div className="card-image-wrapper">
              <img
                src={card.image.startsWith('http') ? card.image : (import.meta.env.BASE_URL + card.image).replace(/\/+/g, '/')}
                alt={card.name}
                className="card-image"
              />
              <div className="card-overlay">
                <p className="description">{card.description}</p>
              </div>
            </div>

            <div className="card-info">
              <div className="card-header">
                <h2 className="user-name">{card.name}</h2>
                <span className="genre-badge">{card.genre}</span>
              </div>
              <div
                className={`user-id-wrapper ${copiedId === card.userId ? 'copied' : ''}`}
                onClick={() => handleCopy(card.userId)}
                title="Click to copy ID"
              >
                <p className="user-id">{card.userId}</p>
                <span className="copy-feedback">Copied!</span>
              </div>
            </div>
          </article>
        ))}
      </main>

      <footer className="footer">
        <p className="footer-creator">サイト作成者:黒咲くるみ</p>
        <div className="footer-links">
          <a href="https://www.youtube.com/@kuru3lk_" target="_blank" rel="noopener noreferrer" className="footer-link youtube">YouTube</a>
          <a href="https://x.com/kuru3lk_" target="_blank" rel="noopener noreferrer" className="footer-link x-twitter">X (Twitter)</a>
        </div>
      </footer>
    </div>
  )
}

export default App
