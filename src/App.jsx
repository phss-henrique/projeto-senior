import './App.css'

const PIX_NUMERO = '42904694854'
const PIX_PETER = 'pedrohenrique2937@gmail.com'

function App() {
  return (
    <div className="container">

      <div className="card">
        <section>
          <h1 className="title">pix do mota</h1>
          <p className="numero">{PIX_NUMERO}</p>
        </section>

        <section>
          <h1 className="title">pix do peter</h1>
          <p className="numero">{PIX_PETER}</p>
        </section>
      </div>

    </div>
  )
}

export default App
