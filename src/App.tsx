import './index.css';
import React from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Form from './components/Form';

const App = () => {
  const cards = [
    {
      title: 'Card 1',
      content: 'This is the content of Card 1.',
    },
    {
      title: 'Card 2',
      content: 'This is the content of Card 2.',
    },
    {
      title: 'Card 3',
      content: 'This is the content of Card 3.',
    },
  ];

  return (
    <div className="p-4 space-y-8 bg-color-black">
      <div>
        <h2 className="text-xl font-semibold mb-2">Buttons</h2>
        <div className="space-x-4">
          <Button className="bg-blue-500 hover:bg-blue-600">Primary Button</Button>
          <Button className="bg-green-500 hover:bg-green-600">Secondary Button</Button>
          <Button className="border border-purple-500 text-purple-500 hover:bg-purple-100">
            Outlined Button
          </Button>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Card Components</h2>
        <div className="flex space-x-4">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Form Component</h2>
        <div className="flex space-x-4">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
