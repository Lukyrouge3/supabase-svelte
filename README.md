# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

Now also powered by [`flowbite-svelte`](https://flowbite-svelte.com/) and [`supabase`](https://supabase.com/).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
git clone https://github.com/Lukyrouge3/supabase-svelte
cd supabase-svelte
pnpm i
# Add your .env and your lib/supabase.ts now
pnpm dev
```

## Environment and typing

You'll need to setup either a `.env` or simply export those variables in order for supabase to work:
- `PUBLIC_SUPABASE_ANON_KEY`
- `PUBLIC_SUPABASE_URL`

And in order to have your supabase correctly typed you need to add your `supabase.ts` (generated either via CLI or via the API docs page) into `src/lib/supabase.ts`

## Building

To create a production version of your app:

```bash
pnpm build
```

You can preview the production build with `pnpm preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
