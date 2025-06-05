import { memo } from 'react';
import { Grid } from '@chakra-ui/react';
import { CheckboxCard } from '@chakra-ui/react';
import { departments } from './departments';

interface CheckboxCardListProps {
  targetList: string[];
  onChange: (code: string) => void;
}

const CheckboxCardList = ({ targetList, onChange }: CheckboxCardListProps) => {
  return (
    <Grid gap={4} templateColumns="repeat(4, 1fr)" marginBottom="6">
      {departments.map(({ code, name }) => (
        <CheckboxCard.Root key={code} value={code} onChange={() => onChange(code)}>
          <CheckboxCard.HiddenInput checked={targetList.includes(code)} />
          <CheckboxCard.Control>
            <CheckboxCard.Label>{name}</CheckboxCard.Label>
            <CheckboxCard.Indicator />
          </CheckboxCard.Control>
        </CheckboxCard.Root>
      ))}
    </Grid>
  );
};

export default memo(CheckboxCardList);
