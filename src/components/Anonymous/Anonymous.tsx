import { AiOutlineCheckCircleStyled } from '@/ContactItem/ContactItem.styled';
import photo from '../../assets/images.png';
import { IMGStyled } from './Anonymous.styled';

export const Anonymous = () => {
  return (
    <div style={{ position: 'relative', width: 40 }}>
      <IMGStyled src={photo} alt="user photo" width={40} height={40} />
      <AiOutlineCheckCircleStyled />
    </div>
  );
};
