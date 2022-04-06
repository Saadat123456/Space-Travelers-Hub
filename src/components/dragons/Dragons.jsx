import React from 'react';
import { useSelector } from 'react-redux';
import Dragon from './Dragon';

const Dragons = () => {
  const dragonsList = useSelector((state) => state.dragonReducer);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
    paddingTop: '1rem',
    borderTop: '1px solid #dfdfdf',
  };
  const innerStyle = {
    display: 'flex',
    width: '80%',
    maxWidth: '960px',
  };
  const listStyle = {
    display: 'flex',
    flexDirection: 'column',
    listStyle: 'none',
    margin: '0',
    padding: '0',
  };

  const renderState = () => {
    switch (dragonsList.status) {
      case 'FETCHING_DRAGONS':
        return <li>LOADING...</li>;
      case 'FETCHING_FAILED':
        return <li>{`Something went wrong: ${dragonsList.error}`}</li>;
      case 'FETCHING_SUCCEEDED':
        return dragonsList.dragons.map((item) => (
          <li key={item.id}>
            <Dragon
              id={item.id}
              name={item.name}
              type={item.type}
              description={item.description}
              image={item.flickr_images}
            />
          </li>
        ));
      default:
        return <li>Unexpected behavior</li>;
    }
  };

  return (
    <div style={containerStyle}>
      <section style={innerStyle}>
        <ul style={listStyle}>
          {renderState()}
        </ul>
      </section>
    </div>
  );
};

export default Dragons;