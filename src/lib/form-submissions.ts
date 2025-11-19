/**
 * API Client for form submissions
 * Provides a clean interface for making API requests
 */

import type { ApiResponse, AccessRequestPayload } from "@/types/api";

/**
 * Base API configuration
 */
const NEXT_PUBLIC_DOMAIN =
  process.env.NEXT_PUBLIC_DOMAIN || "https://broadbandavailability.com";

/**
 * Custom error class for API errors
 */
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public errors?: Record<string, string>,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

/**
 * Submit an access request to Airtable
 */
export async function submitAccessRequest(
  data: AccessRequestPayload,
): Promise<ApiResponse> {
  try {
    const response = await fetch(`${NEXT_PUBLIC_DOMAIN}/api/access-request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result: ApiResponse = await response.json();

    if (!response.ok) {
      throw new ApiError(
        result.message || "Failed to submit request",
        response.status,
        "errors" in result ? result.errors : undefined,
      );
    }

    return result;
  } catch (error) {
    console.error("[Access Request] Error submitting request:", error);
    if (error instanceof ApiError) {
      throw error;
    }

    // Network or parsing errors
    throw new ApiError(
      "Network error. Please check your connection and try again.",
      0,
    );
  }
}
