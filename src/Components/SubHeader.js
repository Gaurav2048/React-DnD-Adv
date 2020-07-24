import React from 'react';

const Header = ({ data, setStandard }) => {
  return (
    <div className="secondary_header">
      <div style={{ width: '40%', margin: '0px 0px' }}>
        <span className="action">Action</span> <br />
        <span className="action_type"> Move, Indent</span>
        <br />
        <span className="action_type">Outdent, Delete</span>
      </div>
      <div style={{ width: '60%' }}>
        <span className="action">Standard</span> <br />
        <input
          placeholder="standard text goes here"
          className="standard_text"
          value={data[0].standard}
          onChange={(e) => {
            const copyData = JSON.parse(JSON.stringify(data));
            copyData[0].standard = e.value;
            setStandard(copyData);
          }}
        />
      </div>
    </div>
  );
};

export default Header;
