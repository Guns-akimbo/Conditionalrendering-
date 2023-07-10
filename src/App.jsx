import Card from './Card'
import './App.css'

function App() {

  return (
    <>
      <main className='Container'>
        <Card sex=" Female" user="Grace Ekele" stack="Backend developer" paid={true} stacked={true} />
        <Card sex=" male" user="Stanley ubah" stack="front developer" burna={true} />
        <Card sex=" male" user="Micheal Okpoko " stack="Backend developer" burna={true} stacked={true} />
        <Card sex=" Female" user="Munachi Okwara" stack="front developer" paid={true} />
        <Card sex=" male" user="Ozigbo IK" stack="Backend developer" stacked={true} burna={true} />
        <Card sex=" Female" user="Fathia Salau" stack="front developer" paid={true} />
        <Card sex=" male" user="Judah Tobe" stack="Backend developer" stacked={true} burna={true} />
        <Card sex=" male" user="Omojoye Kolade" stack="front developer" burna={true} />
        <Card sex=" Female" user="Yewaxy Baby" stack="Backend developer" paid={true} stacked={true} />
        <Card sex=" male" user="Donald Belonu" stack="front developer" burna={true} />



      </main>



    </>
  )
}

export default App
