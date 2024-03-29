import {Link} from 'react-router-dom';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <h1>404</h1>
      <h2>Мы не можем найти страницу, которую вы ищете.</h2>
      <h4>
        Страница, которую вы запросили, не найдена в базе данных.
        <p>Скорее всего вы попали на битую ссылку или опечатались при вводе URL</p>
      </h4>
      <p><Link to="/">Перейти на главную страницу</Link></p>
    </>
  );
}

export default NotFoundPage;
