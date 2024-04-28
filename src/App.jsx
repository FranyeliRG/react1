import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import MyCard from './components/MyCard'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header titulo='Adopta un Perrito'/>
      <div className="container d-flex justify-content-center p-5 bg-light">
        <div className="row">
            <div className="col-md-4 m-3">
                <MyCard
                    image='https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    name='Aaron'
                    description='Los Labradores Retrievers son una raza de perros muy populares conocidos por su amabilidad, inteligencia y naturaleza activa. ¡Son perros fantásticos!'
                    raza='Labrador Retriever'
                    bgColor='primary'
                />
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 m-3">
                <MyCard
                    image='https://images.unsplash.com/photo-1551717743-49959800b1f6?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    name='Mimo & Lucas'
                    description=' Son perros enérgicos, amigables y juguetones, originarios de Siberia y tradicionalmente utilizados como perros de trineo.'
                    raza='Huskies Siberianos'
                    bgColor='success'
                />
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 m-3">
                <MyCard
                    image='https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    name='Beto'
                    description='Les encanta explorar su entorno, jugar con juguetes y correr en círculos alrededor de sus dueños. Son conocidos por ser cariñosos y leales, lo que los convierte en excelentes compañeros familiares. '
                    raza='Boxer cachorro'
                    bgColor='info'
                />
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 m-3">
                <MyCard
                    image='https://images.unsplash.com/photo-1477973770766-6228305816df?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    name='Max'
                    description='A pesar de su apariencia, son conocidos por ser afectuosos, leales y amigables con las personas. Son perros inteligentes y enérgicos que requieren ejercicio regular y socialización temprana para ser mascotas equilibradas.'
                    raza='Pitbull'
                    bgColor='danger'
                />
            </div>
        </div>
    </div>
    <div>
    <Footer text='Ingresa a nuestra galería de imágenes y encuentra a tu compañero ideal. Recuerda que todos merecen de tu cariño.' />
    </div>
    </>
  )
}

export default App