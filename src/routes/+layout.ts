import { createBrowserClient, createServerClient, isBrowser, parse } from "@supabase/ssr";
import type { LayoutLoad } from "./$types";
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from "$env/static/public";
import type { Database } from "$lib/supabase";

export const load: LayoutLoad = async ({ fetch, data, depends }) => {
    depends('supabase:auth')

    const supabase = isBrowser()
        ? createBrowserClient<Database>(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
            global: {
                fetch,
            },
        })
        : createServerClient<Database>(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
            global: {
                fetch,
            },
            cookies: {
                getAll() {
                    return data.cookies
                },
            },
        })

    /**
     * It's fine to use `getSession` here, because on the client, `getSession` is
     * safe, and on the server, it reads `session` from the `LayoutData`, which
     * safely checked the session using `safeGetSession`.
     */
    const {
        data: { session },
    } = await supabase.auth.getSession()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    return { supabase, session, user }
}