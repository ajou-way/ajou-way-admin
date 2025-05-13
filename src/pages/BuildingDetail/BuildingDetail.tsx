import { useState } from 'react';
// import { useParams } from 'react-router';
import MDEditor from '@uiw/react-md-editor';

// import { useBuildingMutation } from '@/queries/useBuildingMutation';

import { css } from '../../../styled-system/css';

import * as S from './BuildingDetail.styles';

const BuildingDetail = () => {
  // const { id } = useParams<{ id: string }>();

  const [type, setType] = useState('');
  const [value, setValue] = useState('**Hello world!!!**');

  // const { addBuildingDetailMutation } = useBuildingMutation();

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
  };

  const saveBuildingDetail = () => {
    // { key: string; value: string }[] 형태를 Record<string, string> 형태로 변환
    // const properties = propertyList.reduce(
    //   (acc, { key, value }) => {
    //     acc[key] = value;
    //     return acc;
    //   },
    //   {} as Record<string, string>
    // );
    // const info = {
    //   buildingId: Number(id),
    //   type,
    //   properties,
    // };
    // addBuildingDetailMutation({ info });
  };

  return (
    <div className={css({ p: '10' })}>
      <h1 className={css({ fontSize: '2xl', fontWeight: 'semibold', mb: '8' })}>건물 정보 입력 페이지</h1>
      <div className={css({ display: 'flex', gap: '1rem', mb: '8' })}>
        <div className={S.radio}>
          <input type="radio" id="door" name="type" value="DOOR" onChange={handleTypeChange} />
          <label htmlFor="door">출입문 정보</label>
        </div>
        <div className={S.radio}>
          <input type="radio" id="restaurant" name="type" value="RESTAURANT" onChange={handleTypeChange} />
          <label htmlFor="restaurant">식당</label>
        </div>
        <div className={S.radio}>
          <input type="radio" id="convenience" name="type" value="CONVENIENCE_STORE" onChange={handleTypeChange} />
          <label htmlFor="convenience">편의점</label>
        </div>
        <div className={S.radio}>
          <input type="radio" id="parking" name="type" value="PARKING" onChange={handleTypeChange} />
          <label htmlFor="parking">주차장</label>
        </div>
      </div>
      <div className={css({ mb: '8' })}>
        <MDEditor value={value} onChange={(value) => setValue(value ?? '')} />
        {/* <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} /> */}
      </div>
      <button type="button" className={S.saveButton} onClick={saveBuildingDetail}>
        저장하기
      </button>
    </div>
  );
};

export default BuildingDetail;
