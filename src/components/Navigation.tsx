import type { FC } from 'hono/jsx'

export const Navigation: FC = () => {
  return (
    <nav class="nav-top small">
      <button class="hamburger-button" aria-label="Toggle Navigation">☰</button>
      <div class="nav-links">
        <span id="lightmodebutton" class="menu-item theme-toggle">
          <label for="light-mode" id="checkbox-description"></label>
          <input id="light-mode" type="checkbox" name="light-mode" />
        </span>
        <span class="menu-item">
          <a href="/">Home</a>
        </span>
        <span class="menu-item">
          <a href="/projects">Projects</a>
        </span>
        <span class="menu-item">
          <a href="/about">About</a>
        </span>
        <span class="menu-item">
          <a href="/posts">Posts</a>
        </span>
      </div>
    </nav>
  )
}
