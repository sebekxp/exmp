import React from 'react';

type CanvasContextType = CanvasRenderingContext2D | null;

const CanvasContext = React.createContext<CanvasContextType | null>(null);
export default CanvasContext;
