//This is the file where you import everything you want visible in your app/website
import RecipeCard from './components/RecipeCard'

const App = () => {
  return (
    <div>
      <header className="header-1">
        <h1>My Recipe App</h1>
      </header>
      <main className="app-wrapper">
        <RecipeCard />
      </main>
    </div>
  )
}

export default App