import { supabaseClient } from "@/backend/lib/supabaseClient";
import { AuthResponse } from "@supabase/supabase-js";

// Sign up with email and password
export const signUp = async ( email: string, password: string): Promise<AuthResponse> => {
  return await supabaseClient.auth.signUp({ email, password });
};

// Sign in with email and password
export const signIn = async (email: string, password: string): Promise<AuthResponse> => {
    if(!email || !password){
        throw new Error("Email and password are required");
    }
    if(password.length < 6){
        throw new Error("Password must be at least 6 characters long");
    }
    if(email.indexOf('@') === -1){
        throw new Error("Invalid email address");
    }
  return await supabaseClient.auth.signInWithPassword({ email, password });
};

// Sign out
export const signOut = async (): Promise<{ error: Error | null }> => {
  return await supabaseClient.auth.signOut();
};