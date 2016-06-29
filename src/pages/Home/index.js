import React from 'react';
import HelloWorld from '../../components/HelloWorld';

function HomePage() {
  const helloWorldStyle = { color: 'green' };

  return (
    <div>
      <h2>Welcome to the boilerplate</h2>
      <HelloWorld style={helloWorldStyle} />
    </div>
  );
}

export default HomePage;
