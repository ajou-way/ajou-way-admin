import { css } from '../../../styled-system/css';
import { HStack, Input, Field, CheckboxCard, Grid, Text, Button } from '@chakra-ui/react';
import { departments } from './departments';
import { useState } from 'react';

const Marker = () => {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [targetMajors, setTargetMajors] = useState<string[]>([]);
  const [deadLine, setDeadline] = useState('');

  const handleTargetMajors = (code: string) => {
    const isChecked = targetMajors.includes(code);
    setTargetMajors((prev) => (isChecked ? prev.filter((major) => major !== code) : [...prev, code]));
  };

  const isButtonDisabled = !(
    title.trim() &&
    contents.trim() &&
    latitude.trim() &&
    longitude.trim() &&
    targetMajors.length > 0 &&
    deadLine.trim()
  );

  return (
    <div className={css({ p: '10' })}>
      <Text fontSize="2xl" fontWeight="semibold" marginBottom="1">
        관리자 마커 등록 페이지
      </Text>
      <Text fontSize="sm" marginBottom="8">
        지도를 클릭하면 위도, 경도가 자동으로 입력됩니다.
      </Text>

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
      <Grid gap={4} templateColumns="repeat(4, 1fr)" marginBottom="6">
        {departments.map(({ code, name }) => (
          <CheckboxCard.Root key={code} value={code} onChange={() => handleTargetMajors(code)}>
            <CheckboxCard.HiddenInput />
            <CheckboxCard.Control>
              <CheckboxCard.Label>{name}</CheckboxCard.Label>
              <CheckboxCard.Indicator />
            </CheckboxCard.Control>
          </CheckboxCard.Root>
        ))}
      </Grid>

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

      <Button w="100%" disabled={isButtonDisabled}>
        마커 등록하기
      </Button>
    </div>
  );
};

export default Marker;
