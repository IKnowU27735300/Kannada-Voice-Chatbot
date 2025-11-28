import React from 'react';
import { useGeminiLive } from './hooks/useGeminiLive';
import { Visualizer } from './components/Visualizer';
import { Controls } from './components/Controls';
import { ConnectionState } from './types';

const App: React.FC = () => {
  const { 
    connectionState, 
    connect, 
    disconnect, 
    volume, 
    isAiSpeaking,
    error 
  } = useGeminiLive();

  const isActive = connectionState === ConnectionState.CONNECTED;

  return (
    <div className="min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden selection:bg-violet-500/30">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-violet-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[100px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative w-full max-w-2xl aspect-square max-h-[80vh] flex flex-col items-center justify-center">
        
        {/* Visualizer Layer */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Visualizer 
            volume={volume} 
            isAiSpeaking={isAiSpeaking} 
            isActive={isActive} 
          />
        </div>

        {/* Status Indicator (Top) */}
        <div className="absolute top-10 flex flex-col items-center gap-2 z-20">
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-200 px-4 py-2 rounded-full text-sm backdrop-blur-md animate-fade-in">
              {error}
            </div>
          )}
          
          {!error && isActive && (
             <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
               <span className="text-emerald-400 text-xs font-medium uppercase tracking-wider">Live Session</span>
             </div>
          )}
        </div>

        {/* Controls (Center/Bottom) */}
        <div className="absolute bottom-20 w-full flex justify-center z-20">
           <Controls 
             connectionState={connectionState}
             onConnect={connect}
             onDisconnect={disconnect}
           />
        </div>
      </div>

      {/* Footer Info */}
      <div className="absolute bottom-6 text-center text-slate-600 text-xs">
        <p>Ensure microphone permissions are allowed.</p>
      </div>

    </div>
  );
};

export default App;