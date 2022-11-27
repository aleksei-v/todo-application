import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }
  
  input[type="text"] {
  font-family: inherit;
  font-size: inherit; 
  line-height: inherit; 
}

label {
  display: block;
  margin-bottom: 0.25rem;
}

input {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  font: inherit;
  line-height: 16px;
  letter-spacing: 0.01em;
  resize: none;
}

button {
  width: 200px;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: #3f51b5;
  color: #fff;
}

button:hover,
button:focus {
  background-color: #303f9f;
}

button:active {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
}
`;

 
export default GlobalStyle;