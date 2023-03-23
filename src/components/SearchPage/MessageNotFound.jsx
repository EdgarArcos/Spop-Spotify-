import React from "react";

export const MessageNotFound = ({ query }) => {
  return (
    <div className="flex flex-col text-center p-20 md:text-left md:px-14 md:py-3">
      <h2 className="text-xl mb-5">Could not be found "{query}"</h2>
      <p className="text-sm">
        re-search with a different keyword or otherwise typed
      </p>
    </div>
  );
};
