/* --- STATE --- */
export interface AppState {
  authToken?: string | null;
  loading: boolean;
  loginPayload: LoginRequest | null;
  error: string | null;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  authToken: string;
}
