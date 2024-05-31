// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const RenderBlocks = ({ blocks }) => {
  return (
    <div>
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'text':
            return <p key={index}>{block.content}</p>;
          case 'image':
            return <img key={index} src={block.url} alt={block.alt} />;
          // Add more cases for different block types here
          default:
            return <div key={index}>Unknown block type</div>;
        }
      })}
    </div>
  );
};

export default RenderBlocks;
