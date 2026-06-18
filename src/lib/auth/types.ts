export type AdminUser = {
  id: string;
  githubId: number;
  username: string | null;
};

export interface AuthProvider {
  getCurrentUser(): Promise<AdminUser | null>;
  requireAdmin(): Promise<AdminUser>;
  signOut(): Promise<void>;
  exchangeCode(code: string): Promise<boolean>;
}
