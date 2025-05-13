import { css } from '../../styled-system/css';
import { Link } from 'react-router';

import * as S from './Main.styles';

const Main = () => {
  return (
    <div className={css({ p: '10' })}>
      <h1 className={css({ fontSize: '2xl', fontWeight: 'semibold', mb: '8' })}>A:WAY 관리자 페이지</h1>
      <div className={css({ display: 'flex', flexDirection: 'column', gap: '4' })}>
        <Link to={'/building'}>
          <button className={S.button}>건물 정보 입력</button>
        </Link>
        <Link to={'/record'}>
          <button className={S.button}>좌표 기록</button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
