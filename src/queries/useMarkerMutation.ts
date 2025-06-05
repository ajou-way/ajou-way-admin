import { useMutation } from '@tanstack/react-query';
import { addMarker } from '@/apis/map';

export const useMarkerMutation = () => {
  const { mutate: addMarkerMutation } = useMutation({
    mutationFn: addMarker,
    onSuccess: () => alert('저장에 성공했습니다.'),
    onError: (error) => alert(error.message),
  });

  return { addMarkerMutation };
};
