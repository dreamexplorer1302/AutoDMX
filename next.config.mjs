/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // Only the public project URL is shared with browser code.
    NEXT_PUBLIC_SUPABASE_URL:
      process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL,
  },
};

export default nextConfig;
