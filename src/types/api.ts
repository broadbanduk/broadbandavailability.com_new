/**
 * Shared API types for client-side requests and responses
 */

export interface ApiSuccessResponse {
  success: true;
  message: string;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  errors?: Record<string, string>;
}

export type ApiResponse = ApiSuccessResponse | ApiErrorResponse;

export interface AccessRequestPayload {
  name: string;
  email: string;
  company_name?: string;
  contact_number?: string;
  industry?: string;
  message: string;
  site_section?: string;
}
