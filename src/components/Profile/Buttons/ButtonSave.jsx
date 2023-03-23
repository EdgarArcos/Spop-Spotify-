export const ButtonSave = ({ saveChanges }) => {
  return (
    <>
      <button
        onClick={saveChanges}
        className="sm:bg-transparent sm:w-60 sm:border-2 sm:border-teal sm:rounded-lg sm:text-2xl sm:hover:opacity-60 sm:transition sm:duration-500
      bg-transparent w-60 border-2 border-teal rounded-lg text-2xl hover:opacity-60 transition duration-500"
      >
        <p className="sm:py-2 sm:px-5 sm:text-teal py-2 px-5 text-teal">
          Save changes
        </p>
      </button>
    </>
  );
};
