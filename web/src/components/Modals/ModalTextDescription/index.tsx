interface TextModalProps {
  content: string;
}

const TextModal = ({ content }: TextModalProps) => {
    
  return (
    <>
      <div className="w-full h-24 rounded relative   bottom-36 bg-sky-950 flex justify-center items-center">
        <p className="text-center">{content}</p>
      </div>
    </>
  );
};

export default TextModal;

52;
