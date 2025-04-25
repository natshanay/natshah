import { verifyWebhook } from '@clerk/nextjs/webhooks';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
    // Debug: Log ALL headers
    const headers = Object.fromEntries(req.headers.entries());
    console.log("Incoming Headers:", headers);
  
    try {
      const evt = await verifyWebhook(req);
      // ... rest of your code
    } catch (err) {
      console.error("Error:", err);
      return new Response("Webhook failed", { status: 400 });
    }
  }