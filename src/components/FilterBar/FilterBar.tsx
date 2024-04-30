import { Anonymous } from '@/Anonymous/Anonymous';
import { Filter } from '@/Filter/Filter';
import { SwitchTheme } from '@/SwitchTheme/SwitchTheme';
import { Flex } from 'antd';
import { FilterBarStyled } from './FilterBar.styled';
import { useThemeStore } from '../../store/store';

interface IProps {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterBar = ({ setFilter }: IProps) => {
  const theme = useThemeStore(state => state.theme);
  return (
    <FilterBarStyled theme={theme}>
      <Flex
        style={{
          justifyContent: 'space-between',
        }}
      >
        <Anonymous />
        <SwitchTheme />
      </Flex>

      <Filter setFilter={setFilter} />
    </FilterBarStyled>
  );
};
