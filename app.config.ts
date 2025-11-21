
export default {
  expo: {
    name: "real-estate-app",
    slug: "real-estate-app",
    extra: {
      SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
    }
  }
}

export const SUPABASE_URL = process.env.EXPO_PUBLIC_SUPABASE_URL as string;
export const SUPABASE_ANON_KEY = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY as string;
