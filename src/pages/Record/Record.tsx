import { useState, useCallback } from 'react';

import { useInterval } from '@/hooks/useInterval';

import { css } from '../../../styled-system/css';

import * as S from './Record.styles';

const Record = () => {
  const [coords, setCoords] = useState<{ lat: number; lng: number }[]>([]);
  const [isRecording, setIsRecording] = useState(false);

  const recordCoords = useCallback(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCoords((prev) => [...prev, { lat: latitude, lng: longitude }]);
    });
  }, []);

  const stopRecord = () => {
    console.log('좌표 기록 중지');
    setIsRecording(false);
  };

  const currentRecord = () => {
    stopRecord();
    recordCoords();
  };

  // 5초마다 좌표 기록
  const startRecord = () => {
    console.log('좌표 기록 시작');

    stopRecord();
    recordCoords();
    setIsRecording(true);
  };

  const resetRecord = () => {
    console.log('좌표 기록 초기화');

    stopRecord();
    setCoords([]);
  };

  useInterval(recordCoords, isRecording ? 5000 : null);

  return (
    <div className={S.layout}>
      <h1 className={css({ fontSize: '2xl', fontWeight: 'semibold' })}>좌표 기록 페이지</h1>
      <div className={S.buttonList}>
        <button className={S.button} onClick={currentRecord}>
          현재 좌표 찍기
        </button>
        <button className={S.button} onClick={startRecord}>
          좌표 기록 시작
        </button>
        <button className={S.button} onClick={stopRecord}>
          좌표 기록 중지
        </button>
        <button className={S.button} onClick={resetRecord}>
          좌표 기록 초기화
        </button>
      </div>
      <h2 className={css({ textStyle: 'lg', fontWeight: 'semibold' })}>기록된 좌표</h2>
      <ul className={S.list}>
        {coords.map(({ lat, lng }, index) => (
          <li key={index}>
            {index + 1}번: 위도 {lat.toFixed(6)}, 경도 {lng.toFixed(6)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Record;
