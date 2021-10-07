import styled from 'styled-components'

const Bg = styled.div`
  background-image: url('https://images.unsplash.com/photo-1512641406448-6574e777bec6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80');
  background-size: cover;
  background-position: bottom;
  transition: 0.4 ease-out;
`

const Main = styled.main`
  min-height: 100vh;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.75)
  );
  padding: 1.5rem;
`

const SearchBox = styled.div`
  width: 100%;
  margin: 0 0 4.5rem;
`

const SearchBar = styled.input`
  display: block;
  width: 100%;
  padding: 1rem;

  appearance: none;
  background: none;
  border: none;
  outline: none;

  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0 0 1rem 1rem;
  margin-top: -25px;

  box-shadow: 0 5px rgba(0, 0, 0, 0.2);

  color: #313131;
  font-size: 1.25rem;

  &:focus {
    background-color: rgba(255, 255, 255, 0.75);
  }
`

export { Bg, Main, SearchBox, SearchBar }
