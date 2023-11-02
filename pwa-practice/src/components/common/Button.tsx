import { Button as RadixButton } from '@radix-ui/themes';
type Props = React.ComponentProps<typeof RadixButton>;
/**
 * bg-green100のボタンを標準にした。
 * hoverの挙動は仮にgray400にしている。
 * @param props
 * @returns
 */
const Button = (props: Props) => {
  return <RadixButton {...props} className='bg-green100 hover:bg-gray400 cursor-pointer'></RadixButton>;
};

export default Button;
