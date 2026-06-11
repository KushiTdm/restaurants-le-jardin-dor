'use client'

const WA_URL =
  'https://wa.me/33143000000?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20une%20table%20au%20Jardin%20d%27Or'

export default function WhatsAppButton() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Réserver via WhatsApp"
      style={{
        position: 'fixed',
        bottom: 28,
        right: 28,
        zIndex: 999,
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: '#25D366',
        boxShadow: '0 4px 20px rgba(37,211,102,.45)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform .18s, box-shadow .18s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.1)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow =
          '0 6px 28px rgba(37,211,102,.6)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow =
          '0 4px 20px rgba(37,211,102,.45)';
      }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.38 1.26 4.8L2.05 22l5.42-1.42a9.94 9.94 0 0 0 4.57 1.11c5.46 0 9.91-4.45 9.91-9.91C22 6.45 17.5 2 12.04 2zm5.52 14.09c-.23.63-1.35 1.21-1.85 1.28-.5.07-1.05.1-1.69-.11-.38-.12-.88-.28-1.51-.55-2.65-1.14-4.38-3.79-4.51-3.97-.13-.18-1.07-1.43-1.07-2.72 0-1.3.68-1.94 1.01-2.28.33-.34.72-.42 1-.42.27 0 .53 0 .77.01.24.01.57-.09.88.67.32.77.98 2.35 1.07 2.52.09.17.15.37.03.59-.12.22-.18.35-.36.54-.17.19-.37.42-.53.57-.17.17-.34.34-.15.68.19.34.85 1.4 1.83 2.27 1.26 1.12 2.32 1.47 2.65 1.64.33.17.52.14.71-.08.2-.23.84-1 1.06-1.34.22-.34.44-.28.74-.17.3.11 1.9.9 2.22 1.06.32.17.54.25.62.39.08.14.08.78-.15 1.41z" />
      </svg>
    </a>
  )
}
