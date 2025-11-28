export enum ConnectionState {
  DISCONNECTED = 'disconnected',
  CONNECTING = 'connecting',
  CONNECTED = 'connected',
  ERROR = 'error',
}

export interface AudioVisualizerProps {
  isActive: boolean;
  volume: number; // 0.0 to 1.0
  isSpeaking: boolean; // True if AI is speaking
}

export interface MessageLog {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}