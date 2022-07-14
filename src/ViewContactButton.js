import { useHistory } from 'react-router-dom';

const ViewContactButton = () => {
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

export default ViewContactButton