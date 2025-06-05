import { useState } from 'react';
import { useParams } from 'react-router';
import MDEditor from '@uiw/react-md-editor';
import { RadioGroup, HStack, Text, Heading, Button, Input, InputGroup, Flex } from '@chakra-ui/react';

import { useBuildingMutation } from '@/queries/useBuildingMutation';

import { css } from '../../../styled-system/css';

const items = [
  { label: '기본 정보', value: 'INFORMATION' },
  { label: '출입문 정보', value: 'ENTRANCE' },
  { label: '식당', value: 'RESTAURANT' },
  { label: '편의점', value: 'CONVENIENCE_STORE' },
  { label: '주차장', value: 'PARKING' },
];

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
      <Heading mb="6">건물 정보 입력 페이지</Heading>

      <Text textStyle="sm" fontWeight="semibold" mb="4">
        건물 속성
      </Text>
      <RadioGroup.Root mb="6">
        <HStack gap="6">
          {items.map((item) => (
            <RadioGroup.Item key={item.value} value={item.value} onChange={handleTypeChange}>
              <RadioGroup.ItemHiddenInput />
              <RadioGroup.ItemIndicator />
              <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
            </RadioGroup.Item>
          ))}
        </HStack>
      </RadioGroup.Root>

      <Text textStyle="sm" fontWeight="semibold" mb="4">
        건물 정보 입력
      </Text>
      <MDEditor value={contents} onChange={handleContentsChange} className={css({ mb: '6' })} />

      <Text textStyle="sm" fontWeight="semibold" mb="4">
        미리 보기
      </Text>
      <MDEditor.Markdown source={contents} className={css({ mb: '6' })} />

      <Text textStyle="sm" fontWeight="semibold" mb="4">
        이미지 변환 (이미지를 변환한 후 마크다운에 추가하세요)
      </Text>
      <Flex gap="4" mb="6">
        <InputGroup startAddon=".jpg, .jpeg, .png">
          <Input type="file" id="file" name="file" accept=".jpg, .jpeg, .png" onChange={handleImageChange} />
        </InputGroup>
        <Button onClick={convertImage}>이미지 URL 변환하기</Button>
      </Flex>

      <Text textStyle="sm" fontWeight="semibold" mb="4">
        이미지 변환 결과
      </Text>
      <Text textStyle="md" mb="6">
        {imageURL}
      </Text>

      <Button w="100%" onClick={save}>
        저장하기
      </Button>
    </div>
  );
};

export default BuildingDetail;
