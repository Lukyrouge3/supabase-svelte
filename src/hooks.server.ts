import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from "$env/static/public";
import type { Handle } from "@sveltejs/kit";
import type { CookieSerializeOptions } from "cookie";
import { createServerClient } from '@supabase/ssr'

export const handle: Handle = async ({ event, resolve }) => {

    event.locals.supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        cookies: {
            get: (key: string) => event.cookies.get(key),
            set: (key: string, value: string, options: CookieSerializeOptions) => {
                event.cookies.set(key, value, { ...options, path: options.path || '/' })
            },
            remove: (key: string, options: CookieSerializeOptions) => {
                event.cookies.delete(key, { ...options, path: options.path || '/' })
            },
        },
    })

    /**
    * A convenience helper so we can just call await getSession() instead const { data: { session } } = await supabase.auth.getSession()
    */
    event.locals.getSession = async () => {
        const {
        data: { session },
        } = await event.locals.supabase.auth.getSession()
        return session
    }

    return resolve(event, {
        filterSerializedResponseHeaders(name) {
        return name === 'content-range'
        },
    })
};