import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', // Exclude static files and _next folder
    '/', // Allow the homepage
    '/api/webhooks/clerk', // Allow the /api/webhooks/clerk route
  ],
};


