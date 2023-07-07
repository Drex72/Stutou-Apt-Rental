import "./ModalHeaderStyles.scss";
interface IModalHeaderProps {
  content: string;
}

const ModalHeader = (props: IModalHeaderProps) => {
  const { content } = props;
  return <h2 className="modal-header">{content}</h2>;
};

export default ModalHeader;
