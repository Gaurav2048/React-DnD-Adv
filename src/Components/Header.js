import React from 'react';

const Header = ({ subject, setSubject }) => {
  return (
    <div className="header">
      <input
        placeholder="SUBJECT NAME"
        className="subject_name"
        value={subject}
        onChange={(e) => setSubject(e.value)}
      />
      <div style={{ borderBottom: '.5px solid #EEEEEE', width: '100%' }}></div>
    </div>
  );
};

export default Header;
