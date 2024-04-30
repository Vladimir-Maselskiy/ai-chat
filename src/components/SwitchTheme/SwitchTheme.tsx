import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { Switch } from 'antd';

export const SwitchTheme = () => {
  return (
    <Switch
      checkedChildren={<SunOutlined />}
      unCheckedChildren={<MoonOutlined />}
      defaultChecked
      style={{
        backgroundColor: true ? 'green' : 'orange',
      }}
    />
  );
};
