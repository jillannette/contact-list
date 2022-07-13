import { useHistory } from 'react-router-dom';

const RedirectToViewContactPage = () => {
  const history = useHistory();

  const redirect = () => {
    history.push('/ViewContact');
  }

  return (
    <div>
      
      <button onClick={redirect}>View Contact</button>
    </div>
  );
};

export default RedirectToViewContactPage