'use client'

export default function DeleteButton({ action, title, slug }) {
  return (
    <form action={action}>
      <input type="hidden" name="slug" value={slug} />
      <button
        type="submit"
        className="font-body text-xs text-red-500 hover:text-red-400 px-3 py-1.5 rounded-lg hover:bg-red-900/20 transition-colors"
        onClick={(e) => { if (!confirm(`Hapus post "${title}"?`)) e.preventDefault() }}
      >
        Hapus
      </button>
    </form>
  )
}
