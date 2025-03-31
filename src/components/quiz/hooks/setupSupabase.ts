
import { supabase } from '@/integrations/supabase/client';

export const setupSupabaseFunctions = async () => {
  // Create the increment function if it doesn't exist
  try {
    // Check if the function exists first to avoid errors
    const { data, error } = await supabase.functions.invoke('create-increment-function');
    
    if (error && !error.message.includes('already exists')) {
      console.error('Error creating increment function:', error);
      
      // Create the function manually if it doesn't exist
      // Use raw SQL query as a workaround for TypeScript issues with rpc
      const { error: functionError } = await supabase.functions.invoke('exec-sql', {
        body: {
          sql: `
            CREATE OR REPLACE FUNCTION increment(row_count INT)
            RETURNS INT AS $$
            BEGIN
              RETURN row_count + 1;
            END;
            $$ LANGUAGE plpgsql;
            
            CREATE OR REPLACE FUNCTION create_increment_function()
            RETURNS VOID AS $$
            BEGIN
              -- Function already created
            END;
            $$ LANGUAGE plpgsql;
          `
        }
      });
      
      if (functionError) {
        console.error('Error creating manual increment function:', functionError);
      }
    }
  } catch (error) {
    console.error('Error setting up Supabase functions:', error);
  }
};
