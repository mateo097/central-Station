import "./title.css";

interface TitleProps {
  label: string;
  className?: string;
}

const Title = ({ label, className }: TitleProps) => {
  return (
    <p className={`title-container weight-300 size-regular ${className}`}>
      {label}
    </p>
  );
};

export default Title;
