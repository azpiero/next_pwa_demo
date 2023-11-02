import { IconButton as RadixIconButton } from '@radix-ui/themes';
type Props = React.ComponentProps<typeof RadixIconButton>;
/**
 * bg-green100のボタンを標準にした。
 * hoverの挙動は仮にgray400にしている。
 * @param props
 * @returns
 */
const IconButton = (props: Props) => {
  return <RadixIconButton {...props} className='bg-green100 hover:bg-gray400 cursor-pointer'></RadixIconButton>;
};

export default IconButton;
