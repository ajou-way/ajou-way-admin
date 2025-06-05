import { css } from '../../../styled-system/css';
import { Link } from 'react-router';
import { Button } from '@chakra-ui/react';

import { useBuildingsQuery } from '@/queries/useBuildingsQuery';

const BuildingList = () => {
  const { buildings } = useBuildingsQuery();

  return (
    <div className={css({ p: '10' })}>
      <h1 className={css({ fontSize: '2xl', fontWeight: 'semibold', mb: '8' })}>아주대학교 건물 목록</h1>
      <ul className={css({ display: 'flex', flexDirection: 'column', gap: '2' })}>
        {buildings.map((building) => (
          <li
            key={building.id}
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: '4',
              border: '1px solid',
              borderColor: 'gray.200',
              rounded: 'md',
              fontSize: 'sm',
            })}
          >
            <p>{building.name}</p>
            <Link to={`/building/${building.id}`}>
              <Button fontSize="sm">건물 정보 입력</Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuildingList;
