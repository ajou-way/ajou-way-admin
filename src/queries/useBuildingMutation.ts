import { useMutation } from '@tanstack/react-query';

import { addBuildingDetail, createImageURL } from '@/apis/map';

export const useBuildingMutation = () => {
  const { mutate: addBuildingDetailMutation } = useMutation({
    mutationFn: addBuildingDetail,
    onSuccess: () => alert('저장에 성공했습니다.'),
    onError: (error) => alert(error.message),
  });

  const { mutate: createImageURLMutation } = useMutation({
    mutationFn: createImageURL,
    onSuccess: () => alert('변환에 성공했습니다.'),
    onError: (error) => alert(error.message),
  });

  return { addBuildingDetailMutation, createImageURLMutation };
};
