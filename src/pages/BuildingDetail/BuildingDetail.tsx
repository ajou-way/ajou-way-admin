import { useState } from 'react';
import { useParams } from 'react-router';
import MDEditor from '@uiw/react-md-editor';

import { useBuildingMutation } from '@/queries/useBuildingMutation';

import { css } from '../../../styled-system/css';

import * as S from './BuildingDetail.styles';

const BuildingDetail = () => {
  const { id } = useParams<{ id: string }>();

  const [type, setType] = useState('');
  const [contents, setContents] = useState('');

  const [image, setImage] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState('');

  const { addBuildingDetailMutation, createImageURLMutation } = useBuildingMutation();

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setImage(e.target.files[0]);
  };

  const handleContentsChange = (contents: string | undefined) => {
    if (!contents) return;
    setContents(contents);
  };

  const convertImage = () => {
    if (!image) return;
    createImageURLMutation({ image }, { onSuccess: ({ imageUrl }) => setImageURL(imageUrl) });
  };

  const save = () => {
    console.log('id', id);
    console.log('type', type);
    console.log('contents', contents);

    addBuildingDetailMutation({ id: Number(id), type, contents });
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
      <div className={css({ display: 'flex', flexDirection: 'column', gap: '4', mb: '8' })}>
        <input type="file" id="file" name="file" accept=".jpg, .jpeg, .png" onChange={handleImageChange} />
        <button type="button" className={S.saveButton} onClick={convertImage}>
          이미지 URL 변환하기
        </button>
        <p>{imageURL}</p>
      </div>
      <div className={css({ display: 'flex', flexDirection: 'column', gap: '8', mb: '8' })}>
        <MDEditor value={contents} onChange={handleContentsChange} />
        <MDEditor.Markdown source={contents} />
      </div>
      <button type="button" className={S.saveButton} onClick={save}>
        저장하기
      </button>
    </div>
  );
};

export default BuildingDetail;
