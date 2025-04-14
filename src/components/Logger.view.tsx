import React from 'react';

export const Logger: React.FC = () => {
  return (
    <div className="logger">
      <div className="log-list">
        <div className="log-item">Event: loadstart</div>
        <div className="log-item">Event: durationchange</div>
        <div className="log-item">Event: loadedmetadata</div>
        <div className="log-item">Event: loadeddata</div>
        <div className="log-item">Can play</div>
      </div>
    </div>
  );
};
