import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import { useThemeStore } from '../../store/store';

export const SwitchTheme = () => {
  const { theme, setTheme } = useThemeStore();

  const onChangeTheme = (e: boolean) => {
    const theme = e ? 'light' : 'dark';
    setTheme(theme);
  };

  return (
    <Switch
      checkedChildren={<SunOutlined />}
      unCheckedChildren={<MoonOutlined />}
      checked={theme === 'light' ? true : false}
      style={{
        backgroundColor: theme === 'light' ? 'rgb(0, 21, 41)' : '#ccc',
      }}
      onChange={onChangeTheme}
    />
  );
};
