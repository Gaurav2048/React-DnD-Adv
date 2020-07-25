import React from 'react';

const Header = ({ data, setData, subject, setSubject }) => {
  const loadData = (e) => {
    const storedContent = [
      {
        standard: '',
        content: [
          {
            id: 0,
            chapterTitle: 'Number System',
            topics: [
              {
                id: 'Red',
                name: 'Introduction',
              },
              {
                id: 'Green',
                name: 'Addition and multipliation theorams',
              },
              {
                id: 'Blue',
                name: 'Power theorams',
              },
              {
                id: 'Yellow',
                name: 'Logarithim and exponents',
              },
            ],
          },
          {
            id: 1,
            chapterTitle: 'Geometry',
            topics: [
              {
                id: 'Black',
                name: 'Introduction',
              },
              {
                id: 'White',
                name: 'Circle and Ellipses',
              },
              {
                id: 'Orange',
                name: 'Lines and graphs',
              },
            ],
          },
        ],
      },
    ];

    setData(storedContent);
  };

  const exportData = (e) => {};

  return (
    <div className="header">
      <input
        placeholder="SUBJECT NAME"
        className="subject_name"
        value={subject}
        onChange={(e) => setSubject(e.value)}
      />
      <button
        style={{ marginLeft: '50%', marginRight: '10px' }}
        onClick={loadData}
      >
        Load Stored Data
      </button>
      <button onClick={exportData}> Export Data </button>
      <div style={{ borderBottom: '.5px solid #EEEEEE', width: '100%' }}></div>
    </div>
  );
};

export default Header;
