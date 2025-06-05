import { css } from '../../../styled-system/css';
import { HStack, Input, Field, Text, Button } from '@chakra-ui/react';
import { useEffect, useState, useCallback } from 'react';
import { useMap } from '@/hooks/useMap';
import { useAuthQuery } from '@/queries/useAuthQuery';
import { useMarkerMutation } from '@/queries/useMarkerMutation';
import CheckboxCardList from '@/components/Marker/CheckboxCardList';

const Marker = () => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [targetMajors, setTargetMajors] = useState<string[]>([]);
  const [deadLine, setDeadline] = useState('');

  const { accessToken } = useAuthQuery();
  const { addMarkerMutation } = useMarkerMutation();

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
    }
  }, [accessToken]);

  const { map, mapRef, addMarker } = useMap();

  useEffect(() => {
    if (!map) return;

    naver.maps.Event.addListener(map, 'click', function (e) {
      setLatitude(e.coord.y);
      setLongitude(e.coord.x);

      addMarker(map, e.coord.y, e.coord.x);
    });
  }, [map]);

  const handleTargetMajors = useCallback((code: string) => {
    setTargetMajors((prev) => (prev.includes(code) ? prev.filter((m) => m !== code) : [...prev, code]));
  }, []);

  const handleSubmit = () => {
    addMarkerMutation({
      latitude: Number(latitude),
      longitude: Number(longitude),
      title,
      contents,
      targetMajors,
      deadLine,
    });
  };

  const isDisabled = !latitude || !longitude || !title || !contents || targetMajors.length === 0 || !deadLine;

  return (
    <div className={css({ p: '10' })}>
      <Text fontSize="2xl" fontWeight="semibold" marginBottom="1">
        관리자 마커 등록 페이지
      </Text>
      <Text fontSize="sm" marginBottom="8">
        지도를 클릭하면 위도, 경도가 자동으로 입력됩니다.
      </Text>

      <div ref={mapRef} className={css({ width: '100%', height: '400px', marginBottom: '8' })} />

      <HStack gap={4} marginBottom="6">
        <Field.Root>
          <Field.Label htmlFor="contents">위도</Field.Label>
          <Input
            type="text"
            id="latitude"
            name="latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            disabled
          />
        </Field.Root>
        <Field.Root>
          <Field.Label htmlFor="contents">경도</Field.Label>
          <Input
            type="text"
            id="longitude"
            name="longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            disabled
          />
        </Field.Root>
      </HStack>

      <Field.Root marginBottom="6">
        <Field.Label htmlFor="title">제목</Field.Label>
        <Input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </Field.Root>

      <Field.Root marginBottom="6">
        <Field.Label htmlFor="contents">내용</Field.Label>
        <Input
          type="text"
          id="contents"
          name="contents"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />
      </Field.Root>

      <Field.Root marginBottom={2}>
        <Field.Label htmlFor="deadLine">대상 학과</Field.Label>
      </Field.Root>
      <CheckboxCardList targetList={targetMajors} onChange={handleTargetMajors} />

      <Field.Root marginBottom="6">
        <Field.Label htmlFor="deadLine">데드라인</Field.Label>
        <Input
          type="datetime-local"
          id="deadLine"
          name="deadLine"
          value={deadLine}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </Field.Root>

      <Button w="100%" onClick={handleSubmit} disabled={isDisabled}>
        마커 등록하기
      </Button>
    </div>
  );
};

export default Marker;
