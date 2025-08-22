import type { FC, PropsWithChildren } from 'hono/jsx'

interface ContentProps extends PropsWithChildren {
  title: string
}

export const Content: FC<ContentProps> = ({ title, children }) => {
  return (
    <>
      <div class="article-meta">
        <h1><span class="title">{title}</span></h1>
      </div>
      {children}
    </>
  )
}

export const BackButton: FC = () => {
  return (
    <button onclick="history.back()" style="margin-bottom: 1em;">← Back</button>
  )
}
