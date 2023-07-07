import "./Message.scss";
const Message = ({
  message,
  size,
}: {
  message: string;
  size: "sm" | "md" | "lg" | "xl";
}) => {
  const fontSize = () => {
    switch (size) {
      case "sm":
        return "10px";
      case "md":
        return "14px";
      case "lg":
        return "20px";
      case "xl":
        return "25px";

      default:
        return "2rem";
    }
  };

  return (
    <p
      style={{
        fontSize: fontSize(),
      }}
      className="message_content"
    >
      {message}
    </p>
  );
};

export default Message;
