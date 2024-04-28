import { Box } from '@/Box/Box';
import { AiOutlineSearchStyled } from './Filter.styled';
import { InputStyled } from './Filter.styled';

interface IProp {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const Filter = ({ setFilter }: IProp) => {
  const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(evt.target.value);
  };

  return (
    <Box position="relative">
      <InputStyled
        onChange={onChange}
        type="text"
        name="name"
        autoComplete="off"
        placeholder="Search or start new chat"
      />
      <AiOutlineSearchStyled />
    </Box>
  );
};
