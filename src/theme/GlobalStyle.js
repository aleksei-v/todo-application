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
  margin: 0; 
}
/* .text-field {
  margin-bottom: 1rem;
} */
/* стили для label */
label {
  display: block;
  margin-bottom: 0.25rem;
}
/* стили для input */
input {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
    button {
      display: inline-block;
      font-weight: 400;
      line-height: 1.5;
      color: #fff;
      text-align: center;
      text-decoration: none;
      vertical-align: middle;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      background-color: #0d6efd;
      border: 1px solid #0d6efd;
      padding: .375rem .75rem;
      font-size: 1rem;
      border-radius: .25rem;
      transition: background-color .15s ease-in-out;
    }

    button:hover {
      color: #fff;
      background-color: #0b5ed7;
      border-color: #0a58ca;
    }
`;

 
export default GlobalStyle;