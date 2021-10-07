import { Bg, Main, SearchBox, SearchBar } from './styled'

//const api = {
//key: process.env.API_KEY,
//base: 'https://api.openweathermap.org/data/2.5'
//}

const App = () => {
  return (
    <>
      <Bg>
        <Main>
          <SearchBox>
            <SearchBar type="text" placeholder="Ex.: Rio de janeiro" />
          </SearchBox>
        </Main>
      </Bg>
    </>
  )
}

export default App
