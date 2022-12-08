import React from "react";
import { FaTrash } from "react-icons/fa";
import PropTypes from "prop-types";

export const DeleteButton = ({ id, onDelete }) => {
  return (
    <>
      <button className="btn-delete" onClick={() => onDelete(id)}>
        <FaTrash />
      </button>
    </>
  );
};

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
