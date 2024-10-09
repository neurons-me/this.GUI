import React from 'react';
import PropTypes from 'prop-types';
import './ComparisonTable.css';

export const ComparisonTable = ({
  headers,
  rows,
  rowHeaders,
  highlightColumn,
  headerBgColor,
  rowHeaderBgColor,
  highlightBgColor,
  borderColor,
}) => {
  return (
    <div className="comparison-table-container">
      <table className="comparison-table" style={{ borderColor: `var(--${borderColor})` }}>
        <thead>
          <tr>
            <th></th>
            {headers.map((header, index) => (
              <th
                key={index}
                className={highlightColumn === index ? 'highlight' : ''}
                style={{
                  backgroundColor: `var(--${headerBgColor})`,
                  borderColor: `var(--${borderColor})`,
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td
                className="row-header"
                style={{
                  backgroundColor: `var(--${rowHeaderBgColor})`,
                  borderColor: `var(--${borderColor})`,
                }}
              >
                {rowHeaders[rowIndex]}
              </td>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={highlightColumn === cellIndex ? 'highlight' : ''}
                  style={{
                    backgroundColor: highlightColumn === cellIndex ? `var(--${highlightBgColor})` : 'inherit',
                    borderColor: `var(--${borderColor})`,
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

ComparisonTable.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  rows: PropTypes.arrayOf(PropTypes.array).isRequired,
  rowHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
  highlightColumn: PropTypes.number,
  headerBgColor: PropTypes.oneOf([
    'primary-color', 'secondary-color', 'info-color', 'warning-color', 'alert-color', 'success-color', 'neutral-color', 'dark-color',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
  rowHeaderBgColor: PropTypes.oneOf([
    'primary-color', 'secondary-color', 'info-color', 'warning-color', 'alert-color', 'success-color', 'neutral-color', 'dark-color',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
  highlightBgColor: PropTypes.oneOf([
    'primary-color', 'secondary-color', 'info-color', 'warning-color', 'alert-color', 'success-color', 'neutral-color', 'dark-color',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
  borderColor: PropTypes.oneOf([
    'primary-color', 'secondary-color', 'info-color', 'warning-color', 'alert-color', 'success-color', 'neutral-color', 'dark-color',
    'classy-color-1', 'classy-color-2', 'classy-color-3', 'classy-color-4', 'classy-color-5',
    'small-switch-color-1', 'small-switch-color-2', 'natural-color-1', 'natural-color-2', 'natural-color-3',
    'grey-friend-1', 'grey-friend-2', 'shade-1', 'shade-2', 'shade-3', 'shade-4',
  ]),
};

ComparisonTable.defaultProps = {
  highlightColumn: null,
  headerBgColor: 'neutral-color',
  rowHeaderBgColor: 'neutral-color',
  highlightBgColor: 'primary-color',
  borderColor: 'neutral-color',
};