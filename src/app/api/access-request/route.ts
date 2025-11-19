/**
 * Access Request API Route
 * Handles form submissions and stores them in Airtable
 */

import { NextRequest, NextResponse } from 'next/server';
import { accessRequestSchema, formatValidationErrors } from '@/lib/validations';

/**
 * POST /api/access-request
 * Submit an access request form
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json().catch(() => null);

    if (!body) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid request body',
        },
        { status: 400 }
      );
    }

    // Validate request data
    const validationResult = accessRequestSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: formatValidationErrors(validationResult.error),
        },
        { status: 422 }
      );
    }

    const data = validationResult.data;

    // Validate Airtable configuration
    const token = process.env.AIRTABLE_TOKEN;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_TABLE_NAME;

    if (!token || !baseId || !tableName) {
      console.error('[Access Request] Airtable configuration missing');
      return NextResponse.json(
        {
          success: false,
          message: 'Server configuration error. Please contact support.',
        },
        { status: 500 }
      );
    }

    // Prepare Airtable payload
    const airtablePayload = {
      records: [
        {
          fields: {
            'Full Name': data.name,
            'Email': data.email,
            'Company Name': data.company_name,
            'Contact Number': data.contact_number,
            'Industry': data.industry,
            'Message': data.message,
            'Site Section': data.site_section,
          },
        },
      ],
    };

    // Submit to Airtable
    const airtableUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;
    const airtableResponse = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(airtablePayload),
    });

    if (!airtableResponse.ok) {
      const errorData = await airtableResponse.json().catch(() => ({}));
      console.error('[Access Request] Airtable API error:', {
        status: airtableResponse.status,
        error: errorData,
      });
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to send request. Please try again.',
        },
        { status: 500 }
      );
    }

    // Log success (in production, use a proper logging service)
    console.log('[Access Request] Successfully submitted:', {
      email: data.email,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your access request has been sent successfully.',
      },
      { status: 200 }
    );
  } catch (error) {
    // Log error (in production, use a proper logging service)
    console.error('[Access Request] Error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      timestamp: new Date().toISOString(),
    });

    // Generic error response
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send request. Please try again.',
      },
      { status: 500 }
    );
  }
}

/**
 * Handle unsupported HTTP methods
 */
export async function GET() {
  return NextResponse.json(
    {
      success: false,
      message: 'Method not allowed',
    },
    { status: 405 }
  );
}
