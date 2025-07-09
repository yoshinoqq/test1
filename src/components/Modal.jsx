const Modal = ({
  modalVisible,
  setModalVisible,
  children,
  setCurrentImageId,
}) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        modalVisible ? "visible bg-[#6B7280BF]/75" : "invisible"
      }`}
      onClick={() => {
        setModalVisible(false);
        setCurrentImageId(null);
      }}
    >
      <div
        className={`bg-white rounded-md shadow p-6 transition-all ${
          modalVisible ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
