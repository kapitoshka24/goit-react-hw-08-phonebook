import React from "react";
import PropTypes from "prop-types";
import "../../styles/filter.scss";

const Filter = ({ value, onChangeFilter }) => (
  <label className="filter-label">
    Find contacts by name
    <input
      className="filter-input"
      type="text"
      value={value}
      onChange={(e) => onChangeFilter(e.target.value)}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
