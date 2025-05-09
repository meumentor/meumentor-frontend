import Link from "next/link";

export default function Footer() {
  return <div style={{ background: 'var(--black300)', color: '#fff', display: 'flex', flexDirection: 'column', padding: 20 }}>
    <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
      <div>
        <h6>Links</h6>
        <ul style={{ listStyle: 'none', paddingInlineStart: 0 }}>
          <li><Link style={{ color: '#fff', textDecoration: 'none' }} href="/termos-de-uso">Termos de Uso</Link></li>
          <li><Link style={{ color: '#fff', textDecoration: 'none' }} href='/privacidade'>Política de Privacidade</Link></li>
        </ul>
      </div>
      <div></div>
    </div>
    <p style={{ margin: 0, alignSelf: 'center' }}>Meu Mentor © {new Date().getFullYear()}</p>
  </div>
}