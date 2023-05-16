import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  className?: string;
  actionOnClick?: () => void;
}

const Button = ({
  text,
  className,
  actionOnClick,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled className={className} onClick={actionOnClick}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
