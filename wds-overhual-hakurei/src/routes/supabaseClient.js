import {createClient} from '@supabase/supabase-js'

export const supabase = createClient('https://zctrlenqlrngiyebfzvs.supabase.co',
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjdHJsZW5xbHJuZ2l5ZWJmenZzIiwicm" +
    "9sZSI6ImFub24iLCJpYXQiOjE3MDE0OTY5ODEsImV4cCI6MjAxNzA3Mjk4MX0.MjS-NsOmigVxG2I--IE3wV1_2cMOFAGU8oTkoFJAjO4")