export interface FalconResponse {
  generated_text: string;
}

export interface FalconError {
  error: string;
  message?: string;
}