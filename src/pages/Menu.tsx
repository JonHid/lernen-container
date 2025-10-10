import { useNavigate } from 'react-router-dom';

function Menu() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={ () => navigate('/quiz') }>Go to Quiz</button>
    </>
  )
}

export default Menu
