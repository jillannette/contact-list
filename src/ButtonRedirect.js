import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button
`position: flex;
 background-color: #B2C8DF;
 padding: 5px 15px;
 border-radius: 5px;
 box-shadow: 0px 2px 2px lightgray;`

const ButtonRedirect = () => {
  let path = 'newPath';
  let history = useHistory();
  history.push(path);
}

export default ButtonRedirect;

