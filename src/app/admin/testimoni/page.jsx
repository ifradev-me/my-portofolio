import { getAllTestimonials, updateApproval, deleteTestimonial } from '@/lib/testimonials'
import { revalidatePath } from 'next/cache'

export const metadata = { title: 'Kelola Testimoni — Admin Ifrad Dev' }

async function handleToggleApprove(formData) {
  'use server'
  const filename = formData.get('filename')
  const current = formData.get('current') === 'true'
  updateApproval(filename, !current)
  revalidatePath('/admin/testimoni')
  revalidatePath('/testimoni')
}

async function handleDelete(formData) {
  'use server'
  const filename = formData.get('filename')
  deleteTestimonial(filename)
  revalidatePath('/admin/testimoni')
  revalidatePath('/testimoni')
}

function Stars({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} className={`w-3.5 h-3.5 ${i <= rating ? 'text-primary-gold-400' : 'text-background-700'}`}
          fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function AdminTestimoniPage() {
  const testimonials = getAllTestimonials()
  const pending = testimonials.filter(t => !t.approved)
  const approved = testimonials.filter(t => t.approved)

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="font-header font-bold text-text-50 text-3xl">Testimoni</h1>
        <p className="font-body text-text-400 text-sm mt-1">
          {approved.length} approved · {pending.length} pending
        </p>
      </div>

      {pending.length > 0 && (
        <div className="mb-8">
          <h2 className="font-body text-xs uppercase tracking-widest text-text-400 font-semibold mb-3">
            Pending Review ({pending.length})
          </h2>
          <div className="space-y-3">
            {pending.map(t => (
              <TestimoniRow key={t.filename} t={t}
                handleToggleApprove={handleToggleApprove}
                handleDelete={handleDelete} />
            ))}
          </div>
        </div>
      )}

      <div>
        <h2 className="font-body text-xs uppercase tracking-widest text-text-600 font-semibold mb-3">
          Approved ({approved.length})
        </h2>
        {approved.length === 0 ? (
          <p className="font-body text-text-400 text-sm py-8 text-center">Belum ada testimoni approved.</p>
        ) : (
          <div className="space-y-3">
            {approved.map(t => (
              <TestimoniRow key={t.filename} t={t}
                handleToggleApprove={handleToggleApprove}
                handleDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function TestimoniRow({ t, handleToggleApprove, handleDelete }) {
  return (
    <div className="p-4 rounded-xl border border-background-700 bg-background-900
      hover:border-background-600 transition-colors">
      <div className="flex items-start gap-4">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-gold-800 to-primary-blue-800
          flex items-center justify-center text-text-50 font-header font-bold flex-shrink-0">
          {t.name?.[0]?.toUpperCase()}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-0.5">
            <p className="font-body text-text-100 text-sm font-semibold">{t.name}</p>
            <p className="font-body text-text-400 text-xs">
              {t.role}{t.company ? ` · ${t.company}` : ''}
            </p>
            <Stars rating={t.rating} />
            <span className={`ml-auto font-body text-xs px-2 py-0.5 rounded-full
              ${t.approved
                ? 'bg-green-900/40 text-green-400 border border-green-800/50'
                : 'bg-yellow-900/30 text-yellow-500 border border-yellow-800/40'}`}>
              {t.approved ? 'Approved' : 'Pending'}
            </span>
          </div>
          <p className="font-body text-text-300 text-xs leading-relaxed line-clamp-2 mt-1">
            {t.content}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-3 pl-13">
        <form action={handleToggleApprove}>
          <input type="hidden" name="filename" value={t.filename} />
          <input type="hidden" name="current" value={String(t.approved)} />
          <button type="submit"
            className={`font-body text-xs px-3 py-1.5 rounded-lg transition-colors
              ${t.approved
                ? 'text-yellow-500 hover:bg-yellow-900/20'
                : 'text-green-400 hover:bg-green-900/20'}`}>
            {t.approved ? 'Batalkan Approve' : 'Approve'}
          </button>
        </form>
        <form action={handleDelete}>
          <input type="hidden" name="filename" value={t.filename} />
          <button type="submit"
            className="font-body text-xs text-red-500 hover:text-red-400 px-3 py-1.5 rounded-lg
              hover:bg-red-900/20 transition-colors">
            Hapus
          </button>
        </form>
      </div>
    </div>
  )
}
