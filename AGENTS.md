<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Use four TanStack content routes with a shared root navigation and footer; every leaf owns Portuguese page-specific metadata.
- Keep portfolio niche content and contact validation in browser-safe shared modules so form options and solution cards stay aligned.
- Store contact submissions through a validated public server function; lead data is private and never readable by anonymous visitors.
- Use global semantic CSS tokens and shared Button variants for all visual styling and interactive actions.
