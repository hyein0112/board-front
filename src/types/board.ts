export interface uploadType {
  id: number;
  title: string;
  content: string;
}

export interface updateType {
  id: number;
  title?: string;
  content?: string;
}

export interface deleteType {
  id: number;
}
