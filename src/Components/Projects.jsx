import React, { useState, useEffect } from 'react';
import '../App.css';

const Projects = () => {

  const [apiData, setApiData] = useState(null);

  const fetchApiData = async() => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setApiData(data);

    }catch(error)
    {
      console.error('Error fetching API Data:', error);
    }
  };
  const Calculator = () => {
    const [input, setInput] = useState('');

    // Functions to handle user input and calculation
    const handleClick = (value) => {
      setInput((prev) => prev + value);
    };

    const handleClear = () => {
      setInput('');
    };

    const handleCalculate = () => {
      try {
        setInput(eval(input)); // Using eval for simplicity, but be cautious with eval in production code
      } catch (e) {
        setInput('Error');
      }
    };

    return (

     
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <div className="buttons">
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={handleClear}>C</button>
          <button onClick={handleCalculate}>=</button><button onClick={() => handleClick('+')}>+</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('*')}>*</button>
          <button onClick={() => handleClick('/')}>/</button>
        </div>
      </div>
    );
  };

  useEffect (()=>{
    fetchApiData();
  }, []);

  return (
    <section id="projects" style={{ padding: '20px' }}>
      <h2>Projects</h2>
      <h3>Calculator</h3>
      <div className="Calculator">
        <Calculator />
      </div>

      <h3>API Data</h3>
      <div className="api-data">
      {apiData ? (
          <ul>
            {apiData.slice(0, 5).map((post) => (
              <li key={post.id}>
                <h4>ID:{post.id}</h4>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
