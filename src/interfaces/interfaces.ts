export interface IContact {
  createdAt: string;
  name: string;
  avatar: string;
  messages: IMessage[];
  id: string;
}

export interface IMessage {
  id: string;
  type: 'incoming' | 'outgoing';
  createdAT: string;
  value: string;
  role?: 'user' | 'assistant';
}
