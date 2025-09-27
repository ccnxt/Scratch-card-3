export default function Home() {
  return (
    <div style={{
      padding: '50px', 
      textAlign: 'center', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
      minHeight: '100vh', 
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{fontSize: '3rem', marginBottom: '20px'}}>
        ScratchStrategy™
      </h1>
      <p style={{fontSize: '1.5rem', marginBottom: '30px'}}>
        Revolutionary Scratch Card Gaming
      </p>
      <div style={{
        background: 'rgba(255,255,255,0.1)', 
        padding: '20px', 
        borderRadius: '10px',
        maxWidth: '500px',
        margin: '0 auto'
      }}>
        <p style={{fontSize: '1.2rem', marginBottom: '15px'}}>✅ Site is Live!</p>
        <p style={{fontSize: '1rem', marginBottom: '15px'}}>
          Every card has winning potential. Strategic gameplay meets guaranteed opportunity.
        </p>
        <p style={{fontSize: '0.9rem', opacity: '0.8'}}>
          Demo launching soon...
        </p>
      </div>
    </div>
  )
}
